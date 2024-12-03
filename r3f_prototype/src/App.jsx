import { AmbientLight } from "three";
import "./App.css";
import { Canvas } from "@react-three/fiber";

const Cube = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[size]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      {/* <ambientLight /> */}

      <group position={[0,-1,0]}>
        <Cube position={[1, 0, 0]} size color={"red"} />
        <Cube position={[-1, 0, 0]} size color={"blue"} />
        <Cube position={[-1, 2, 0]} size color={"pink"} />
        <Cube position={[1, 2, 0]} size color={"yellow"} />
      </group>
    </Canvas>
  );
};

export default App;
