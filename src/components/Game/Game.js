import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import WordInput  from "../WordInput/WordInput"
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function handleGuesses(wordInput) {
    const nextGuesses = [...guesses, wordInput]
    setGuesses(nextGuesses);
  }
  return (<>
  <GuessResults guesses={guesses} answer={answer}></GuessResults>
  <WordInput handleGuesses={handleGuesses}></WordInput>
  </>);
}

export default Game;
