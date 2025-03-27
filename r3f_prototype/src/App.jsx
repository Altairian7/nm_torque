import { useState } from "react";
import "./App.css";
import { Canvas, events, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { CylinderGeometry, RingGeometry, WireframeGeometry } from "three";
import {
  MeshDistortMaterial,
  MeshWobbleMaterial,
  OrbitControls,
} from "@react-three/drei";

const Cube = ({ position, size, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
    ref.current.rotation.z += delta * 2;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 4;
    console.log(state.clock.elapsedTime);
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      {/* <wireframeGeometry args={size} /> */}
      {/* <icosahedronGeometry args={[size]}/> */}
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
};

const Sphere = ({ position, size, color }) => {
  const ref = useRef();

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
    ref.current.rotation.z += delta * 2;
    // ref.current.position.z = Math.sin(state.clock.elapsedTime) * 4
    // console.log(state.clock.elapsedTime)
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
      scale={isClicked ? 2 : 1}
    >
      <sphereGeometry args={size} />
      <meshStandardMaterial color={isHovered ? "yellow" : "red"} wireframe />
    </mesh>
  );
};

const TorusKnot = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <torusKnotGeometry args={size} />
      <MeshWobbleMaterial color={color} wireframe />
      {/* < MeshDistortMaterial color={color} wireframe/> */}
    </mesh>
  );
};

const Shape = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <capsuleGeometry args={size} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
};



// ⭐ New Crazy Object: Rotating, Pulsing Star
const CrazyStar = ({ position }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta * 1.5;
    ref.current.rotation.y += delta * 2;
    ref.current.scale.setScalar(1 + 0.3 * Math.sin(state.clock.elapsedTime * 5));
  });

  return (
    <mesh position={position} ref={ref}>
      <shapeGeometry args={[createStarShape()]} />
      <meshStandardMaterial color={getRandomColor()} wireframe />
    </mesh>
  );
};


// Function to Create Star Shape
const createStarShape = () => {
  const shape = new THREE.Shape();
  const outerRadius = 1;
  const innerRadius = 0.4;
  const spikes = 5;

  for (let i = 0; i < spikes * 2; i++) {
    const angle = (i * Math.PI) / spikes;
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    if (i === 0) {
      shape.moveTo(radius * Math.cos(angle), radius * Math.sin(angle));
    } else {
      shape.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
    }
  }
  shape.closePath();
  return shape;
};

// Function to Generate Random Colors
const getRandomColor = () => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33E3", "#F3FF33"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Scene = () => {

  // const 
  return (
    <>
      <directionalLight position={[0, 0, 2]} />
      {/* <ambientLight /> */}

      {/* <Cube position={[0, 0, 0]} size color={"red"} /> */}

      {/* <group position={[0,-1,0]}>
        <Cube position={[-1, 0, 0]} size color={"blue"} />
        <Cube position={[-1, 2, 0]} size color={"pink"} />
        <Cube position={[1, 2, 0]} size color={"yellow"} />
      </group> */}

      {/* <Cube position={[0, 0, 0]} args={[1,12]} color={"gold"} /> */}
      {/* <Sphere position={[0,0,0]} args={[1, 30, 30]} color={"blue"} /> */}
      {/* <TorusKnot position={[0, 0, 0]} color={"yellow"} /> */}
      <CrazyStar position={[0, 0, 0]} />

      {/* <Shape position={[0,0,0]} color={"blue"} /> */}

      <OrbitControls enableDamping={true} />
    </>
  );
};

const App = () => {
  return <Canvas>
    <Scene />
  </Canvas>;
};

export default App;
