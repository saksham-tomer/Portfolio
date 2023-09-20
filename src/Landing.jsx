import { Canvas } from "@react-three/fiber";
import './Landing.css'
import { Experience } from "./components/Experience";
import { Suspense } from "react";

function Landing() {
    return (    
    <Canvas
      camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3],
      }}
      >
        <Suspense fallback={null}>
          <Experience />
          </Suspense>   
    </Canvas>
       
  );
}

export default Landing;
