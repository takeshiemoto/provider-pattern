import { VFC } from 'react';

import { Counter } from './Counter';

export const Main: VFC = () => {
  console.log('render:Main');
  return (
    <div>
      <div>Main</div>
      <Counter />
    </div>
  );
};
