import { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
  const [state, setState] = useState(0);
  const increment = () => setState((state) => (state += 1));
  const decrement = () => setState((state) => (state -= 1));

  return (
    <div>
      <h1>{state}</h1>
      <button className={classes.btn} onClick={increment}>
        increment
      </button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
