import { Canvas } from '@react-three/fiber';
import { OrbitControls, Cone, Sphere, Capsule } from '@react-three/drei';
import React, { Suspense } from 'react';

function Model() {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[-1, 0, 1]} intensity={0.7} />
      <Sphere args={[1, 32, 32]} material-color="skyblue" />
      <Cone
        args={[0.5, 1.5, 100]}
        position={[-1, -0.5, 0]}
        rotation={[135, 0, 45]}
        material-color="hotpink"
      />
      <Capsule
        args={[1, 0.75]}
        position={[0.5, -1.9, 0]}
        rotation={[0, 0, 45]}
        material-color="eliceblue"
      />
    </>
  );
}

function Box() {
  return (
    <div className="w-96 self-stretch rounded-md bg-slate-100 shadow-lg">
      {/* <Canvas camera={{ zoom: 15, position: [50, 35, 50] }}>
        <OrbitControls autoRotate autoRotateSpeed={5} />
        <mesh>
          <ambientLight intensity={1} />
          <directionalLight position={[-1, 0, 1]} intensity={0.7} />
          <sphereGeometry args={[2, 7, 50]} />
          <boxGeometry args={[2, 2, 2]} />
          <meshNormalMaterial attach="material" />
        </mesh>
      </Canvas> */}
      <Canvas shadows>
        <OrbitControls makeDefault />
        <Model />
      </Canvas>
    </div>
  );
}

export default Box;
