import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { WireframeGeometry } from "three";


const Cube = ({ position, size, color }) => {
  const ref = useRef();

  useFrame((state, delta) => {

    ref.current.rotation.x += delta
    ref.current.rotation.y += delta
    ref.current.rotation.z += delta * 2
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 4
    console.log(state.clock.elapsedTime)

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
  return (
    <mesh position={position}>
      <sphereGeometry args={size} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  )
}

const TorusKnot = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <torusKnotGeometry args={size} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      {/* <ambientLight /> */}

        {/* <Cube position={[0, 0, 0]} size color={"red"} /> */}

      {/* <group position={[0,-1,0]}>
        <Cube position={[-1, 0, 0]} size color={"blue"} />
        <Cube position={[-1, 2, 0]} size color={"pink"} />
        <Cube position={[1, 2, 0]} size color={"yellow"} />
      </group> */}

      {/* <Cube position={[0, 0, 0]} args={[1,12]} color={"gold"} /> */}
      <Sphere position={[0,0,0]} args={[1, 30, 30]} color={"blue"} />
      {/* <TorusKnot position={[0,0,0]} args={[0.5, 0.1, 1000, 50]} color={"blue"} /> */}

     

    </Canvas>
  );
};

export default App;
