"use client";

import { Box } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useIsMobile } from "@/app/hooks";

export const MainVisual = () => {
  const { width } = useViewportSize();
  const boxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!boxRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const container = boxRef.current;

    const canvasWidth = container.clientWidth;
    const canvasHeight = container.clientHeight;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    const scene = new THREE.Scene();
    const aspect = canvasWidth / canvasHeight;
    const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    camera.position.set(0, 0, 1.5);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(canvasWidth, canvasHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 0.2);
    pointLight.position.set(1, 2, 3);
    scene.add(pointLight);

    const clock = new THREE.Clock();
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      cube.rotation.x = elapsedTime;
      cube.rotation.y = elapsedTime;
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };
    tick();

    const onResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [width]);

  return (
    <Box
      ref={boxRef}
      style={{
        width: "100%",
        height: isMobile ? "300px" : "100vh",
      }}
    >
      <canvas ref={canvasRef} />
    </Box>
  );
};
