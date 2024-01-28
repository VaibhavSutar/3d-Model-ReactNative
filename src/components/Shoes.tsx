import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei/native";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    defaultMaterial: THREE.Mesh;
  };
  materials: {
    NikeShoe: THREE.MeshStandardMaterial;
  };
};

export default function Shoes(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(require("../assets/Shoes.glb")) as GLTFResult;
  return (
    <group {...props} dispose={null} scale={3} position={[0.5,-0,0]} rotation={[0,2,0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials.NikeShoe}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(require("../assets/Shoes.glb"));