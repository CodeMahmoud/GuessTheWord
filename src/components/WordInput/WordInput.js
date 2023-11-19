import React from 'react';

function WordInput({ handleGuesses, gameStatus }) {
  const [wordInput, setWordInput] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted with word:", wordInput);
    handleGuesses(wordInput)
    setWordInput("")
  }
  return <div>
    <form className="guess-input-wrapper"
    onSubmit={handleSubmit}
    >
  <label htmlFor="guess-input">Enter guess:</label>
  <input
  required
  disabled={gameStatus !== 'running'}
  minLength={5}
  maxLength={5}
  pattern="[a-zA-Z]{5}"
  title="5 letter word"
  value={wordInput}
  onChange={(event) => {
    const nextWord = event.target.value.toUpperCase()
    setWordInput(nextWord)
  }}
  id="guess-input"
  type="text"
  />
</form>
  </div>;
}

export default WordInput;
