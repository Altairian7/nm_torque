import * as THREE from 'three';
import { OrbitControls } from "jsm/controls/OrbitControls.js"
import getStarfield from "./src/getStarfield.js";


const width = window.innerWidth, height = window.innerHeight;

// init


// const geometry = new THREE.BoxGeometry( 1, 1, 0.2 );
// const material = new THREE.MeshNormalMaterial();

// const mesh = new THREE.Mesh( geometry, material );
// scene.add( mesh );


//*------Created a Scene

const renderer = new THREE.WebGLRenderer( { antialias: true} );    //renderer
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
    
    // scene.add(mesh);

//----------------------//


const wiregeo = new THREE.IcosahedronGeometry(1,3);
const wireMat = new THREE.MeshBasicMaterial({
    color: 'black',
    wireframe: true
});
const wireMesh = new THREE.Mesh(wiregeo, wireMat);
wireMesh.scale.setScalar(1.001);
mesh.add(wireMesh)


//*--------------added earth

const earthGroup = new THREE.Group();
earthGroup.rotationz = -23.4 * Math.PI / 180;

const loader = new THREE.TextureLoader();
const earthMesh = new THREE.IcosahedronGeometry(1, 12);
const earthMat = new THREE.MeshStandardMaterial({
    map: loader.load("./maps/1_earth_16k.jpg") 
    // map: loader.load("./maps/earthmap10k.jpg") 
    // map: loader.load("./maps/8k_earth_nightmap.jpg")
    
})
const earth = new THREE.Mesh(earthMesh, earthMat);


    earthGroup.add(earth);
    scene.add(earthGroup);


//*---------Added Star Field

const stars = getStarfield({numStars: 2000});
scene.add(stars); 


//*------added night time

const lightsMat = new THREE.MeshBasicMaterial({
    map: loader.load("./maps/5_night_16k.jpg"),
    blending: THREE.AdditiveBlending,
  });
  const lightsMesh = new THREE.Mesh(earthMesh, lightsMat);
//   earthGroup.add(lightsMesh);


//*-----------Created Light

const hemiLight = new THREE.HemisphereLight('yellow', 'red')
// scene.add(hemiLight);

//------Light for earth
// const earthlight = new THREE.HemisphereLight('white', 'white')
// scene.add(earthlight)

const sunLight = new THREE.DirectionalLight("white", 3.0);
sunLight.position.set(-2, 0.5, 1.5);
scene.add(sunLight);


//*-----------Created Animation

function animate(t = 0) {
    requestAnimationFrame(animate);
    // mesh.rotation.y = t / 4000;
    // wireMesh.rotation.y = -t / 2000;
    earthGroup.rotation.y += 0.0005;
    // lightsMesh.rotation.y += 0.002;


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
