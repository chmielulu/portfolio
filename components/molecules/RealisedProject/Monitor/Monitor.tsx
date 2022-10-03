import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef, Suspense, FC, useEffect, useState } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { gsap } from "gsap";

const Monitor: FC<Props> = ({
  texture,
  coords,
  isHovering,
  isNameHovering,
}) => {
  const [videoTexture, setVideoTexture] = useState(null);
  const wrapper = useRef(null);
  const mesh = useRef(null);

  const model = useLoader(OBJLoader, "/monitor.obj");
  const [image] = useLoader(THREE.TextureLoader, [texture]);

  useEffect(() => {
    const newVideo = document.createElement("video");
    newVideo.playsInline = true;
    newVideo.muted = true;
    newVideo.loop = true;
    newVideo.autoplay = true;
    newVideo.src = "test_video.mov";

    newVideo.play();

    setVideoTexture(new THREE.VideoTexture(newVideo));
  }, []);

  useFrame(() => {
    if (isHovering) {
      const { x, y } = coords;

      gsap.to(mesh.current.rotation, {
        x: y * 0.001,
        y: 2.7 + x * 0.0005,
        ease: "easeInOutExpo",
      });
    } else {
      gsap.to(mesh.current.rotation, {
        x: 0,
        y: 2.7,
        ease: "easeInOutExpo",
      });
    }

    if (isNameHovering) {
      gsap.to(wrapper.current.scale, {
        x: 0.9,
        y: 0.9,
        z: 0.9,
        ease: "easeInOutExpo",
      });
    } else {
      gsap.to(wrapper.current.scale, {
        x: 1,
        y: 1,
        z: 1,
        ease: "easeInOutExpo",
      });
    }
  });

  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[0, 0, 5]} color="black" />

      <mesh ref={wrapper}>
        <primitive
          object={model.children[0]}
          position={[-1, 0, 0]}
          scale={[1.4, 1.4, 0.05]}
          ref={mesh}
          rotation={[0, 2.7, 0]}
        >
          <meshLambertMaterial map={videoTexture} />
        </primitive>
      </mesh>
    </Suspense>
  );
};

interface Props {
  texture: string;
  coords: { x: number; y: number };
  isHovering: boolean;
  isNameHovering: boolean;
}

export default Monitor;
