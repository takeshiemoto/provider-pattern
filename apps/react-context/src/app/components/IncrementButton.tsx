import { useContext,VFC } from 'react';

import { CounterContext } from '../app';

export const IncrementButton: VFC = () => {
  const context = useContext(CounterContext);
  return <button onClick={() => context?.increment()}>Increment</button>;
};
