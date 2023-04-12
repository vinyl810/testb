import { Canvas } from '@react-three/fiber';
import { OrbitControls, GizmoHelper, GizmoViewport } from '@react-three/drei';
import { d2r } from 'utils/common';

import { ReactNode } from 'react';
import BirdHead from './BirdHead';
import BirdBody from './BirdBody';

function Model() {
  return (
    <group position={[0, 2, 0]}>
      <BirdHead />
      <BirdBody />
      <mesh position={[0, -3.925, 0]} receiveShadow>
        <cylinderGeometry args={[4.5, 4.5, 0.25, 50, 50]} />
        <meshStandardMaterial color="wheat" />
      </mesh>
      <mesh position={[0, -3.825, 0]} receiveShadow>
        <cylinderGeometry args={[2.5, 2.5, 0.25, 25, 25]} />
        <meshStandardMaterial color="lightgreen" />
      </mesh>
    </group>
  );
}
function Bird({ children }: { children: ReactNode }) {
  return (
    <div
      className="self-stretch rounded-md bg-slate-100 shadow-lg"
      style={{ width: '90vw', height: '82vh' }}
    >
      {children}
      <Canvas shadows camera={{ position: [-6, 3, 6] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[-1, 5, 3]} intensity={0.7} castShadow />
        <Model />
        {/* <OrbitControls makeDefault target={[0, 2, 0]} /> */}
        {/* <GizmoHelper
          alignment="bottom-right" // widget alignment within scene
          margin={[50, 60]} // widget margins (X, Y)
        >
          <GizmoViewport
            axisColors={['red', 'green', 'blue']}
            labelColor="black"
          />
        </GizmoHelper> */}
      </Canvas>
    </div>
  );
}

export default Bird;
