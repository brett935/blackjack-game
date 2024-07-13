import React from 'react';
import Link from 'next/link';
import Game from '../components/Game';
import styles from './page.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Blackjack Game</h1>
      <Link href="/rules">
        <button className={styles.rulesButton}>Click here for Blackjack rules</button>
      </Link>
      <Game />
    </div>
  );
};

export default HomePage;
