"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 5.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(1.2, 0.34, 130, 18);
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#f59e0b"),
      metalness: 0.7,
      roughness: 0.25,
      emissive: new THREE.Color("#5b21b6"),
      emissiveIntensity: 0.35
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(2.1, 0.3, 0);
    scene.add(mesh);

    const light1 = new THREE.PointLight("#ff2a6d", 60);
    light1.position.set(-2, 2, 4);
    scene.add(light1);

    const light2 = new THREE.PointLight("#05f7b7", 45);
    light2.position.set(2, -1, 4);
    scene.add(light2);

    const ambient = new THREE.AmbientLight("#ffffff", 0.7);
    scene.add(ambient);

    let raf = 0;
    const onResize = () => {
      const { width, height } = el.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    onResize();
    const ro = new ResizeObserver(onResize);
    ro.observe(el);

    const tick = () => {
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.007;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="pointer-events-none absolute right-0 top-0 h-full w-full opacity-60 md:opacity-80"
    />
  );
}
