import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type IntroSequenceProps = {
  assemblyProgress: {
    current: number;
  };
};

function PolishedGold() {
  return (
    <meshPhysicalMaterial
      color="#e7bd70"
      metalness={1}
      roughness={0.16}
      clearcoat={1}
      clearcoatRoughness={0.12}
      envMapIntensity={2}
    />
  );
}

function ChampagneGold() {
  return (
    <meshPhysicalMaterial
      color="#f3d99b"
      metalness={0.96}
      roughness={0.2}
      clearcoat={1}
      clearcoatRoughness={0.16}
      envMapIntensity={1.8}
    />
  );
}

function RubyMaterial() {
  return (
    <meshPhysicalMaterial
      color="#a10e2b"
      metalness={0.12}
      roughness={0.1}
      clearcoat={1}
      clearcoatRoughness={0.04}
      ior={2.2}
      envMapIntensity={1.6}
    />
  );
}

function GoldSculpture() {
  const ribbonRef = useRef<THREE.Mesh>(null);

  const ribbonGeometry = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.8, -2, 0),
      new THREE.Vector3(0.8, -1.2, 0.3),
      new THREE.Vector3(1.15, -0.2, -0.2),
      new THREE.Vector3(0.2, 0.7, 0.45),
      new THREE.Vector3(-0.85, 1.4, 0),
      new THREE.Vector3(-0.55, 2.1, -0.3),
    ]);

    return new THREE.TubeGeometry(curve, 180, 0.12, 16, false);
  }, []);

  return (
    <mesh ref={ribbonRef} geometry={ribbonGeometry}>
      <PolishedGold />
    </mesh>
  );
}

function OrbitingGoldRing({
  radius,
  tube,
  rotation,
  position,
  speed,
}: {
  radius: number;
  tube: number;
  rotation: [number, number, number];
  position: [number, number, number];
  speed: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.x += delta * speed * 0.35;
    ref.current.rotation.y += delta * speed * 0.6;
    ref.current.rotation.z =
      rotation[2] +
      Math.sin(state.clock.elapsedTime * 0.35 * speed) * 0.12;
  });

  return (
    <group ref={ref} position={position} rotation={rotation}>
      <mesh>
        <torusGeometry args={[radius, tube, 24, 160]} />
        <PolishedGold />
      </mesh>
    </group>
  );
}

function Gemstone({
  position,
  scale,
  color = "ruby",
}: {
  position: [number, number, number];
  scale: number;
  color?: "ruby" | "champagne";
}) {
  return (
    <mesh position={position} scale={scale}>
      <octahedronGeometry args={[0.25, 2]} />
      {color === "ruby" ? (
        <RubyMaterial />
      ) : (
        <meshPhysicalMaterial
          color="#f3d99b"
          metalness={0.18}
          roughness={0.08}
          transmission={0.05}
          clearcoat={1}
          ior={2.1}
        />
      )}
    </mesh>
  );
}

/** Adds tiny gold beads along a circular path. */
function BeadedRing({
  radius,
  count,
  z = 0,
  beadSize = 0.025,
}: {
  radius: number;
  count: number;
  z?: number;
  beadSize?: number;
}) {
  const beads = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => {
        const angle = (index / count) * Math.PI * 2;

        return {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          scale: beadSize * (0.8 + (index % 3) * 0.12),
        };
      }),
    [radius, count, beadSize],
  );

  return (
    <group position={[0, 0, z]}>
      {beads.map((bead, index) => (
        <mesh
          key={index}
          position={[bead.x, bead.y, 0]}
          scale={bead.scale}
        >
          <sphereGeometry args={[1, 12, 12]} />
          <ChampagneGold />
        </mesh>
      ))}
    </group>
  );
}

/** Small gemstone settings arranged around the central ruby. */
function GemstoneHalo() {
  const stones = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) => {
        const angle = (index / 12) * Math.PI * 2;

        return {
          x: Math.cos(angle) * 0.59,
          y: Math.sin(angle) * 0.59,
          angle,
        };
      }),
    [],
  );

  return (
    <group position={[0, 0, 0.88]}>
      {stones.map((stone, index) => (
        <group
          key={index}
          position={[stone.x, stone.y, 0]}
          rotation={[0, 0, stone.angle]}
        >
          <mesh>
            <torusGeometry args={[0.095, 0.018, 10, 32]} />
            <ChampagneGold />
          </mesh>

          <mesh scale={0.8}>
            <octahedronGeometry args={[0.09, 1]} />
            <meshPhysicalMaterial
              color={index % 3 === 0 ? "#9d1730" : "#f2d7a0"}
              metalness={0.18}
              roughness={0.09}
              clearcoat={1}
              ior={2.1}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function GoldBeads() {
  const beads = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => {
        const angle = (index / 34) * Math.PI * 2;
        const radius = 1.55 + Math.sin(index * 1.8) * 0.16;

        return {
          position: [
            Math.cos(angle) * radius,
            Math.sin(angle) * radius,
            Math.sin(angle * 2) * 0.28,
          ] as [number, number, number],
          scale: 0.025 + (index % 4) * 0.009,
        };
      }),
    [],
  );

  return (
    <group>
      {beads.map((bead, index) => (
        <mesh key={index} position={bead.position} scale={bead.scale}>
          <sphereGeometry args={[1, 16, 16]} />
          <ChampagneGold />
        </mesh>
      ))}
    </group>
  );
}

function FloatingAccent({
  position,
  scale,
}: {
  position: [number, number, number];
  scale: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.position.y =
      position[1] +
      Math.sin(state.clock.elapsedTime * 0.7 + position[0]) * 0.045;
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      <mesh>
        <octahedronGeometry args={[0.2, 1]} />
        <RubyMaterial />
      </mesh>

      <mesh scale={1.35}>
        <torusGeometry args={[0.19, 0.025, 12, 40]} />
        <ChampagneGold />
      </mesh>
    </group>
  );
}

export default function IntroSequence({
  assemblyProgress,
}: IntroSequenceProps) {
  const sculptureRef = useRef<THREE.Group>(null);
  const secondaryRef = useRef<THREE.Group>(null);
  const rubyRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const progress = THREE.MathUtils.clamp(
      assemblyProgress.current,
      0,
      1,
    );

    if (sculptureRef.current) {
      sculptureRef.current.rotation.y = THREE.MathUtils.damp(
        sculptureRef.current.rotation.y,
        Math.sin(state.pointer.x * 0.35) * 0.16 +
          Math.sin(state.clock.elapsedTime * 0.18) * 0.12,
        3,
        delta,
      );

      sculptureRef.current.rotation.x = THREE.MathUtils.damp(
        sculptureRef.current.rotation.x,
        -state.pointer.y * 0.1,
        3,
        delta,
      );

      sculptureRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.6) * 0.06;
    }

    if (secondaryRef.current) {
      secondaryRef.current.rotation.y += delta * 0.12;
      secondaryRef.current.rotation.x += delta * 0.06;
    }

    if (rubyRef.current) {
      rubyRef.current.rotation.y += delta * 0.18;

      const pulse =
        1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.025;

      rubyRef.current.scale.setScalar(
        THREE.MathUtils.lerp(0.85, 1, progress) * pulse,
      );
    }
  });

  return (
    <group position={[1.75, 0.05, 0]}>
      <group ref={sculptureRef} scale={0.9}>
        <GoldSculpture />

        <OrbitingGoldRing
          radius={1.65}
          tube={0.075}
          rotation={[0.7, 0.25, 0.2]}
          position={[0, 0, -0.2]}
          speed={0.55}
        />

        <OrbitingGoldRing
          radius={1.25}
          tube={0.055}
          rotation={[1.2, 0.6, 0.8]}
          position={[0, 0, 0.25]}
          speed={-0.8}
        />

        <OrbitingGoldRing
          radius={0.8}
          tube={0.045}
          rotation={[0.2, 1.1, 0.5]}
          position={[0, 0, 0.5]}
          speed={0.95}
        />

        <BeadedRing radius={1.65} count={72} z={-0.1} beadSize={0.021} />
        <BeadedRing radius={1.25} count={48} z={0.32} beadSize={0.016} />

        <GoldBeads />

        <group ref={rubyRef} position={[0, 0, 0.82]}>
          <mesh>
            <octahedronGeometry args={[0.48, 3]} />
            <RubyMaterial />
          </mesh>

          <mesh scale={1.28}>
            <torusGeometry args={[0.42, 0.025, 12, 96]} />
            <ChampagneGold />
          </mesh>
        </group>

        <GemstoneHalo />

        <Gemstone position={[-1.15, 0.75, 0.5]} scale={0.75} />

        <Gemstone
          position={[1.0, -0.9, 0.35]}
          scale={0.58}
          color="champagne"
        />

        <Gemstone position={[1.15, 0.9, -0.1]} scale={0.42} />
      </group>

      <group ref={secondaryRef} position={[0.15, 0.1, -0.8]}>
        <OrbitingGoldRing
          radius={2.15}
          tube={0.035}
          rotation={[1.4, 0.2, 0.7]}
          position={[0, 0, 0]}
          speed={0.22}
        />
      </group>

      <FloatingAccent position={[-1.7, -1.3, 0.4]} scale={0.65} />
      <FloatingAccent position={[1.8, 1.4, 0.2]} scale={0.5} />
    </group>
  );
}