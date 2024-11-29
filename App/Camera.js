import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { sizesStore } from './Utils/Store';

import App from './App';

export default class Camera {
  constructor() {
    this.app = new App();
    this.canvas = this.app.canvas;

    this.sizesStore = sizesStore;
    this.sizes = this.sizesStore.getState();

    this.setInstance();
    this.setControls();
    this.setResizeListner();
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      35,
      this.sizes.width / this.sizes.height,
      0.1,
      1000,
    );
    this.instance.position.z = 5;
  }

  setControls() {
    // инициализируем элемент ОрбитКонтролс
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.enableDamping = true;
    //this.controls.autoRotate = true;
  }

  setResizeListner() {
    this.sizesStore.subscribe((sizes) => {
      this.instance.aspect = sizes.width / sizes.height;
      this.instance.updateProjectionMatrix();
    });
  }

  loop() {
    this.controls.update();
  }
}
