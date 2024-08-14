"use client";

import React, { useEffect, useState } from 'react';
import { createDeck, drawCards, shuffleDeck } from '../utils/deckApi';
import { calculatePoints, checkWinner } from '../utils/gameLogic';
import Card from './Card';
import styles from './Game.module.css';

const Game: React.FC = () => {
    const [deckId, setDeckId] = useState<string | null>(null);
    const [playerCards, setPlayerCards] = useState<any[]>([]);
    const [houseCards, setHouseCards] = useState<any[]>([]);
    const [playerPoints, setPlayerPoints] = useState<number>(0);
    const [housePoints, setHousePoints] = useState<number>(0);
    const [result, setResult] = useState<string | null>(null);
    const [remainingCards, setRemainingCards] = useState<number>(52);

    useEffect(() => {
        initializeGame();
    }, []);

    const initializeGame = async () => {
        const deck = await createDeck();
        setDeckId(deck.deck_id);
        setRemainingCards(deck.remaining);
        await dealInitialCards(deck.deck_id);
    };

    const dealInitialCards = async (deckId: string) => {
        const playerInitialCards = await drawCards(deckId, 2);
        const houseInitialCards = await drawCards(deckId, 2);

        setPlayerCards(playerInitialCards.cards);
        setHouseCards(houseInitialCards.cards);
        setPlayerPoints(calculatePoints(playerInitialCards.cards));
        setHousePoints(calculatePoints(houseInitialCards.cards));
        setResult(null);
        setRemainingCards(houseInitialCards.remaining);
    };

    const handleHit = async () => {
        if (!deckId) return;

        const deckResponse = await drawCards(deckId, 1);
        const newCard = deckResponse.cards[0];
        const updatedPlayerCards = [...playerCards, newCard];
        const updatedPlayerPoints = calculatePoints(updatedPlayerCards);

        setPlayerCards(updatedPlayerCards);
        setPlayerPoints(updatedPlayerPoints);
        setRemainingCards(deckResponse.remaining);

        if (updatedPlayerPoints > 21) {
            setResult('House Wins!');
        }
    };

    const handleStand = () => {
        setResult(checkWinner(playerPoints, housePoints));
    };

    const handleNewHand = async () => {
        if (remainingCards < 4) {
            await shuffleDeck(deckId!);
            setRemainingCards(52); // Reset remaining cards count
        }
        await dealInitialCards(deckId!);
    };

    return (
        <div className={styles.game}>
            <div className={styles.section}>
                <h2>House</h2>
                <div className={styles.cards}>
                    {houseCards.map(card => (
                        <Card key={card.code} image={card.image} value={card.value} suit={card.suit} />
                    ))}
                </div>
                <p>Points: {housePoints}</p>
            </div>
            <div className={styles.section}>
                <h2>Player</h2>
                <div className={styles.cards}>
                    {playerCards.map(card => (
                        <Card key={card.code} image={card.image} value={card.value} suit={card.suit} />
                    ))}
                </div>
                <p>Points: {playerPoints}</p>
                <div className={styles.controls}>
                    <button className={styles.button} onClick={handleHit} disabled={!!result}>Hit</button>
                    <button className={styles.button} onClick={handleStand} disabled={!!result}>Stand</button>
                    <button className={styles.button} onClick={handleNewHand} disabled={!result}>New Hand</button>
                </div>
            </div>
            {result && <h2 className={styles.result}>{result}</h2>}
        </div>
    );
};

export default Game;
