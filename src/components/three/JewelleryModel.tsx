import * as THREE from "three";

function GoldMaterial() {
  return (
    <meshStandardMaterial
      color="#d5ae65"
      metalness={0.82}
      roughness={0.24}
    />
  );
}

export default function JewelleryModel() {
  const pendantShape = new THREE.Shape();

  pendantShape.moveTo(0, 0.85);
  pendantShape.bezierCurveTo(0.52, 0.8, 0.72, 0.35, 0.56, -0.08);
  pendantShape.bezierCurveTo(0.43, -0.45, 0.17, -0.72, 0, -0.88);
  pendantShape.bezierCurveTo(-0.17, -0.72, -0.43, -0.45, -0.56, -0.08);
  pendantShape.bezierCurveTo(-0.72, 0.35, -0.52, 0.8, 0, 0.85);

  const pendantGeometry = new THREE.ExtrudeGeometry(pendantShape, {
    depth: 0.12,
    bevelEnabled: true,
    bevelSegments: 3,
    steps: 1,
    bevelSize: 0.045,
    bevelThickness: 0.04,
    curveSegments: 32,
  });

  pendantGeometry.center();

  return (
    <group>
      {/* Main gold body */}
      <mesh geometry={pendantGeometry}>
        <GoldMaterial />
      </mesh>

      {/* Central gemstone */}
      <mesh position={[0, 0.02, 0.18]}>
        <octahedronGeometry args={[0.22, 1]} />

        <meshPhysicalMaterial
          color="#8c172c"
          metalness={0.08}
          roughness={0.14}
          clearcoat={1}
          clearcoatRoughness={0.08}
        />
      </mesh>

      {/* Decorative gold border */}
      <mesh position={[0, 0, 0.095]}>
        <torusGeometry args={[0.39, 0.035, 12, 64]} />

        <GoldMaterial />
      </mesh>

      {/* Necklace attachment */}
      <mesh position={[0, 0.98, 0]}>
        <torusGeometry args={[0.15, 0.035, 16, 40]} />

        <GoldMaterial />
      </mesh>

      {/* Decorative stones */}
      {[-0.28, 0.28].map((x) => (
        <mesh key={x} position={[x, 0.42, 0.15]}>
          <sphereGeometry args={[0.065, 16, 16]} />

          <meshPhysicalMaterial
            color="#e8d5a3"
            metalness={0.2}
            roughness={0.12}
            clearcoat={1}
          />
        </mesh>
      ))}

      {/* Hanging gold drops */}
      {[-0.2, 0, 0.2].map((x) => (
        <mesh key={x} position={[x, -0.75, 0.06]}>
          <sphereGeometry args={[0.055, 16, 16]} />

          <GoldMaterial />
        </mesh>
      ))}
    </group>
  );
}