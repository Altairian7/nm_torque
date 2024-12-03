import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = ({ position, size, color }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={[size]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas>
      {/* <directionalLight position={[0, 0, 2]} /> */}
      <ambientLight />

      {/* <group position={[0,-1,0]}>
        <Cube position={[1, 0, 0]} size color={"red"} />
        <Cube position={[-1, 0, 0]} size color={"blue"} />
        <Cube position={[-1, 2, 0]} size color={"pink"} />
        <Cube position={[1, 2, 0]} size color={"yellow"} />
      </group> */}

      <Cube position={[0, 0, 0]} color={"red"} />

    </Canvas>
  );
};

export default App;
