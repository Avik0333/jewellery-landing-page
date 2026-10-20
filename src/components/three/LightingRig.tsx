export default function LightingRig() {
  return (
    <>
      <ambientLight intensity={0.22} />

      {/* Large warm key light */}
      <spotLight
        position={[3, 5, 5]}
        intensity={95}
        angle={0.55}
        penumbra={1}
        color="#ffe5b0"
      />

      {/* Left-side gold reflection */}
      <pointLight
        position={[-4, 1, 3]}
        intensity={24}
        color="#e5ad53"
      />

      {/* Burgundy rim light */}
      <pointLight
        position={[-3, 0, -2]}
        intensity={18}
        color="#9d233a"
      />

      {/* Bright edge highlights */}
      <pointLight
        position={[4, 2, 1]}
        intensity={17}
        color="#fff0d0"
      />

      {/* Top light */}
      <directionalLight
        position={[0, 6, 2]}
        intensity={2.8}
        color="#f4d69a"
      />

      {/* Subtle front fill */}
      <pointLight
        position={[0, -2, 5]}
        intensity={5}
        color="#b77b3c"
      />
    </>
  );
}