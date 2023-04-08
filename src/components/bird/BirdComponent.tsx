import { useSelector } from 'react-redux';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
// import { OrbitControls, GizmoHelper, GizmoViewport } from '@react-three/drei';

import BirdHead from './BirdHead';
import BirdBody from './BirdBody';

function Model() {
  const camera = useThree((state) => state.camera);
  const cameraMoves = useSelector(
    (state: { cameraMoves: { zoomIn: boolean } }) => state.cameraMoves,
  );

  useFrame(() => {
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
    <group position={[0, 2, 0]}>
      <BirdHead />
      <BirdBody />
      <mesh position={[0, -3.925, 0]} receiveShadow>
        <cylinderGeometry args={[4.5, 4.5, 0.25, 50, 50]} />
        <meshStandardMaterial color="wheat" />
      </mesh>
      <mesh position={[0, -3.825, 0]} receiveShadow>
        <cylinderGeometry args={[2.5, 2.5, 0.25, 50, 50]} />
        <meshStandardMaterial color="lightgreen" />
      </mesh>
    </group>
  );
}
function Bird() {
  return (
    <div className="ml-5 h-full w-full self-stretch rounded-md bg-slate-100 shadow-lg">
      <Canvas shadows camera={{ position: [-6, 3, 6] }}>
        {/* <OrbitControls makeDefault /> */}
        <ambientLight intensity={1} />
        <directionalLight position={[-1, 5, 3]} intensity={0.7} castShadow />
        <Model />
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
