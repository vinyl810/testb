import { GradientTexture } from '@react-three/drei';

function BirdBody() {
  return (
    <>
      <mesh
        castShadow
        receiveShadow
        rotation={[0, 0, 45]}
        position={[0.75, -2, 0]}
      >
        <capsuleGeometry args={[1.15, 1, 50, 50]} />
        <meshBasicMaterial>
          <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
          />
        </meshBasicMaterial>
      </mesh>
      <mesh position={[0.75, -3, 0.25]} castShadow receiveShadow>
        <cylinderGeometry args={[0.1, 0.1, 1.25]} />
        <meshBasicMaterial>
          <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={['yellow', 'orange']} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
          />
        </meshBasicMaterial>
      </mesh>
      <mesh position={[0.75, -3, -0.25]} castShadow receiveShadow>
        <cylinderGeometry args={[0.1, 0.1, 1.25]} />
        <meshBasicMaterial>
          <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={['yellow', 'orange']} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
          />
        </meshBasicMaterial>
      </mesh>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0.75, -3.75, 0]}
        receiveShadow
      >
        <circleGeometry args={[5, 50, 50]} />
        <meshStandardMaterial color="tan" />
      </mesh>
    </>
  );
}

export default BirdBody;
