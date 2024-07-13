import axios from 'axios';

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck';

export const createDeck = async () => {
    const response = await axios.get(`${API_BASE_URL}/new/shuffle/?deck_count=1`);
    return response.data;
};

export const drawCards = async (deckId: string, count: number) => {
    const response = await axios.get(`${API_BASE_URL}/${deckId}/draw/?count=${count}`);
    return response.data;
};

export const shuffleDeck = async (deckId: string) => {
    const response = await axios.get(`${API_BASE_URL}/${deckId}/shuffle/`);
    return response.data;
};
