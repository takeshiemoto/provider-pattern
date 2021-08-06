import { memo, VFC } from 'react';

import { CounterView } from './CounterView';
import { DecrementButton } from './DecrementButton';
import { IncrementButton } from './IncrementButton';

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
