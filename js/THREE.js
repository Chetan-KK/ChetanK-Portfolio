/**
 * importing files and modules
 */
import * as THREE from "three";
import '../css/style.css';
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

/**
 * custom controls
 */
// const mouse = {
//   x: 0,
//   y: 0
// };
// window.addEventListener("mousemove", (e) => {
//   let multiplier = 2;
//   let x = ((e.clientX / window.innerWidth) - .5) * multiplier;
//   let y = ((e.clientY / window.innerHeight) - .5) * multiplier;

//   // camera.position.set(-x, y, 10);

//   if (window.innerWidth > 705) {

//     torus.rotation.set(y, x, 10);
//     box.rotation.set(-y, -x, 10);

//     box1.rotation.set(y, x, 10);
//     box2.rotation.set(y, x, 10);

//     particals.rotation.set(-y / 10, -x / 10, 10);

//   }


//   // pointLight.position.set(x, y, 3);
// });

let plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -10);
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

function update() {
  look.x += ((mouse.x - look.x) / easeAmount);
  look.y += ((mouse.y - look.y) / easeAmount);
  raycaster.setFromCamera(look, camera);
  raycaster.ray.intersectPlane(plane, pointOfIntersection);
  torus.lookAt(pointOfIntersection);
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

// gui.add(material, "roughness").min(-1).max(2).name("roughness").step(.01);
// gui.add(material, "metalness").min(1).max(3).name("metalness").step(.01);

//first group
const firstGroup = new THREE.Group();
const torus = new THREE.Mesh(new THREE.TorusBufferGeometry(2, 1, 32, 50), material);
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

/**
 * particles
 */
const particalsGeometary = new THREE.BufferGeometry();
const count = 2000;

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
  torus.position.z = window.scrollY / 200;
  box.position.z = window.scrollY / 200;
  box.position.x = -window.scrollY / 350;

  update();

  particals.rotation.x = window.scrollY / sizes.height;


  secondGroup.position.z = window.scrollY / 200;

  if (window.innerWidth > 705) {
    torus.rotation.z = elapsedTime / 1.5;
    box.rotation.z = -elapsedTime;

    torus.position.x = -window.scrollY / 200;

    const secondGroupAnimationTime = (elapsedTime) / 3;
    secondGroup.rotation.set(secondGroupAnimationTime, secondGroupAnimationTime, 0);

    particals.rotation.z = elapsedTime / 10;


  } else {
    torus.position.y = -window.scrollY / 400;
    torus.rotation.z = elapsedTime / 1.5;
  }

  // particals.rotation.y = elapsedTime / 20;

  //update controls
  // controls.update();

  //render
  // renderer.render(scene, camera);
  effectComposer.render();
};
tick();


/**
 * gsap animation
 */
function gsapAnim() {
  gsap.from(camera.position, {
    duration: 3,
    x: 0,
    y: 0,
    z: -20,
    delay: 2.5,
    ease: "bounce.out"
  });
}

/**
 * responsive
 */
function alignCamera() {
  if (window.innerWidth < 705) {
    camera.position.set(0, -3, 15);

  }
  else {
    particals.position.set(0, 0, 0);
    camera.position.set(-5, .5, 15);
    gsapAnim();
  }
}
alignCamera();