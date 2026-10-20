import { Suspense, useRef, type MutableRefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import ParticleField from "./ParticleField";
import IntroSequence from "./IntroSequence";
import StorefrontScene from "../three/StorefrontScene";
import LightingRig from "../three/LightingRig";

import type { CinematicState } from "../../hooks/useCinematicTransition";

type CinematicCanvasProps = {
  cinematicState: {
    current: CinematicState;
  };
};

function CinematicWorld({
  cinematicState,
}: CinematicCanvasProps) {
  const cameraTarget = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(({ camera }, delta) => {
    const progress = THREE.MathUtils.clamp(
      cinematicState.current.sceneProgress,
      0,
      1,
    );

    // Move from the jewellery portrait towards the storefront.
    const startPosition = new THREE.Vector3(0, 0, 5.5);
    const endPosition = new THREE.Vector3(0, 1.8, -3.5);

    const easedProgress = THREE.MathUtils.smoothstep(
      progress,
      0,
      1,
    );

    const desiredPosition = startPosition.clone().lerp(
      endPosition,
      easedProgress,
    );

    camera.position.lerp(
      desiredPosition,
      1 - Math.exp(-delta * 4),
    );

    // Shift the camera's focus from the pendant to the shop facade.
    const startTarget = new THREE.Vector3(0, 0, 0);
    const endTarget = new THREE.Vector3(0, 1.2, -12);

    cameraTarget.current
      .copy(startTarget)
      .lerp(endTarget, easedProgress);

    camera.lookAt(cameraTarget.current);
  });

  return (
    <>
      <LightingRig />
      <ParticleField />

      <IntroSequence
        assemblyProgress={cinematicStateAssembly(cinematicState)}
      />

      <group
        visible={cinematicState.current.sceneProgress > 0.72}
      >
        <StorefrontScene />
      </group>
    </>
  );
}

/**
 * Access the assembly progress from the same shared state.
 * This keeps the Canvas connected to the hook's mutable controller.
 */
function cinematicStateAssembly(
  state: CinematicCanvasProps["cinematicState"],
): MutableRefObject<number> {
  return {
    get current() {
      return state.current.assemblyProgress;
    },
    set current(value: number) {
      state.current.assemblyProgress = value;
    },
  } as MutableRefObject<number>;
}

export default function CinematicCanvas({
  cinematicState,
}: CinematicCanvasProps) {
  return (
    <div className="cinematic-canvas">
      <Canvas
        dpr={[1, 1.75]}
        camera={{
          position: [0, 0, 6],
          fov: 38,
          near: 0.1,
          far: 100,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <color attach="background" args={["#1c0509"]} />

        <Suspense fallback={null}>
          <CinematicWorld cinematicState={cinematicState} />
        </Suspense>
      </Canvas>
    </div>
  );
}