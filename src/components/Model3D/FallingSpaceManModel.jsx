import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import { useLayoutEffect, useRef, useMemo, forwardRef } from "react";
import gsap from "gsap";

const FallingSpaceManModel = forwardRef((props, ref) => {
  const tl = useRef();
  const { scene, animations } = useGLTF(
    "/model/astranaut/astranaut_1-transformed.glb"
  );
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions, mixer, names } = useAnimations(animations, ref);

  useLayoutEffect(() => {
    actions[names].play();
    return () => {
      actions[names].stop();
    };
  }, [mixer]);

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(ref.current.position, { y: -2.5, duration: 0.5 });
    tl.current.to(ref.current.rotation, { y: 0.5, duration: 0.5 });
  }, []);

  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_102"
          geometry={nodes.Object_102.geometry}
          material={materials.material0}
          skeleton={nodes.Object_102.skeleton}
          scale={0.013}
        />
        <skinnedMesh
          name="Object_103"
          geometry={nodes.Object_103.geometry}
          material={materials.material0}
          skeleton={nodes.Object_103.skeleton}
          scale={0.013}
        />
        <skinnedMesh
          name="Object_106"
          geometry={nodes.Object_106.geometry}
          material={materials.material1}
          skeleton={nodes.Object_106.skeleton}
          scale={0.013}
        />
        <skinnedMesh
          name="Object_109"
          geometry={nodes.Object_109.geometry}
          material={materials.material2}
          skeleton={nodes.Object_109.skeleton}
          scale={0.013}
        />
      </group>
    </group>
  );
});

useGLTF.preload("/model/astranaut/astranaut_1-transformed.glb");
export default FallingSpaceManModel;
