import { useFrame } from "@react-three/fiber";
import React, { useRef, Suspense, FC, useEffect, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { Mesh, VideoTexture } from "three";
import { useGLTF } from "@react-three/drei";
import { useWindowSize } from "react-use";

const getPosition = (width: number): [number, number, number] => {
  if (width < 1100) {
    return [2.9, 0, 0];
  } else if (width < 1200) {
    return [2.6, 0, 0];
  }

  return [2.2, 0, 0];
};

const getScale = (width: number): [number, number, number] => {
  if (width < 1100) {
    return [-0.7, 0.04, 1];
  } else if (width < 1200) {
    return [-0.8, 0.04, 1.2];
  }

  return [-0.9, 0.05, 1.2];
};

const Monitor: FC<Props> = ({
  texture,
  coords,
  isHovering,
  isNameHovering,
}) => {
  const { width } = useWindowSize();
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);
  const [videoTexture, setVideoTexture] = useState<VideoTexture | null>(null);
  const wrapper = useRef<Mesh>(null);
  const mesh = useRef<Mesh>(null);
  const [isHoverOnSmallerDevices, setIsHoverOnSmallerDevices] =
    useState<boolean>(false);

  useEffect(() => {
    if (isHovering && width <= 1280) {
      setIsHoverOnSmallerDevices(true);
    } else if (!isHovering && width <= 1280) {
      setIsHoverOnSmallerDevices(false);
    }
  }, [width, isHovering]);

  const { nodes } = useGLTF("/untitled.gltf");

  useEffect(() => {
    const newVideo = document.createElement("video");
    newVideo.playsInline = true;
    newVideo.muted = true;
    newVideo.loop = true;
    newVideo.autoplay = true;
    newVideo.src = texture;

    setVideo(newVideo);
    setVideoTexture(new THREE.VideoTexture(newVideo));
  }, []);

  useEffect(() => {
    if (isHovering) {
      video?.play();
    } else {
      video?.pause();
    }
  }, [isHovering]);

  useFrame(() => {
    const tl = gsap.timeline();
    if (!mesh.current || !wrapper.current) return;

    if (isHovering) {
      const { x, y } = coords;

      gsap.to(mesh.current.rotation, {
        x: -1.55 + y * 0.001,
        y: x * 0.0005,
        ease: "easeInOutExpo",
      });
    } else {
      gsap.to(mesh.current.rotation, {
        x: -1.55,
        y: 0,
        z: -0.6,
        ease: "easeInOutExpo",
      });
    }

    if (isHoverOnSmallerDevices) {
      tl?.to(
        wrapper.current.scale,
        {
          x: width < 1100 ? 2 : 1.6,
          y: width < 1100 ? 2 : 1.6,
          z: width < 1100 ? 2 : 1.6,
          ease: "easeInOutExpo",
        },
        0
      ).to(
        wrapper.current.position,
        {
          x: width < 1100 ? -1.8 : -1,
          ease: "easeInOutExpo",
        },
        0
      );
    } else if (!isHovering && width <= 1280) {
      tl?.to(
        wrapper.current.position,
        {
          x: 0,
          ease: "easeInOutExpo",
        },
        0
      ).to(
        wrapper.current.scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "easeInOutExpo",
        },
        0
      );
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
      {videoTexture && (
        <>
          <ambientLight intensity={0.7} />
          <directionalLight position={[0, 0, 5]} color="black" />

          <mesh ref={wrapper}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes as any).Cube001.geometry}
              material={(nodes as any).Cube001.material}
              position={getPosition(width)}
              scale={getScale(width)}
              ref={mesh}
              rotation={[2, 10, 0]}
            >
              <meshLambertMaterial map={videoTexture} />
            </mesh>

            {/*<primitive*/}
            {/*  object={model}*/}
            {/*  position={[-1, 0, 0]}*/}
            {/*  scale={[1.4, 1.4, 0.05]}*/}
            {/*  ref={mesh}*/}
            {/*  rotation={[0, 2.7, 0]}*/}
            {/*>*/}
            {/*  <meshLambertMaterial map={videoTexture} />*/}
            {/*</primitive>*/}
          </mesh>
        </>
      )}
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
