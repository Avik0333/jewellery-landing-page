import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 1100;

type Particle = {
  x: number;
  y: number;
  z: number;
  phase: number;
  speed: number;
  amplitude: number;
  size: number;
};

function createParticles(): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: (Math.random() - 0.5) * 15,
    y: (Math.random() - 0.5) * 10,
    z: (Math.random() - 0.5) * 9,
    phase: Math.random() * Math.PI * 2,
    speed: 0.08 + Math.random() * 0.2,
    amplitude: 0.04 + Math.random() * 0.16,
    size: 0.012 + Math.random() * 0.025,
  }));
}

function makeTrail(
  radius: number,
  height: number,
  turns: number,
  phase: number,
) {
  const points: THREE.Vector3[] = [];
  const segments = 220;

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const angle = t * Math.PI * 2 * turns + phase;

    points.push(
      new THREE.Vector3(
        Math.cos(angle) * radius,
        (t - 0.5) * height,
        Math.sin(angle) * radius - 1.4,
      ),
    );
  }

  return new THREE.CatmullRomCurve3(points);
}

function GoldenTrails() {
  const trails = useMemo(
    () => [
      makeTrail(1.9, 5.6, 1.3, 0),
      makeTrail(2.4, 6.2, 1.1, 1.6),
      makeTrail(1.4, 4.8, 1.5, 3.1),
    ],
    [],
  );

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y += delta * 0.012;
    groupRef.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.12) * 0.018;
  });

  return (
    <group ref={groupRef} position={[1.75, 0, -1.8]}>
      {trails.map((curve, index) => (
        <mesh key={index}>
          <tubeGeometry
            args={[curve, 220, index === 1 ? 0.008 : 0.005, 6, false]}
          />
          <meshBasicMaterial
            color={index === 1 ? "#f1d394" : "#a86c2b"}
            transparent
            opacity={index === 1 ? 0.52 : 0.28}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleData = useMemo(createParticles, []);

  const positions = useMemo(
    () => new Float32Array(PARTICLE_COUNT * 3),
    [],
  );

  const colors = useMemo(() => {
    const data = new Float32Array(PARTICLE_COUNT * 3);
    const gold = new THREE.Color("#e7bd70");
    const champagne = new THREE.Color("#fff0c4");
    const bronze = new THREE.Color("#9d642c");

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const choice = Math.random();

      const color =
        choice > 0.94
          ? champagne
          : choice > 0.55
            ? gold
            : bronze;

      color.toArray(data, i * 3);
    }

    return data;
  }, []);

  useFrame((state, delta) => {
    const points = pointsRef.current;
    if (!points) return;

    const elapsed = state.clock.elapsedTime;
    const positionAttribute = points.geometry.getAttribute(
      "position",
    ) as THREE.BufferAttribute;

    const positionArray = positionAttribute.array as Float32Array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const particle = particleData[i];
      const index = i * 3;

      positionArray[index] =
        particle.x +
        Math.sin(elapsed * particle.speed + particle.phase) *
          particle.amplitude;

      positionArray[index + 1] =
        particle.y +
        Math.cos(elapsed * particle.speed * 0.7 + particle.phase) *
          particle.amplitude;

      positionArray[index + 2] = particle.z;
    }

    positionAttribute.needsUpdate = true;

    points.rotation.y += delta * 0.008;

    const material = points.material as THREE.PointsMaterial;
    material.opacity = 0.55 + Math.sin(elapsed * 0.4) * 0.07;
  });

  return (
    <>
      <points
        ref={pointsRef}
        frustumCulled={false}
        renderOrder={-1}
      >
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={PARTICLE_COUNT}
            itemSize={3}
          />

          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
            count={PARTICLE_COUNT}
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          vertexColors
          size={0.025}
          sizeAttenuation
          transparent
          opacity={0.55}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <GoldenTrails />
    </>
  );
}