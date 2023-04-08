import { GradientTexture } from '@react-three/drei';

import { d2r } from 'utils/common';

function Foot({
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
      <mesh position={[0.75, -3, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.1, 0.1, 1.25]} />
        <meshBasicMaterial>
          <GradientTexture
            stops={[0, 1]}
            colors={['yellow', 'orange']}
            size={1024}
          />
        </meshBasicMaterial>
      </mesh>

      <mesh
        position={[0.55, -3.65, 0]}
        rotation={[d2r(90), 0, d2r(90)]}
        castShadow
        receiveShadow
      >
        <capsuleGeometry args={[0.065, 0.4, 50, 50]} />
        <meshBasicMaterial>
          <GradientTexture
            stops={[0, 1]}
            colors={['orange', 'yellow']}
            size={1024}
          />
        </meshBasicMaterial>
      </mesh>
      <mesh
        position={[0.6, -3.65, -0.1]}
        rotation={[d2r(90), 0, d2r(110)]}
        castShadow
        receiveShadow
      >
        <capsuleGeometry args={[0.065, 0.4, 50, 50]} />
        <meshBasicMaterial>
          <GradientTexture
            stops={[0, 1]}
            colors={['orange', 'yellow']}
            size={1024}
          />
        </meshBasicMaterial>
      </mesh>
      <mesh
        position={[0.6, -3.65, 0.1]}
        rotation={[d2r(90), 0, d2r(70)]}
        castShadow
        receiveShadow
      >
        <capsuleGeometry args={[0.065, 0.4, 50, 50]} />
        <meshBasicMaterial>
          <GradientTexture
            stops={[0, 1]}
            colors={['orange', 'yellow']}
            size={1024}
          />
        </meshBasicMaterial>
      </mesh>
    </group>
  );
}

export default Foot;
