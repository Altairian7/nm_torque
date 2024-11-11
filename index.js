import * as THREE from 'three';
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




//*--------Created materials and meshes

const geo = new THREE.IcosahedronGeometry(1,3);
const mat = new THREE.MeshStandardMaterial({
    color: "darkblue",
    flatShading: true,
    
});
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);




const wiregeo = new THREE.IcosahedronGeometry(1.1,3);
const wireMat = new THREE.MeshBasicMaterial({
    color: 'yellow',
    wireframe: true
});
const wireMesh = new THREE.Mesh(wiregeo, wireMat);
scene.add(wireMesh)





//*-----------Created Light

const hemiLight = new THREE.HemisphereLight('white', 'black')
scene.add(hemiLight);




//*-----------Created Animation

function animate(t = 0) {
    requestAnimationFrame(animate);
    mesh.rotation.y = t / 2000;
    wireMesh.rotation.y = -t / 2000;

    renderer.render( scene, camera );
}

animate();












// // animation
// function animate( time ) {

//     mesh.rotation.z = time / 2000;
//     mesh.rotation.y = time / 1000;
    
    
//     renderer.render( scene, camera );
// }

// renderer.setAnimationLoop( animate );
