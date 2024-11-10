import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { BakeShadows, Environment, Html } from "@react-three/drei";
import FallingSpaceManModel from "./Model3D/FallingSpaceManModel";
import { useGSAP } from "@gsap/react";
import Fallback from "./sub/Fallback";

const FloatingAstranaut = () => {
  const modelRef = useRef(null);
  const group = useRef();

  useGSAP(() => {
    modelRef.current.addEventListener("mousemove", (e) => handleMousemove(e));
    modelRef.current.removeEventListener("mousemove", (e) =>
      handleMousemove(e)
    );
  }, []);

  const handleMousemove = (e) => {
    group.current.rotation.x = e.clientY / 1500;
    group.current.rotation.y = e.clientX / 500;
  };

  return (
    <>
      <Canvas
        ref={modelRef}
        className="w-100 h-100"
        shadows
        camera={{
          position: [0, -2, 7],
          fov: 45,
          near: 0.001,
          far: 100,
        }}
      >
        <ambientLight intensity={4} />
        <spotLight position={[1, 5, 3]} angle={0.2} intensity={3} castShadow />
        <spotLight
          position={[0, 10, -10]}
          intensity={2}
          angle={0.04}
          penumbra={2}
          castShadow
        />
        <Suspense
          fallback={
            <Html>
              <Fallback />
            </Html>
          }
        >
          <FallingSpaceManModel
            ref={group}
            limit={50}
            position={[0, -4.5, 0]}
            castShadow
            receiveShadow
          />
          <Environment preset="dawn" />
          <BakeShadows />
        </Suspense>
      </Canvas>
    </>
  );
};

export default FloatingAstranaut;
