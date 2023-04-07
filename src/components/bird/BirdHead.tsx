import { Cone, Sphere, Torus, GradientTexture } from '@react-three/drei';

import d2r from 'utils/common';

function BirdHead() {
  return (
    <group rotation={[d2r(90), 0, d2r(90)]} castShadow receiveShadow>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[0.75, 50, 50]} attach="geometry" />
        <meshBasicMaterial>
          <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
          />
        </meshBasicMaterial>
      </mesh>
      <Cone
        args={[0.5, 1.5, 100]}
        position={[0, 0.5, 0]}
        material-color="orange"
      />
      <Torus
        args={[0.1, 0.025, 50, 50]}
        position={[0.6, 0.3, -0.3]}
        rotation={[45 * (Math.PI / 180), 125 * (Math.PI / 180), 0]}
      />
      <Sphere
        args={[0.1, 50, 50]}
        position={[0.6, 0.3, -0.3]}
        material-color="black"
      />
      <Torus
        args={[0.1, 0.025, 50, 50]}
        position={[-0.6, 0.3, -0.3]}
        rotation={[45 * (Math.PI / 180), -125 * (Math.PI / 180), 0]}
      />
      <Sphere
        args={[0.1, 50, 50]}
        position={[-0.6, 0.3, -0.3]}
        material-color="black"
      />
    </group>
  );
}

export default BirdHead;
