import "./App.css";
import { Canvas } from "@react-three/fiber"



const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0,0,2]} />

      <mesh position={[2,0,0]}>
        <boxGeometry  />
        <meshStandardMaterial color={"red"} />
      </mesh>

      <mesh position={[-2,0,0]}>
        <boxGeometry  />
        <meshStandardMaterial color={"blue"} />
      </mesh>

      <mesh position={[0,-2,0]}>
        <boxGeometry  />
        <meshStandardMaterial color={"orange"} />
      </mesh>
      
      <mesh position={[0,2,0]}>
        <boxGeometry  />
        <meshStandardMaterial color={"green"} />
      </mesh>
      
    </Canvas>
  )
}

export default App;

