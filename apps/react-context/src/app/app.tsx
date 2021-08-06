import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { createContext } from 'react';
import { useCounter } from './hooks/useCounter';

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
