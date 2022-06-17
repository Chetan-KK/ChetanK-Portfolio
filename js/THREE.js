/**
 * importing files and modules
 */
import * as THREE from "three";
import '../css/style.css';
// import * as orbitControls from "three/examples/jsm/controls/OrbitControls";
import datGui from "dat.gui";
import RockTexture from "../media/textures/normal texture/rock.jpg";
import ParticleTexture from "../media/textures/particles/1.png";
import gsap from "gsap";
import { loaded } from "./gsap";
import { Clock } from "three";

/**
 * variables
 */

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
});

/**
 * custom controls
 */
window.addEventListener("mousemove", (e) => {
  let multiplier = 2;
  let x = ((e.clientX / window.innerWidth) - .5) * multiplier;
  let y = ((e.clientY / window.innerHeight) - .5) * multiplier;

  // camera.position.set(-x, y, 10);

  torus.rotation.set(y, x, 10);
  box.rotation.set(-y, -x, 10);

  box1.rotation.set(y, x, 10);
  box2.rotation.set(y, x, 10);

  particals.rotation.set(-y / 10, -x / 10, 10);

  // pointLight.position.set(x, y, 3);
});

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
// const ambientLight = new THREE.AmbientLight(0xffff00, 1);
// scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, .5);
directionalLight.position.set(-10, 4, 4);
// directionalLight.visible = false;
scene.add(directionalLight);

gui.add(directionalLight.position, "x").min(-10).max(10).step(0.01);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, .5);
directionalLight2.position.set(10, 4, 4);
directionalLight2.visible = false;
scene.add(directionalLight2);

const pointLight = new THREE.PointLight(0xff0000, .6);
pointLight.position.set(3, 3, 3);
// pointLight.visible = false;
scene.add(pointLight);

gui.add(pointLight, "intensity").name("point light intensity").min(0).max(5).step(0.02);

/**
 * objects
 */
//material
const material = new THREE.MeshStandardMaterial({
  roughness: .6,
  metalness: 1,
  normalMap: rockTexture
});

gui.add(material, "roughness").min(-1).max(2).name("roughness").step(.01);
gui.add(material, "metalness").min(1).max(3).name("metalness").step(.01);

//first group
const firstGroup = new THREE.Group();
const torus = new THREE.Mesh(new THREE.TorusBufferGeometry(2, 1, 32, 100), material);
firstGroup.add(torus);

const box = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1, 1, 1, 1), material);
firstGroup.add(box);

scene.add(firstGroup);

//second group
const secondGroup = new THREE.Group();
const box1 = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1, 1, 1, 1), material);
box1.position.set(5, 0, 0);
secondGroup.add(box1);

const box2 = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1, 1, 1, 1), material);
box2.position.set(-5, 0, 0);
secondGroup.add(box2);

scene.add(secondGroup);

//stars

// let starsCount = 30;

// const starsMaterial = new THREE.MeshStandardMaterial({
//   roughness: .6,
//   metalness: 1,
//   normalMap: rockTexture
// });

// for (let i = 0; i < starsCount; i++) {
//   const starSize = (Math.random() + .5) * Math.random();


//   const starsGeometry = new THREE.TorusKnotGeometry(starSize, 1.2, 23, 6, 9, 9);
//   const Stars = new THREE.Mesh(starsGeometry, starsMaterial);

//   const positionX = (Math.random() - 0.5) * 50;
//   const positionY = (Math.random() - 0.5) * 50;
//   const positionZ = (Math.random() - 0.5) * 50;



//   Stars.position.set(positionX, positionY, positionZ);
//   scene.add(Stars);
// }

/**
 * particles
 */
const particalsGeometary = new THREE.BufferGeometry();
const count = 5000;

const positions = new Float32Array(count * 3);
const colors = new Float32Array(count * 3);

for (let i = 0; i < count; i++) {

  positions[i] = (Math.random() - 0.5) * 50;
  positions[i + 1] = (Math.random() - 0.5) * 50;
  positions[i + 2] = (Math.random() - 0.5) * 50;

  colors[i] = Math.random();
  colors[i + 1] = Math.random();
  colors[i + 2] = Math.random();
  i++;
  i++;
}
particalsGeometary.setAttribute(
  "position",
  new THREE.BufferAttribute(positions, 3)
);

particalsGeometary.setAttribute("color", new THREE.BufferAttribute(colors, 3));

const particalsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
particalsMaterial.size = .5;
particalsMaterial.sizeAttenuation = true;
particalsMaterial.transparent = true;
particalsMaterial.alphaMap = starTexture;
particalsMaterial.alphaTest = 0.001; //or
// particalsMaterial.depthTest = false; //problems with other obj
particalsMaterial.depthWrite = false;
particalsMaterial.blending = THREE.AdditiveBlending;
particalsMaterial.vertexColors = true;

const particals = new THREE.Points(particalsGeometary, particalsMaterial);
scene.add(particals);

/**
 * camera
 */
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.set(-5, .5, 15);
scene.add(camera);

/**
 * controls
 */
// const controls = new orbitControls.OrbitControls(camera, canvas);
// controls.enableDamping = true;

/**
 * renderer
 */
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
// renderer.setClearColor(0xffffff);
renderer.render(scene, camera);

/**
 * tick function
 */


const tick = () => {
  //request frame
  window.requestAnimationFrame(tick);

  //getting elapsed time
  const elapsedTime = clock.getElapsedTime();

  //animations
  torus.rotation.z = elapsedTime / 1.5;
  box.rotation.z = -elapsedTime;

  const secondGroupAnimationTime = (elapsedTime) / 3;
  secondGroup.rotation.set(secondGroupAnimationTime, secondGroupAnimationTime, 0);

  particals.rotation.z = elapsedTime / 10;
  // particals.rotation.y = elapsedTime / 20;

  //update controls
  // controls.update();

  //render
  renderer.render(scene, camera);
};
tick();

gsap.from(camera.position, {
  duration: 4,
  x: -5,
  y: .5,
  z: 50,
  delay: 3.5
});
gsap.from(camera.rotation, {
  duration: 3,
  x: 0,
  y: 3,
  z: 0,
  delay: 3.5
});

/**
 * responsive
 */
window.addEventListener("resize", () => {
  alignCamera();

});
function alignCamera() {
  if (window.innerWidth < 705) {
    camera.position.set(0, -3, 15);
    particals.position.set(0, 0, 100);
  }
  else {
    particals.position.set(0, 0, 0);
    camera.position.set(-5, .5, 15);
  }
}
alignCamera();