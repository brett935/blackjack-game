"use client";

import React from 'react';

interface CardProps {
    image: string;
    value: string;
    suit: string;
}

const Card: React.FC<CardProps> = ({ image, value, suit }) => {
    return <img src={image} alt={`${value} of ${suit}`} />;
};

export default Card;
