import { Cylinder, Box } from '@react-three/drei';

import { d2r } from 'utils/common';

function Wing({
  size,
  rotation,
  position,
}: {
  size: { x: number; y: number; z: number };
  rotation: number[];
  position: number[];
}) {
  const { x, y, z } = size;
  const [rotx, roty, rotz] = rotation;
  const [posx, posy, posz] = position;

  return (
    <group rotation={[rotx, roty, rotz]} position={[posx, posy, posz]}>
      <Cylinder
        args={[1 * y, 1 * y, 0.5 * z]}
        rotation={[d2r(90), 0, 0]}
        material-color="aquamarine"
      />
      <Cylinder
        args={[1 * y, 1 * y, 0.5 * z]}
        position={[2 * x, 0, 0]}
        rotation={[d2r(90), 0, 0]}
        material-color="aquamarine"
      />
      <Box
        args={[2 * x, 2 * y, 0.5 * z]}
        position={[1 * x, 0, 0]}
        material-color="aquamarine"
      />
    </group>
  );
}

export default Wing;
