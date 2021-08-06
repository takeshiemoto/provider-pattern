import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { createContext, useCallback, useState } from 'react';

const useCounter = () => {
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

export type StoreType = ReturnType<typeof useCounter>;

export const CounterContext = createContext<StoreType | undefined>(undefined);

export const App = () => {
  const value = useCounter();

  return (
    <CounterContext.Provider value={value}>
      <Header />
      <Main />
      <Footer />
    </CounterContext.Provider>
  );
};

export default App;
