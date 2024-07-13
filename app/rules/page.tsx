import React from 'react';
import Link from 'next/link';
import styles from './rules.module.css';

const RulesPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Blackjack Rules</h1>
      <p>
        Blackjack is a card game where players try to get a hand value as close to 21 as possible without going over. 
        Each card has a value, with number cards worth their face value, face cards worth 10, and Aces worth 1 or 11, 
        whichever benefits the hand more. Players are dealt two cards to start and can choose to &quot;Hit&quot; (take another card) 
        or &quot;Stand&quot; (end their turn). The goal is to beat the dealer&apos;s hand without exceeding 21.
      </p>
      <Link href="/">
        <button className={styles.backButton}>Back to Game</button>
      </Link>
    </div>
  );
};

export default RulesPage;
