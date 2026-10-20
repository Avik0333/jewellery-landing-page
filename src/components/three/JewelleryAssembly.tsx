import { useMemo, useRef, useEffect, type MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type JewelleryAssemblyProps = {
  assemblyProgress: MutableRefObject<number>;
  interactive?: boolean;
};

function GoldMaterial() {
  return (
    <meshPhysicalMaterial
      color="#e3bd70"
      metalness={1}
      roughness={0.19}
      clearcoat={0.8}
      clearcoatRoughness={0.16}
      envMapIntensity={1.8}
    />
  );
}

export default function JewelleryAssembly({
  assemblyProgress,
  interactive = true,
}: JewelleryAssemblyProps) {
  const pendantRef = useRef<THREE.Group>(null);
  const dragRef = useRef({
    active: false,
    lastX: 0,
    lastY: 0,
    rotationX: 0,
    rotationY: 0,
    targetRotationX: 0,
    targetRotationY: 0,
  });

  const pendantGeometry = useMemo(() => {
    const shape = new THREE.Shape();

    shape.moveTo(0, 0.85);
    shape.bezierCurveTo(0.52, 0.8, 0.72, 0.35, 0.56, -0.08);
    shape.bezierCurveTo(0.43, -0.45, 0.17, -0.72, 0, -0.88);
    shape.bezierCurveTo(-0.17, -0.72, -0.43, -0.45, -0.56, -0.08);
    shape.bezierCurveTo(-0.72, 0.35, -0.52, 0.8, 0, 0.85);

    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 0.14,
      bevelEnabled: true,
      bevelSegments: 5,
      bevelSize: 0.045,
      bevelThickness: 0.04,
      curveSegments: 48,
    });

    geometry.computeVertexNormals();
    return geometry;
  }, []);

  useEffect(() => {
    return () => pendantGeometry.dispose();
  }, [pendantGeometry]);

  useFrame((state, delta) => {
    const pendant = pendantRef.current;
    if (!pendant) return;

    const progress = THREE.MathUtils.clamp(
      assemblyProgress.current,
      0,
      1,
    );

    const drag = dragRef.current;

    drag.rotationX = THREE.MathUtils.damp(
      drag.rotationX,
      drag.targetRotationX,
      7,
      delta,
    );

    drag.rotationY = THREE.MathUtils.damp(
      drag.rotationY,
      drag.targetRotationY,
      7,
      delta,
    );

    const interaction = interactive && progress > 0.85 ? 1 : 0;

    pendant.rotation.x =
      drag.rotationX + state.pointer.y * 0.035 * interaction;

    pendant.rotation.y =
      drag.rotationY +
      Math.sin(state.clock.elapsedTime * 0.3) * 0.025 * progress +
      state.pointer.x * 0.05 * interaction;

    pendant.position.y =
      Math.sin(state.clock.elapsedTime * 0.8) * 0.025 * progress;
  });

  function handlePointerDown(event: THREE.Event & {
    clientX?: number;
    clientY?: number;
  }) {
    if (!interactive || assemblyProgress.current < 0.85) return;

    const pointerEvent = event as unknown as PointerEvent;
    dragRef.current.active = true;
    dragRef.current.lastX = pointerEvent.clientX ?? 0;
    dragRef.current.lastY = pointerEvent.clientY ?? 0;
  }

  function handlePointerMove(event: THREE.Event) {
    const drag = dragRef.current;
    if (!interactive || !drag.active) return;

    const pointerEvent = event as unknown as PointerEvent;
    const x = pointerEvent.clientX ?? drag.lastX;
    const y = pointerEvent.clientY ?? drag.lastY;

    drag.targetRotationY += (x - drag.lastX) * 0.008;
    drag.targetRotationX += (y - drag.lastY) * 0.008;

    drag.targetRotationX = THREE.MathUtils.clamp(
      drag.targetRotationX,
      -0.65,
      0.65,
    );

    drag.lastX = x;
    drag.lastY = y;
  }

  function handlePointerUp() {
    dragRef.current.active = false;
  }

  return (
    <group
      ref={pendantRef}
      scale={0.78}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerOut={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* Main pendant */}
      <mesh geometry={pendantGeometry} position={[0, 0, 0]}>
        <GoldMaterial />
      </mesh>

      {/* Inner gold border */}
      <mesh position={[0, 0, 0.13]}>
        <torusGeometry args={[0.39, 0.035, 16, 80]} />
        <GoldMaterial />
      </mesh>

      {/* Central ruby */}
      <mesh position={[0, 0.02, 0.22]} scale={0.68}>
        <octahedronGeometry args={[0.2, 2]} />
        <meshPhysicalMaterial
          color="#a71935"
          metalness={0.05}
          roughness={0.12}
          clearcoat={1}
          clearcoatRoughness={0.06}
        />
      </mesh>

      {/* Upper connector */}
      <mesh position={[0, 0.98, 0]}>
        <torusGeometry args={[0.15, 0.035, 16, 48]} />
        <GoldMaterial />
      </mesh>

      {/* Gold details */}
      {[-0.28, 0.28].map((x) => (
        <mesh key={x} position={[x, 0.42, 0.18]}>
          <sphereGeometry args={[0.065, 20, 20]} />
          <GoldMaterial />
        </mesh>
      ))}

      {/* Hanging ornaments */}
      {[-0.2, 0, 0.2].map((x) => (
        <group key={x} position={[x, -0.75, 0.08]}>
          <mesh>
            <sphereGeometry args={[0.055, 20, 20]} />
            <GoldMaterial />
          </mesh>

          <mesh position={[0, -0.1, 0]}>
            <sphereGeometry args={[0.022, 12, 12]} />
            <meshStandardMaterial
              color="#e8d5a3"
              metalness={0.8}
              roughness={0.22}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}