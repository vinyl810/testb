import { Canvas } from '@react-three/fiber';
import { OrbitControls, GizmoHelper, GizmoViewport } from '@react-three/drei';

import BirdHead from './BirdHead';
import BirdBody from './BirdBody';

function Model() {
  return (
    <>
      <BirdHead />
      <BirdBody />
    </>
  );
}
function Bird() {
  return (
    <div className="w-96 self-stretch rounded-md bg-slate-100 shadow-lg">
      <Canvas shadows camera={{ position: [-7, 3, 5] }}>
        <OrbitControls makeDefault />
        <ambientLight intensity={1} />
        <directionalLight position={[-1, 5, 3]} intensity={0.7} castShadow />
        <Model />
        <GizmoHelper
          alignment="bottom-right" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
        >
          <GizmoViewport
            axisColors={['red', 'green', 'blue']}
            labelColor="black"
          />
        </GizmoHelper>
      </Canvas>
    </div>
  );
}

export default Bird;
