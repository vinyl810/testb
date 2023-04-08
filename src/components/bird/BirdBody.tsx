import { useState } from 'react';
import { GradientTexture } from '@react-three/drei';

import { d2r } from 'utils/common';
import { useFrame } from '@react-three/fiber';
import Wing from './BirdWing';
import Foot from './BirdFoot';

function BirdBody() {
  const [bodyPosition, setBodyPosition] = useState([0, 0, 0]);
  const [moveUp, setMoveUp] = useState(true);
  // useFrame(() => {
  //   if (moveUp) {
  //     setBodyPosition([
  //       bodyPosition[0],
  //       bodyPosition[1] + 0.0015,
  //       bodyPosition[2],
  //     ]);
  //   } else {
  //     setBodyPosition([
  //       bodyPosition[0],
  //       bodyPosition[1] - 0.0015,
  //       bodyPosition[2],
  //     ]);
  //   }
  //   if (moveUp && bodyPosition[1] >= 0.07) {
  //     setMoveUp(false);
  //   }
  //   if (!moveUp && bodyPosition[1] <= 0) {
  //     setMoveUp(true);
  //   }
  // });
  return (
    <>
      <group position={[bodyPosition[0], bodyPosition[1], bodyPosition[2]]}>
        <mesh
          castShadow
          receiveShadow
          rotation={[0, 0, d2r(60)]}
          position={[0.65, -1.8, 0]}
        >
          <capsuleGeometry args={[1.05, 0.75, 50, 50]} />
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 1]} // As many stops as you want
              colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
              size={1024} // Size is optional, default = 1024
            />
          </meshBasicMaterial>
        </mesh>
        <Wing rotation={[0, 0, d2r(-30)]} position={[0.45, -1.6, 1]} />
        <Wing rotation={[0, 0, d2r(-30)]} position={[0.45, -1.6, -1]} />

        <mesh position={[1.5, -1.5, 0]} rotation={[0, 0, d2r(90)]}>
          <capsuleGeometry args={[0.25, 1, 50, 50]} />
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 1]}
              colors={['aquamarine', 'hotpink']}
              size={1024}
            />
          </meshBasicMaterial>
        </mesh>
        <mesh position={[1.6, -1.75, 0]} rotation={[0, 0, d2r(90)]}>
          <capsuleGeometry args={[0.25, 1, 50, 50]} />
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 1]}
              colors={['aquamarine', 'hotpink']}
              size={1024}
            />
          </meshBasicMaterial>
        </mesh>
        <mesh position={[1.65, -2, 0]} rotation={[0, 0, d2r(90)]}>
          <capsuleGeometry args={[0.25, 1, 50, 50]} />
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 1]}
              colors={['aquamarine', 'hotpink']}
              size={1024}
            />
          </meshBasicMaterial>
        </mesh>
      </group>
      <Foot position={[0, 0, 0.3]} rotation={[0, 0, 0]} />
      <Foot position={[0, 0, -0.3]} rotation={[0, 0, 0]} />
    </>
  );
}

export default BirdBody;
