import { useContext,VFC } from 'react';

import { CounterContext } from '../app';

export const CounterView: VFC = () => {
  const context = useContext(CounterContext);
  return <div>{context?.count}</div>;
};
