import * as THREE from 'three';
import Camera from './Camera';
import Renderer from './Renderer';
import Loop from './Utils/Loop';
import World from './World/World';
import Resize from './Utils/Resize';
import AssetLoader from './Utils/AssetLoader';
import Preloader from './UI/Preloader';

let instance = null;

export default class App {
  constructor() {
    if (instance) return instance;
    instance = this;
    //threejs elements
    this.canvas = document.querySelector('canvas.threejs');
    this.scene = new THREE.Scene();
    //Asset loader
    this.preloader = new Preloader();
    this.assetLoader = new AssetLoader();
    //world
    this.world = new World();
    //camera and renderer
    this.camera = new Camera();
    this.renderer = new Renderer();
    //extra utils
    this.loop = new Loop();
    this.resize = new Resize();
  }
}
