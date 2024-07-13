# Blackjack Game
Deployed with Vercel at: [https://blackjack-game-black.vercel.app/](https://blackjack-game-black.vercel.app/)
![Deployment Status](https://img.shields.io/website-up-down-green-red/https/blackjack-game-black.vercel.app.svg?label=deployment%20status)


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Game Rules](#game-rules)
- [Project Structure](#project-structure)
- [Recommended Extensions](#recommended-extensions)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Blackjack Game project is a web application where you can play Blackjack against the computer (the house). The goal is to beat the house's hand without going over 21.

## Features

- Play Blackjack against the house
- Hit, Stand, and New Hand functionalities
- Shuffle the deck when necessary
- Responsive design for different screen sizes
- Clean and intuitive UI

## Technologies Used

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Deck of Cards API](http://deckofcardsapi.com/) - API for managing and drawing cards
- CSS Modules for styling

## Setup and Installation

### Prerequisites

- Node.js (v18 or later)
- npm (v7 or later)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/blackjack-game.git
    cd blackjack-game
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Run the development server:

    ```sh
    npm run dev
    ```

4. Open your browser and navigate to http://localhost:3000 to see the game in action.

## Usage

- **Hit**: Draw a new card to add to your hand.
- **Stand**: End your turn and compare your hand with the house's hand.
- **New Hand**: Start a new hand. If the deck is running low on cards, it will be shuffled.

## Game Rules

- The game consists of two players: You and the House (the computer).
- The goal is to beat the House's hand without going over 21.
- **Card values**:
  - Number cards (2-10) are worth their face value.
  - Face cards (Jack, Queen, King) are worth 10 points.
  - Ace is worth 1 or 11 points, whichever is more beneficial for your hand.
- The House is initially dealt two face-up cards.
- You are initially dealt two face-up cards and can choose to Hit or Stand.
- The game ends when you Stand, go over 21, or hit 21 exactly.
- You win if your hand is closer to 21 than the House's hand or if the House goes over 21.

## Project Structure

- **app/page.tsx**: Entry point of the application.
- **components/Card.tsx**: Displays individual cards.
- **components/Game.tsx**: Manages the game state and logic.
- **components/Game.module.css**: Styles for the Game component.
- **utils/deckApi.ts**: Handles HTTP requests to the Deck of Cards API.
- **utils/gameLogic.ts**: Contains game logic functions like calculating points and checking the winner.

## Recommended Extensions

To enhance the development experience, the following VS Code extensions are recommended for this project. These extensions should auto prompt to be installed in VSCode thanks to the `.vscode/extensions.json` file.

### Extensions and their purposes

- **ESLint (dbaeumer.vscode-eslint)**: Integrates ESLint into VS Code to provide real-time linting, which helps in identifying and fixing problems in JavaScript and TypeScript code.
- **Prettier - Code Formatter (esbenp.prettier-vscode)**: Automatically formats code according to a consistent style, improving readability and maintaining coding standards across the project.
- **TypeScript Hero (rbbit.typescript-hero)**: Enhances TypeScript support with features like intelligent import management, which makes it easier to handle and organize imports in TypeScript projects.
- **JavaScript (ES6) code snippets (xabikos.javascriptsnippets)**: Provides useful code snippets for JavaScript ES6 syntax, which can speed up coding by allowing quick insertion of commonly used patterns.
- **React/Redux/GraphQL/React-Native snippets (dsznajder.es7-react-js-snippets)**: Offers a set of code snippets for React, Redux, GraphQL, and React Native, which helps in quickly writing common structures and patterns used in these libraries.
- **Stylelint (stylelint.vscode-stylelint)**: Integrates Stylelint into VS Code to provide real-time linting for styles (CSS, SCSS), ensuring consistent and error-free styling.
- **Material Icon Theme (pkief.material-icon-theme)**: Provides a set of clean and visually appealing icons for different file types and folders, improving the visual organization of the project.
- **GitLens (eamodio.gitlens)**: Enhances Git capabilities in VS Code by providing detailed insights into code changes, history, and authorship, making it easier to understand and navigate Git repositories.
- **Git Graph (mhutchie.git-graph)**: Provides a graphical representation of the Git commit history, making it easier to visualize and understand the project's version control history.
- **DotENV (mikestead.dotenv)**: Adds support for .env files, allowing you to easily manage environment variables within your project.
- **VSCode Great Icons (emmanuelbeziat.vscode-great-icons)**: Another set of file icons that improve the visual organization and identification of different types of files in the project.
- **Path IntelliSense (christian-kohler.path-intellisense)**: Provides autocompletion for file paths in VS Code, making it faster and easier to import files and navigate the project directory.
- **Code Spell Checker (streetsidesoftware.code-spell-checker)**: Checks for spelling errors in your code, comments, strings, and text files, helping to ensure clear and professional code documentation.

## Contributing

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

    ```sh
    git checkout -b feature-name
    ```

3. Make your changes and commit them:

    ```sh
    git commit -m "Add some feature"
    ```

4. Push to the branch:

    ```sh
    git push origin feature-name
    ```

5. Open a pull request to the main branch.

## Project Prompt

For detailed information about the project requirements and rules, please refer to the [Project Prompt](./PROJECT.md).