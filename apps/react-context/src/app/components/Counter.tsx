import { memo, VFC } from 'react';
import { IncrementButton } from './IncrementButton';
import { CounterView } from './CounterView';
import { DecrementButton } from './DecrementButton';

export const Counter: VFC = memo(() => {
  console.log('render:Counter');
  return (
    <div>
      <CounterView />
      <IncrementButton />
      <DecrementButton />
    </div>
  );
});
