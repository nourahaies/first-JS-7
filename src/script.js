import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//I LOVE NOURAAAAA
// initialize the scene
const scene = new THREE.Scene()

// add objects to the scene
//const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color: "purple",wireframe:true})

// const cubeMesh = new THREE.Mesh(
//   cubeGeometry,
//   cubeMaterial
// )
scene.add(cubeMesh)

// initialize the camera
const camera = new THREE.PerspectiveCamera(
  40, 
  window.innerWidth / window.innerHeight,
  0.1,
  30)
camera.position.z = 5

// initialize the renderer
const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias:true,
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))

// initialize the controls
const controls = new OrbitControls(camera,canvas);
controls.enableDamping=true
//controls.autoRotate=true

window.addEventListener('resize',()=>{
  camera.aspect=window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})
//initialize the clock
const clock = new THREE.Clock()
let priviousTime=0

//render the scene
const renderloop=()=>{
  const currentTime = clock.getElapsedTime()
  const delta = currentTime - priviousTime
  priviousTime = currentTime

cubeMesh.rotation.y += THREE.MathUtils.degToRad(1) * delta *20

cubeMesh.scale.x = (Math.sin(currentTime))

  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(renderloop)
}
renderloop()
