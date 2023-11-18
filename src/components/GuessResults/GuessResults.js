import React from 'react';

function GuessResults({guesses}) {

    return (

        <ol>
            {guesses.map((guess, index) => {
                return (
                    <li key={index}>{guess}</li>

                    )
                })}
        </ol>
    )
}

export default GuessResults;
