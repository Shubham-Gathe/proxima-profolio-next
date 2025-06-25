"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import React, { Suspense, useState, useRef } from "react";

// Model component to load and display the GLTF model
function Model({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  const gltf = useGLTF("/satelite/scene.gltf");
  return (
    <primitive object={gltf.scene} scale={0.2} position={position} rotation={rotation} />
  );
}

// MovingModel component for free-floating movement in space
function MovingModel() {
  // Position and rotation state
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

  // Randomized movement parameters
  const velocity = useRef<[number, number, number]>([
    (Math.random() - 0.5) * 0.03,
    (Math.random() - 0.5) * 0.03,
    (Math.random() - 0.5) * 0.03,
  ]);
  const rotationVelocity = useRef<[number, number, number]>([
    (Math.random() - 0.5) * 0.01,
    (Math.random() - 0.5) * 0.01,
    (Math.random() - 0.5) * 0.01,
  ]);

  useFrame(() => {
    setPosition(([x, y, z]) => {
      const nx = x + velocity.current[0];
      const ny = y + velocity.current[1];
      const nz = z + velocity.current[2];

      // Bounce off invisible space boundaries
      if (nx > 8 || nx < -8) velocity.current[0] *= -1;
      if (ny > 4 || ny < -4) velocity.current[1] *= -1;
      if (nz > 4 || nz < -4) velocity.current[2] *= -1;

      return [
        Math.max(Math.min(nx, 8), -8),
        Math.max(Math.min(ny, 4), -4),
        Math.max(Math.min(nz, 4), -4),
      ];
    });

    setRotation(([rx, ry, rz]) => [
      rx + rotationVelocity.current[0],
      ry + rotationVelocity.current[1],
      rz + rotationVelocity.current[2],
    ]);
  });

  return <Model position={position} rotation={rotation} />;
}

// Main component for the floating model background
export default function FloatingModelBackground() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={1} />
        {/* Existing side light */}
        <directionalLight position={[-5, 5, 8]} intensity={0.5} />
        {/* Strong front light */}
        <directionalLight position={[0, 0, 10]} intensity={2} />
        <Suspense fallback={null}>
          <MovingModel />
          <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
        </Suspense>
      </Canvas>
    </div>
  );
}

