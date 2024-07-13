export const calculatePoints = (cards: any[]): number => {
    let points = 0;
    let aces = 0;

    cards.forEach(card => {
        if (card.value === 'ACE') {
            aces += 1;
            points += 11;
        } else if (['KING', 'QUEEN', 'JACK'].includes(card.value)) {
            points += 10;
        } else {
            points += parseInt(card.value, 10);
        }
    });

    while (points > 21 && aces > 0) {
        points -= 10;
        aces -= 1;
    }

    return points;
};

export const checkWinner = (playerPoints: number, housePoints: number): string => {
    if (playerPoints > 21) return 'House Wins!';
    if (housePoints > 21) return 'Player Wins!';
    if (playerPoints === 21) return 'Player Wins!';
    if (playerPoints > housePoints) return 'Player Wins!';
    if (playerPoints < housePoints) return 'House Wins!';
    return 'It\'s a Tie!';
};
