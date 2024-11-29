import { createStore } from 'zustand/vanilla';

export const sizesStore = createStore((set) => ({
  width: window.innerWidth,
  height: window.innerHeight,
  pixelRatio: Math.min(window.devicePixelRatio, 2),
}));
//const { getState, setState, subscribe, getInitialState } = store;
