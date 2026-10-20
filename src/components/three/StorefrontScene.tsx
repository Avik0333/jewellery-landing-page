import { useMemo } from "react";

function GoldMaterial() {
  return (
    <meshStandardMaterial
      color="#c8a45d"
      metalness={0.78}
      roughness={0.3}
    />
  );
}

function StoreMaterial() {
  return (
    <meshStandardMaterial
      color="#380810"
      roughness={0.42}
      metalness={0.18}
    />
  );
}

function GlassMaterial() {
  return (
    <meshPhysicalMaterial
      color="#8d6550"
      roughness={0.14}
      metalness={0.28}
      transparent
      opacity={0.48}
      transmission={0.15}
      thickness={0.12}
      clearcoat={1}
    />
  );
}

function SignText({
  text,
  position,
  fontSize,
}: {
  text: string;
  position: [number, number, number];
  fontSize: number;
}) {
  return (
    <mesh position={position}>
      <planeGeometry args={[fontSize * text.length * 0.55, fontSize * 1.25]} />
      <meshBasicMaterial
        color="#f7f0e5"
        transparent
        opacity={0.95}
      />
    </mesh>
  );
}

export default function StorefrontScene() {
  const displayItems = useMemo(
    () =>
      Array.from({ length: 5 }, (_, index) => ({
        x: -2.15 + index * 1.075,
        height: 0.35 + (index % 3) * 0.12,
      })),
    [],
  );

  return (
    <group position={[0, -1.2, -12]}>
      {/* Main facade */}
      <mesh position={[0, 1.8, 0]}>
        <boxGeometry args={[7.4, 4.6, 0.5]} />
        <StoreMaterial />
      </mesh>

      {/* Gold architectural frame */}
      <mesh position={[0, 4.15, 0.32]}>
        <boxGeometry args={[7.8, 0.12, 0.12]} />
        <GoldMaterial />
      </mesh>

      <mesh position={[-3.75, 1.8, 0.32]}>
        <boxGeometry args={[0.12, 4.6, 0.12]} />
        <GoldMaterial />
      </mesh>

      <mesh position={[3.75, 1.8, 0.32]}>
        <boxGeometry args={[0.12, 4.6, 0.12]} />
        <GoldMaterial />
      </mesh>

      {/* Store signboard */}
      <mesh position={[0, 3.55, 0.34]}>
        <boxGeometry args={[5.9, 1.1, 0.16]} />
        <meshStandardMaterial
          color="#1c0509"
          metalness={0.32}
          roughness={0.35}
          emissive="#24060b"
          emissiveIntensity={0.5}
        />
      </mesh>

      <mesh position={[0, 4.12, 0.44]}>
        <boxGeometry args={[5.9, 0.035, 0.035]} />
        <GoldMaterial />
      </mesh>

      <mesh position={[0, 2.99, 0.44]}>
        <boxGeometry args={[5.9, 0.035, 0.035]} />
        <GoldMaterial />
      </mesh>

      {/* Sign text placeholders — replace with real typography next */}
      <SignText
        text="सुवर्णधेनु"
        position={[0, 3.7, 0.46]}
        fontSize={0.43}
      />

      <SignText
        text="UNIQUE STORE"
        position={[0, 3.27, 0.46]}
        fontSize={0.16}
      />

      {/* Entrance */}
      <mesh position={[0, 0.9, 0.32]}>
        <boxGeometry args={[1.45, 2.5, 0.16]} />
        <meshStandardMaterial
          color="#0e0708"
          roughness={0.32}
          metalness={0.22}
        />
      </mesh>

      <mesh position={[-0.76, 0.9, 0.45]}>
        <boxGeometry args={[0.055, 2.6, 0.08]} />
        <GoldMaterial />
      </mesh>

      <mesh position={[0.76, 0.9, 0.45]}>
        <boxGeometry args={[0.055, 2.6, 0.08]} />
        <GoldMaterial />
      </mesh>

      {/* Display windows */}
      {[-2.35, 2.35].map((x) => (
        <group key={x} position={[x, 1.25, 0.34]}>
          <mesh>
            <boxGeometry args={[1.65, 2.05, 0.12]} />
            <GlassMaterial />
          </mesh>

          <mesh position={[0, 1.04, 0.09]}>
            <boxGeometry args={[1.72, 0.07, 0.08]} />
            <GoldMaterial />
          </mesh>

          <mesh position={[0, -1.04, 0.09]}>
            <boxGeometry args={[1.72, 0.07, 0.08]} />
            <GoldMaterial />
          </mesh>

          <mesh position={[0, 0, 0.12]}>
            <boxGeometry args={[0.045, 2.05, 0.08]} />
            <GoldMaterial />
          </mesh>
        </group>
      ))}

      {/* Jewellery display plinths */}
      {displayItems.map((item, index) => (
        <group
          key={index}
          position={[
            item.x,
            0.55 + item.height * 0.25,
            0.52,
          ]}
        >
          <mesh>
            <cylinderGeometry args={[0.16, 0.2, item.height, 24]} />
            <meshStandardMaterial
              color="#c8a45d"
              metalness={0.86}
              roughness={0.25}
            />
          </mesh>

          <mesh position={[0, item.height * 0.65, 0]}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial
              color={index % 2 === 0 ? "#8c172c" : "#e8d5a3"}
              metalness={0.35}
              roughness={0.2}
              emissive={index % 2 === 0 ? "#30050b" : "#3d2b0d"}
              emissiveIntensity={0.25}
            />
          </mesh>
        </group>
      ))}

      {/* Base platform */}
      <mesh position={[0, -0.58, 0.25]}>
        <boxGeometry args={[7.8, 0.18, 1.2]} />
        <GoldMaterial />
      </mesh>

      {/* Warm architectural lighting */}
      <pointLight
        position={[0, 3.2, 1.2]}
        color="#e8c982"
        intensity={4}
        distance={8}
      />

      <pointLight
        position={[-2.2, 1.4, 1.1]}
        color="#e7bc70"
        intensity={2}
        distance={4}
      />

      <pointLight
        position={[2.2, 1.4, 1.1]}
        color="#e7bc70"
        intensity={2}
        distance={4}
      />
    </group>
  );
}