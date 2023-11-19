import React from 'react';

import {range} from '../../utils'
import {checkGuess} from '../../game-helpers'
import {words} from '../../data'
function Guess({value}) {

  return (
    <div className="guess-results">
 <p className="guess">
  {value ? console.log(checkGuess(value)) : "hello"}
  {range(5).map(num => (
  <span className="cell" key={num}>{value ? value[num] : undefined}</span>

  ))
  }

  </p>
</div>
  );
}

export default Guess;
