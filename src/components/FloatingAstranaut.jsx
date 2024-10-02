import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { BakeShadows, Environment } from "@react-three/drei";
import FallingSpaceManModel from "./Model3D/FallingSpaceManModel";
import { useGSAP } from "@gsap/react";
import { Parallax } from "react-scroll-parallax";
import { spaceShipImg } from "../utils";

const FloatingAstranaut = () => {
  const modelRef = useRef(null);
  const group = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    modelRef.current.addEventListener("mousemove", (e) => handleMousemove(e));
    modelRef.current.removeEventListener("mousemove", (e) =>
      handleMousemove(e)
    );
  }, []);

  const handleMousemove = (e) => {
    group.current.rotation.x = e.clientY / 750;
    group.current.rotation.y = e.clientX / 100;
    imageRef.current.style.transform = `translate(${e.clientX / 50}%, ${
      e.clientY / 50
    }%)`;
  };

  return (
    <>
      <Parallax speed={-10} className="wh-full absolute top-0 left-0">
        <div ref={imageRef} className="absolute top-[20%] left-[50%] ">
          <img width={250} height={250} src={spaceShipImg} alt="spaceship" />
        </div>
      </Parallax>
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
        <Suspense fallback={null}>
          <FallingSpaceManModel
            ref={group}
            limit={50}
            position={[0, -4.5, 0]}
            castShadow
            receiveShadow
          />
          {/* <Environment preset="dawn" /> */}
          <BakeShadows />
        </Suspense>
      </Canvas>
    </>
  );
};

export default FloatingAstranaut;
