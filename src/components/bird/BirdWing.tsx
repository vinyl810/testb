import { GradientTexture } from '@react-three/drei';

import { d2r } from 'utils/common';

function Wing({
  rotation,
  position,
}: {
  rotation: number[];
  position: number[];
}) {
  const [rotx, roty, rotz] = rotation;
  const [posx, posy, posz] = position;

  return (
    <group rotation={[rotx, roty, rotz]} position={[posx, posy, posz]}>
      <mesh position={[0, 0, 0.1 * posz]} rotation={[0, 0, d2r(90)]}>
        <capsuleGeometry args={[0.1, 0.5, 50, 50]} />
        <meshBasicMaterial>
          <GradientTexture
            stops={[0, 1]}
            colors={['aquamarine', 'hotpink']}
            size={1024}
          />
        </meshBasicMaterial>
      </mesh>
      <mesh position={[0, -0.1, 0.1 * posz]} rotation={[0, 0, d2r(90)]}>
        <capsuleGeometry args={[0.1, 0.4, 50, 50]} />
        <meshBasicMaterial>
          <GradientTexture
            stops={[0, 1]}
            colors={['aquamarine', 'hotpink']}
            size={1024}
          />
        </meshBasicMaterial>
      </mesh>
      <mesh position={[0, -0.2, 0.1 * posz]} rotation={[0, 0, d2r(90)]}>
        <capsuleGeometry args={[0.1, 0.3, 50, 50]} />
        <meshBasicMaterial>
          <GradientTexture
            stops={[0, 1]}
            colors={['aquamarine', 'hotpink']}
            size={1024}
          />
        </meshBasicMaterial>
      </mesh>
    </group>
  );
}

export default Wing;
