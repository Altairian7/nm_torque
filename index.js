import * as THREE from 'three';
import { OrbitControls } from "jsm/controls/OrbitControls.js"
const width = window.innerWidth, height = window.innerHeight;

// init


// const geometry = new THREE.BoxGeometry( 1, 1, 0.2 );
// const material = new THREE.MeshNormalMaterial();

// const mesh = new THREE.Mesh( geometry, material );
// scene.add( mesh );


//*------Created a Scene

const renderer = new THREE.WebGLRenderer( { antialias: true } );    //renderer
renderer.setSize( width, height );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 10 );  //camera
camera.position.z = 2;

const scene = new THREE.Scene();    //scene


//*--------Added Orbit controls

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.damingFactor = 0.03;



//*--------Created materials and meshes

const geo = new THREE.IcosahedronGeometry(1,3);
const mat = new THREE.MeshStandardMaterial({
    color: "white",
    flatShading: true,
    
});
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);




const wiregeo = new THREE.IcosahedronGeometry(1,3);
const wireMat = new THREE.MeshBasicMaterial({
    color: 'black',
    wireframe: true
});
const wireMesh = new THREE.Mesh(wiregeo, wireMat);
wireMesh.scale.setScalar(1.001);
mesh.add(wireMesh)





//*-----------Created Light

const hemiLight = new THREE.HemisphereLight('yellow', 'red')
scene.add(hemiLight);




//*-----------Created Animation

function animate(t = 0) {
    requestAnimationFrame(animate);
    mesh.rotation.y = t / 4000;
    // wireMesh.rotation.y = -t / 2000;

    renderer.render( scene, camera );
    controls.update();
}

animate();












// // animation
// function animate( time ) {

//     mesh.rotation.z = time / 2000;
//     mesh.rotation.y = time / 1000;
    
    
//     renderer.render( scene, camera );
// }

// renderer.setAnimationLoop( animate );
