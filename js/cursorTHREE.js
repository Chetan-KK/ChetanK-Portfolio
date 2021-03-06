import * as THREE from "three";
import RockTexture from "../media/textures/normal texture/rock.jpg";

const cursorCanvas = document.querySelector("#cursorCanvasID");


window.addEventListener("mousemove", (e) => {
    cursorCanvas.style.top = e.clientY + "px";
    cursorCanvas.style.left = e.clientX + "px";
});

const scene = new THREE.Scene();

const sizes = {
    width: 40,
    height: 40
};

const textureLoader = new THREE.TextureLoader();
const rockTexture = textureLoader.load(RockTexture);

const directionalLight = new THREE.DirectionalLight(0xff0000, .5);
scene.add(directionalLight);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, .5);
scene.add(directionalLight2);

const sphere = new THREE.Mesh(new THREE.SphereBufferGeometry(1, 32, 32), new THREE.MeshStandardMaterial({
    roughness: .6,
    metalness: 1, normalMap: rockTexture
}));
scene.add(sphere);

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.set(0, 0, 2.6);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({ canvas: cursorCanvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const clock = new THREE.Clock();

const tick = () => {
    //request frame
    window.requestAnimationFrame(tick);

    //getting elapsed time
    const elapsedTime = clock.getElapsedTime();

    //animations
    sphere.rotation.y = elapsedTime / 2;


    directionalLight.position.z = Math.sin(elapsedTime) * 2;
    directionalLight.position.x = Math.cos(elapsedTime) * 2;

    directionalLight2.position.z = -Math.sin(elapsedTime) * 2;
    directionalLight2.position.x = -Math.cos(elapsedTime) * 2;

    //render
    renderer.render(scene, camera);
};
tick();

let respondLinks = document.querySelectorAll(".cursorRespondLink");

respondLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        let cursorCanvas = document.getElementById("cursorCanvasID");
        cursorCanvas.classList.add("cursorCanvasHoverOnLink");
        cursorCanvas.classList.remove("cursorCanvas");
    });
    link.addEventListener("mouseleave", () => {
        let cursorCanvas = document.getElementById("cursorCanvasID");
        cursorCanvas.classList.remove("cursorCanvasHoverOnLink");
        cursorCanvas.classList.add("cursorCanvas");
    });
});