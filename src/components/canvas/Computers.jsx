import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader";
import * as THREE from "three";
import CanvasLoader from "../Loader";

const ComputerModel = ({ isMobile }) => {
  const { scene } = useGLTF(
    "/desktop_pc/scene.gltf",
    undefined,
    (loader) => {
      const dracoLoader = new DRACOLoader();
      loader.setDRACOLoader(dracoLoader);
    }
  );

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        const material = child.material.clone();

        console.log(child.name);
        // Simple example decision based on mesh name:
        if (
          child.name.toLowerCase().includes("monitor") ||
          child.name.toLowerCase().includes("keyboard") ||
          child.name.toLowerCase().includes("screen")
        ) {
          // Slightly lighter color and lower roughness for these parts
          material.color = new THREE.Color("#4a5a7a"); // lighter blue-gray
          material.emissive = new THREE.Color("#303c5a");
          material.emissiveIntensity = 0.3;
          material.metalness = 0.4;
          material.roughness = 0.4;
        } else {
          // Default darker materials for other parts
          material.color = new THREE.Color("#2a3050");
          material.emissive = new THREE.Color("#202636");
          material.emissiveIntensity = 0.25;
          material.metalness = 0.3;
          material.roughness = 0.6;
        }

        material.needsUpdate = true;
        child.material = material;
      }
    });
  }, [scene]);

  return (
    <mesh>
      <ambientLight intensity={0.5} />
      <hemisphereLight intensity={0.4} skyColor="#606070" groundColor="#202020" />
      <directionalLight position={[10, 10, 5]} intensity={0.3} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.2}
        penumbra={1}
        intensity={1.2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.8} />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const MemoizedComputerModel = React.memo(ComputerModel);

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    setIsMobile(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <MemoizedComputerModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
