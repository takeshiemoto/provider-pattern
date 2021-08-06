import { InjectionKey, reactive } from 'vue';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useCounter = () => {
  const initialState = { count: 0 };
  const state = reactive<{ count: number }>(initialState);

  const increment = () => {
    state.count++;
  };

  const decrement = () => {
    state.count--;
  };
  return {
    state,
    increment,
    decrement,
  };
};

export type CounterStore = ReturnType<typeof useCounter>;
export const counterInjectionToken: InjectionKey<CounterStore> =
  Symbol('counter');
