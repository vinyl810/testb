import { GradientTexture } from '@react-three/drei';

import { d2r } from 'utils/common';
import Wing from './BirdWing';
import Foot from './BirdFoot';

function BirdBody() {
  return (
    <>
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
      <Foot position={[0, 0, 0.3]} rotation={[0, 0, 0]} />
      <Foot position={[0, 0, -0.3]} rotation={[0, 0, 0]} />
      <Wing
        size={{ x: 0.3, y: 0.6, z: 0.55 }}
        rotation={[0, 0, d2r(-30)]}
        position={[0.45, -1.6, 1]}
      />
      <Wing
        size={{ x: 0.3, y: 0.6, z: 0.55 }}
        rotation={[0, 0, d2r(-30)]}
        position={[0.45, -1.6, -1]}
      />
    </>
  );
}

export default BirdBody;
