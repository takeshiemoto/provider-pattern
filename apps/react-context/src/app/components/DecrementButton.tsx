import { useContext,VFC } from 'react';

import { CounterContext } from '../app';

export const DecrementButton: VFC = () => {
  const context = useContext(CounterContext);
  return <button onClick={() => context?.decrement()}>Decrement</button>;
};
