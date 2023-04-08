import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFrame } from '@react-three/fiber';
import { Torus, GradientTexture } from '@react-three/drei';

import { d2r, r2d } from 'utils/common';

function BirdHead() {
  const [headRotationY, setHeadRotationY] = useState(d2r(15));
  const [isGoinDown, setIsGoinDown] = useState(true);
  const movements = useSelector(
    (state: { movements: { isNodding: boolean } }) => state.movements,
  );

  useFrame(() => {
    if (isGoinDown && movements.isNodding) {
      setHeadRotationY(
        headRotationY + d2r(Math.abs(55 - r2d(headRotationY)) / 15),
      );
    } else if (movements.isNodding) {
      setHeadRotationY(headRotationY - d2r((r2d(headRotationY) - 5) / 15));
    }
    if (r2d(headRotationY) >= 45) {
      setIsGoinDown(false);
      setHeadRotationY(d2r(44));
    }
    if (r2d(headRotationY) <= 15) {
      setIsGoinDown(true);
      setHeadRotationY(d2r(15.5));
    }
    if (!movements.isNodding) {
      setHeadRotationY(headRotationY - d2r((r2d(headRotationY) - 10) / 15));
    }
  });

  return (
    <group
      rotation={[d2r(90), headRotationY, d2r(90)]}
      castShadow
      receiveShadow
    >
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[0.75, 50, 50]} attach="geometry" />
        <meshBasicMaterial>
          <GradientTexture
            stops={[0, 1]}
            colors={['aquamarine', 'hotpink']}
            size={1024}
          />
        </meshBasicMaterial>
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0.5, 0]}>
        <coneGeometry args={[0.5, 1.5, 100]} attach="geometry" />
        <meshBasicMaterial>
          <GradientTexture
            stops={[0, 1]}
            colors={['orange', 'yellow']}
            size={1024}
          />
        </meshBasicMaterial>
      </mesh>

      {/* Left eye */}
      <group
        position={[0.725 * Math.cos(d2r(25)), 0.725 * Math.sin(d2r(25)), 0]}
        rotation={[-d2r(90), d2r(90 - 25), 0]}
      >
        <Torus args={[0.125, 0.045, 50, 50]} />
        <mesh rotation={[d2r(90), 0, 0]} castShadow receiveShadow>
          <cylinderGeometry
            args={[0.125, 0.125, 0.1, 50, 50]}
            attach="geometry"
          />
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 0.5, 1]}
              colors={['black', 'black', 'black']}
              size={1024}
            />
          </meshBasicMaterial>
        </mesh>
      </group>

      {/* Right Eye */}
      <group
        position={[-0.725 * Math.cos(d2r(25)), 0.725 * Math.sin(d2r(25)), 0]}
        rotation={[d2r(90), d2r(90 - 25), 0]}
      >
        <Torus args={[0.125, 0.045, 50, 50]} />
        <mesh rotation={[d2r(90), 0, 0]} castShadow receiveShadow>
          <cylinderGeometry
            args={[0.125, 0.125, 0.1, 50, 50]}
            attach="geometry"
          />
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 0.5, 1]}
              colors={['black', 'black', 'black']}
              size={1024}
            />
          </meshBasicMaterial>
        </mesh>
      </group>
    </group>
  );
}

export default BirdHead;
