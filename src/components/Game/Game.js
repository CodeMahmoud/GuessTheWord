import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import WordInput  from "../WordInput/WordInput"
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');
  function handleGuesses(wordInput) {
    const nextGuesses = [...guesses, wordInput]
    setGuesses(nextGuesses);

    if(wordInput === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }
  return (
  <>
  <GuessResults guesses={guesses} answer={answer}></GuessResults>
  <WordInput handleGuesses={handleGuesses} gameStatus={gameStatus}></WordInput>
  {gameStatus === "won" && (<WonBanner numOfGuesses={guesses.length} />)}
  {gameStatus === "lost" && (<LostBanner answer={answer} />)}
  </>);
}

export default Game;
