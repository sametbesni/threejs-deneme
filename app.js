//canvas
//scene
//camera
//mesh
//renderer

import * as THREE from 'three';
import { cameraPosition } from 'three/webgpu';


const canvas = document.getElementById("canvas");

const canvasSize = {
    width : 800,
    height : 600,
}

const scene = new THREE.Scene();

const cameraParams = {
    fov : 45,
    aspectRatio : canvasSize.width / canvasSize.height,
    near : 0.001,
    far : 100
}

const camera = new THREE.PerspectiveCamera(
    cameraParams.fov,
    cameraParams.aspectRatio,
    cameraParams.near,
    cameraParams.far,
);

camera.position.set( 1, 1, 5);
scene.add(camera);

const geometry = new THREE.BoxGeometry(0.5,0.5,0.5);
const material = new THREE.MeshBasicMaterial({
    wireframe : true
});
const mesh = new THREE.Mesh( geometry, material);
scene.add(mesh);


const renderer = new THREE.WebGLRenderer({
    canvas : canvas,
    antialias : true
});

renderer.setSize( canvasSize.width, canvasSize.height);
renderer.setAnimationLoop( animate );


function animate( time ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}