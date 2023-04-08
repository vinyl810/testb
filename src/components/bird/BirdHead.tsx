import { useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Torus, GradientTexture } from '@react-three/drei';

import { d2r, r2d } from 'utils/common';

function BirdHead() {
  const [headRotationY, setHeadrotationY] = useState(d2r(15));
  const [isGoinDown, setIsGoinDown] = useState(true);
  useThree(({ camera }) => {
    camera.rotation.set(d2r(120), 0, 0);
  });
  useFrame(() => {
    if (isGoinDown) {
      setHeadrotationY(headRotationY * 1.25);
    } else {
      setHeadrotationY(headRotationY * 0.75);
    }
    if (r2d(headRotationY) >= 45) {
      setIsGoinDown(false);
    }
    if (r2d(headRotationY) <= d2r(15)) {
      setIsGoinDown(true);
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
      {/* Left Eye */}
      {/* <Torus
        args={[0.125, 0.045, 50, 50]}
        position={[0.6, 0.3, -0.3]}
        rotation={[45 * (Math.PI / 180), 125 * (Math.PI / 180), 0]}
      />
      <mesh
        rotation={[d2r(-30), d2r(10), d2r(125)]}
        position={[0.6, 0.3, -0.3]}
        castShadow
        receiveShadow
      >
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
      </mesh> */}
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
