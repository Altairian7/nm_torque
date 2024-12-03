import "./App.css";
import { Canvas } from "@react-three/fiber";

const Cube = ({ position, size, color}) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[size]}/>
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />

      <Cube position={[2,0,0]}  size color={"red"}  />
      <Cube position={[-2,0,0]}  size color={"blue"}  />
      <Cube position={[0,-2,0]}  size color={"pink"}  />
      <Cube position={[0,2,0]}  size color={"yellow"}  />

    
    </Canvas>
  );
};

export default App;
