import React from 'react';
import Image from 'next/image';
import styles from './Card.module.css';

interface CardProps {
  image: string;
}

const Card: React.FC<CardProps> = ({ image }) => {
  return <Image className={styles.cardImage} src={image} alt="card" width={160} height={240} />;
};

export default Card;
