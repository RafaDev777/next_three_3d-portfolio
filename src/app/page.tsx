"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "@/components/Loader";

const HomePage = () => {
  return (
    <main>
      <section className="w-full h-screen relative">
        <Canvas
          className="w-full h-screen bg-transparent"
          camera={{ near: 0.1, far: 1000 }}
        >
          <React.Suspense fallback={<Loader />}>
            <directionalLight />
            <ambientLight />
            <pointLight />
            <spotLight />
            <hemisphereLight />
          </React.Suspense>
        </Canvas>
      </section>
    </main>
  );
};
export default HomePage;
