import React from 'react';

function Guesses(event) {
  const [guess, setGuess] = ""

  function handleGuess(event) {
    const newGuess = {
      guess: "event.target.value",
      id: Math.random()
    }
    const nextGuess = [...guess, newGuess];
    setGuess(nextGuess)
  }

  return (
    <ol>
      {guess.map((guess, id) => {
        return (
          <li key={id}>{guess}</li>
        )
      })}
    </ol>
  );
}
Guesses();

export default Guesses;
