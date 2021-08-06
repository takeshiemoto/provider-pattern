import { useCallback, useState } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount(() => count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(() => count - 1);
  }, [count]);

  return {
    count,
    increment,
    decrement,
  };
};
