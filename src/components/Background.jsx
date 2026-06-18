import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Particles() {
  const ref = useRef();

  const particles = new Float32Array(5000 * 3);

  for (let i = 0; i < particles.length; i++) {
    particles[i] = (Math.random() - 0.5) * 10;
  }

  useFrame(() => {
    ref.current.rotation.y += 0.0008;
    ref.current.rotation.x += 0.0003;
  });

  return (
    <Points ref={ref} positions={particles}>
      <PointMaterial
        transparent
        color="#facc15"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Particles />
      </Canvas>
    </div>
  );
}
