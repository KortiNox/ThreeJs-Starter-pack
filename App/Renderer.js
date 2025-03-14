import * as THREE from 'three';
import App from './App';
import { sizesStore } from './Utils/Store';

export default class Renderer {
  constructor() {
    this.app = new App();
    this.canvas = this.app.canvas;
    this.camera = this.app.camera;
    this.scene = this.app.scene;
    this.sizesStore = sizesStore;
    this.sizes = sizesStore.getState();

    this.setInstance();
    this.setResizeListner();
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true, // убираем эффект лестницы из коробки
    });
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio); // убираем эффект лестницы вручную
  }

  setResizeListner() {
    this.sizesStore.subscribe((sizes) => {
      this.instance.setSize(sizes.width, sizes.height);
      this.instance.setPixelRatio(sizes.pixelRatio);
    });
  }

  loop() {
    this.instance.render(this.scene, this.camera.instance);
  }
}
