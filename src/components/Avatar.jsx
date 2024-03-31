/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\src\components\model\Waving.glb 
*/


import React, { useRef, duseEffect } from 'react'
import {Environment,  OrbitControls, useFBX, useGLTF} from '@react-three/drei'
import { Canvas, useFrame, extend } from '@react-three/fiber';

// Extend OrbitControls to create a custom control
extend({ OrbitControls });

function HorizontalOrbitControls(props) {
  const controlsRef = useRef();

  useFrame(() => {
    controlsRef.current.target.y = 0; // Lock the controls to horizontal rotation
    controlsRef.current.update();
  });

  return <orbitControls ref={controlsRef} {...props} />;
}


export function Avatar(props) {
  const { nodes, materials } = useGLTF('public/models/Waving.glb')
  return (
    <Canvas shadows camera={{ position: [0, 400, 900], fov: 45 }} style={{ width: '100%', height: '60vh' }}>
    <Environment preset ="sunset"/>
    {/* <HorizontalOrbitControls enableZoom={false} enablePan={false}/> */}
    <OrbitControls enableZoom={false} enablePan={false}/>
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.CartoonF9F2EA}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.CartoonF9FF00}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Standard59822E}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.StandardBB7346}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Cartoon000000}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Cartoon000000}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Cartoon357416}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.Standard000000}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.Standard000000}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.Standard000000}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.Standard000000}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.Standard090909}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.StandardFFB8D5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.StandardFFB8D5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.StandardFFB8D5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.StandardFFFFFF}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.StandardFFFFFF}
        />
      </group>
    </group>
    </Canvas>
  )
}


useGLTF.preload('public/models/Waving.glb')
