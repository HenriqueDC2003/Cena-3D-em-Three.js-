import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;


const planeGeometry = new THREE.PlaneGeometry(80, 80);
const planeMaterial = new THREE.MeshBasicMaterial({color: '#808080', side: THREE.DoubleSide});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.position.z = -10;
scene.add(plane);


const sphere_geometry = new THREE.SphereGeometry(2, 30, 30);
const sphere_material = new THREE.MeshBasicMaterial({color: '#964b00'});
const sphere = new THREE.Mesh(sphere_geometry, sphere_material);
sphere.position.x = -7.5;
scene.add(sphere);


const cube_geometry = new THREE.BoxGeometry( 1, 1, 1 );
const cube_material = new THREE.MeshBasicMaterial( { color: '#ffcbdb' } );
const cube = new THREE.Mesh( cube_geometry, cube_material );
scene.add( cube );


const cone_geometry = new THREE.ConeGeometry(1.5, 2, 30);
const cone_material = new THREE.MeshBasicMaterial({color: 0xff0000});
const cone = new THREE.Mesh(cone_geometry, cone_material);
cone.position.x = 7.5;
scene.add(cone);


camera.position.z = 12;


let scale_factor = 0;
let scale_factor2 = 0;
let scale_factor3 = 0;

// loop de animação
function animate() {
    
    cube.rotation.x += 0.01;
    cone.rotation.x -= 0.01;
    cube.rotation.y += 0.01;
    cone.rotation.y -= 0.01;
    cube.rotation.z += 0.01;
    cone.rotation.z -= 0.01;

    
    if (scale_factor < 1.5) {
        scale_factor += 0.01;
        sphere.scale.set(scale_factor, scale_factor, scale_factor);
    }
    if (scale_factor2 < 1.5) {
        scale_factor2 += 0.01;
        cube.scale.set(scale_factor2, scale_factor2, scale_factor2);
    }
    if (scale_factor3 < 1.5) {
        scale_factor3 += 0.01;
        cone.scale.set(scale_factor3, scale_factor3, scale_factor3);
    }

    
    controls.update();
    
    renderer.render( scene, camera );
}