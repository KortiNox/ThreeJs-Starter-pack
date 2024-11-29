import { createStore } from 'zustand/vanilla';

const assetsToLoad = [
  {
    path: 'static/textures/eat.jpg',
    id: 'earth',
    type: 'texture',
  },
  {
    path: 'static/textures/mars.jpg',
    id: 'mars',
    type: 'texture',
  },
  {
    path: 'static/textures/mo.jpg',
    id: 'moon',
    type: 'texture',
  },
];

const assetStore = createStore((set) => ({
  assetsToLoad,
  loadedAssets: {},
  addLoadedAsset: (asset, id) =>
    set((state) => ({
      loadedAssets: {
        ...state.loadedAssets,
        [id]: asset,
      },
    })),
}));

export default assetStore;
