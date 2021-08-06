import { VFC } from 'react';
import { IncrementButton } from './IncrementButton';
import { CounterView } from './CounterView';
import { DecrementButton } from './DecrementButton';

export const Counter: VFC = () => {
  return (
    <div>
      <CounterView />
      <IncrementButton />
      <DecrementButton />
    </div>
  );
};
