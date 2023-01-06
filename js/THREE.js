/**
 * importing files and modules
 */
import * as THREE from "three";
import datGui from "dat.gui";
import RockTexture from "../media/textures/normal texture/rock.png";
import ParticleTexture from "../media/textures/particles/1.png";
import gsap from "gsap";
import { loaded } from "./gsap";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';

/**
 * variables
 */
const root = document.querySelector(':root');
let ChangeColorBut = document.getElementById('changeColorBut');

let primaryColor = getComputedStyle(root).getPropertyValue('--primary-color');
let color = new THREE.Color(primaryColor.trim(' '));

ChangeColorBut.value = primaryColor.trim(' ');

ChangeColorBut.addEventListener('change', () => {
  root.style.setProperty('--primary-color', ChangeColorBut.value);

  scene.children[1].color = new THREE.Color(ChangeColorBut.value);

});

//clock
const clock = new THREE.Clock();

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};
const canvas = document.querySelector(".myCanvas");

/**
 * screen sizing
 */
window.addEventListener("resize", () => {
  //update size
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  //update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  //update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.render(scene, camera);


  // effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  // effectComposer.setSize(sizes.width, sizes.height);

});

let plane = new THREE.Plane(new THREE.Vector3(0, 0, 5), -10);
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let look = new THREE.Vector2();
let pointOfIntersection = new THREE.Vector3();
window.addEventListener("mousemove", onMouseMove, false);

const multiplier = 8;

function onMouseMove(e) {

  mouse.x = ((e.clientX / window.innerWidth) - .5) * multiplier;
  mouse.y = - ((e.clientY / window.innerHeight) - .5) * multiplier;

}

const easeAmount = 12;
const divider = 4;
function update() {
  look.x += ((mouse.x - look.x) / easeAmount);
  look.y += ((mouse.y - look.y) / easeAmount);
  raycaster.setFromCamera(look, camera);
  raycaster.ray.intersectPlane(plane, pointOfIntersection);
  torus.lookAt(pointOfIntersection);

  torus.position.x = pointOfIntersection.x / divider;

  torus.position.y = pointOfIntersection.y / divider;
  torus.rotation.z = window.scrollY / 400;

  box.position.x = pointOfIntersection.x / (divider + 2);

  box.position.y = pointOfIntersection.y / (divider + 2);
}

/**
 * loaders
 */
//texture loader
const loadingManager = new THREE.LoadingManager(
  () => {
    loaded();
  }
);


const textureLoader = new THREE.TextureLoader(loadingManager);
const rockTexture = textureLoader.load(RockTexture);
const starTexture = textureLoader.load(ParticleTexture);

/**
 * scene
 */
const scene = new THREE.Scene();

/**
 * gui
 */
const gui = new datGui.GUI();
gui.width = 400;
gui.closed = true;
gui.hide();

/**
 * lights
 */

const directionalLight = new THREE.DirectionalLight(0xffffff, .5);
directionalLight.position.set(-10, 4, 4);
scene.add(directionalLight);

gui.add(directionalLight.position, "x").min(-10).max(10).step(0.01);

// const directionalLight2 = new THREE.DirectionalLight(0xff00ff, .5);
// directionalLight2.position.set(10, 4, 4);
// directionalLight2.visible = false;
// scene.add(directionalLight2);

const pointLight = new THREE.PointLight(color, .6);
pointLight.position.set(3, 3, 3);
scene.add(pointLight);

gui.add(pointLight, "intensity").name("point light intensity").min(0).max(5).step(0.02);

/**
 * objects
 */
//material
let material = new THREE.MeshStandardMaterial({
  roughness: .6,
  metalness: 1,
  normalMap: rockTexture,
});

//first group
const torus = new THREE.Mesh(new THREE.TorusBufferGeometry(1, .5, 32, 64), material);
scene.add(torus);

const box = new THREE.Mesh(new THREE.BoxBufferGeometry(.5, .5, .5, 1, 1, 1), material);
scene.add(box);



/**
 * particles
 */
const particalsGeometary = new THREE.BufferGeometry();
const count = 1000;

const positions = new Float32Array(count * 3);
const colors = new Float32Array(count * 3);

for (let i = 0; i < count * 3; i++) {

  positions[i] = (Math.random() - 0.5) * 50;

  colors[i] = Math.random();
}

particalsGeometary.setAttribute(
  "position",
  new THREE.BufferAttribute(positions, 3)
);

particalsGeometary.setAttribute("color", new THREE.BufferAttribute(colors, 3));

const particalsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
particalsMaterial.size = 1;
particalsMaterial.sizeAttenuation = true;
particalsMaterial.transparent = true;
particalsMaterial.alphaMap = starTexture;
particalsMaterial.alphaTest = 0.001;
particalsMaterial.depthWrite = false;
particalsMaterial.blending = THREE.AdditiveBlending;
particalsMaterial.vertexColors = true;

const particals = new THREE.Points(particalsGeometary, particalsMaterial);
scene.add(particals);

/**
 * camera
 */
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.set(0, 0, 7);
scene.add(camera);

/**
 * renderer
 */
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(sizes.width, sizes.height);

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.render(scene, camera);

/**
 * post processing
 */
const effectComposer = new EffectComposer(renderer);
effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
effectComposer.setSize(sizes.width, sizes.height);

const renderPass = new RenderPass(scene, camera);
effectComposer.addPass(renderPass);

const glitchPass = new GlitchPass();
glitchPass.enabled = false;
effectComposer.addPass(glitchPass);


/**
 * tick function
 */
const tick = () => {
  //request frame
  window.requestAnimationFrame(tick);

  //getting elapsed time
  const elapsedTime = clock.getElapsedTime();

  //animations
  box.rotation.z = elapsedTime;
  box.rotation.y = elapsedTime;

  torus.position.z = window.scrollY / 500;
  box.position.z = window.scrollY / 700;

  particals.rotation.x = window.scrollY / 60;
  particals.rotation.z = elapsedTime / 50;

  update();

  //render
  // renderer.render(scene, camera);
  effectComposer.render();
};
tick();


/**
 * gsap animation
 */
gsap.from(camera.position, {
  duration: 2,
  x: 0,
  y: 0,
  z: -10,
  delay: 2.5,
  ease: "bounce.out"
});
