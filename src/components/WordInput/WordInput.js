import React from 'react';

function WordInput() {
  const [wordInput, setWordInput] = React.useState({
    word: "",
    id: ""
  });
  function handleWordInput(event) {

    const inputWord = event.target.value.toUpperCase()
      const nextWordInput = {
      word: inputWord,
      id: Math.random()
      }
    setWordInput(nextWordInput)
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted with word:", wordInput.word);
    setWordInput({
      word: "",
      id: ""
    })
  }
  return <div>
    <form className="guess-input-wrapper"
    onSubmit={handleSubmit}
    >
  <label htmlFor="guess-input">Enter guess:</label>
  <input
  required
  minLength={5}
  maxLength={5}
  pattern="[a-zA-Z]{5}"
  title="5 letter word"
  id="guess-input"
  type="text"
  value={wordInput.word}
  onChange={handleWordInput}
  // key={wordInput.id}
  />
</form>
  </div>;
}

export default WordInput;
