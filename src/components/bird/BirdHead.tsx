import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFrame, useThree } from '@react-three/fiber';
import { Torus, GradientTexture, Box, Cylinder } from '@react-three/drei';

import { d2r, r2d, getRandomArb } from 'utils/common';

function BirdHead() {
  const [headRotationY, setHeadRotationY] = useState(d2r(15));
  const [isGoinDown, setIsGoinDown] = useState(true);
  const [winkIt, setWinkIt] = useState(false);
  const [winkFrameCount, setWinkFrameCount] = useState(0);
  const camera = useThree((state) => state.camera);
  const movements = useSelector(
    (state: { movements: { isNodding: boolean } }) => state.movements,
  );
  const cameraMoves = useSelector(
    (state: { cameraMoves: { zoomIn: boolean } }) => state.cameraMoves,
  );

  useFrame(() => {
    setWinkFrameCount(winkFrameCount + 1);
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
    if (!winkIt && winkFrameCount >= getRandomArb(100, 1000)) {
      setWinkIt(true);
      setWinkFrameCount(0);
    }
    if (winkIt && winkFrameCount >= 10) {
      setWinkIt(false);
      setWinkFrameCount(0);
    }
    if (cameraMoves.zoomIn && camera.position.x < -3 && camera.position.z > 3) {
      camera.position.set(
        camera.position.x * 0.9,
        camera.position.y - 0.1,
        camera.position.z * 0.9,
      );
    }
    if (
      !cameraMoves.zoomIn &&
      camera.position.x >= -6 &&
      camera.position.z <= 6
    ) {
      camera.position.set(
        camera.position.x * 1.1,
        camera.position.y + 0.1,
        camera.position.z * 1.1,
      );
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
      {!winkIt ? (
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
      ) : (
        <group
          position={[0.725 * Math.cos(d2r(25)), 0.725 * Math.sin(d2r(25)), 0]}
          rotation={[-d2r(90), d2r(90 - 25), 0]}
        >
          <Box
            args={[0.2, 0.1, 0.125, 50, 50]}
            position={[0, 0, 0]}
            rotation={[d2r(90), 0, 0]}
            castShadow
            receiveShadow
          />
          <Cylinder
            args={[0.125 / 2, 0.085, 0.175, 50, 50]}
            position={[-0.1, 0, -0.0375]}
            rotation={[d2r(90), 0, 0]}
          />
          <Cylinder
            args={[0.125 / 2, 0.085, 0.175, 50, 50]}
            position={[0.1, 0, -0.0375]}
            rotation={[d2r(90), 0, 0]}
          />
          <Box
            args={[0.19, 0.1, 0.0775, 50, 50]}
            position={[0, 0, 0.0075]}
            rotation={[d2r(90), 0, 0]}
            castShadow
            receiveShadow
            material-color="black"
          />
          <Cylinder
            args={[0.075 / 2, 0.085, 0.175, 50, 50]}
            position={[-0.0825, 0, -0.03]}
            rotation={[d2r(90), 0, 0]}
            material-color="black"
          />
          <Cylinder
            args={[0.075 / 2, 0.085, 0.175, 50, 50]}
            position={[0.0825, 0, -0.03]}
            rotation={[d2r(90), 0, 0]}
            material-color="black"
          />
        </group>
      )}

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
