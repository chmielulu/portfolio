import { useWindowSize } from "react-use";
import { useEffect, useRef, useState } from "react";
import { Mesh, VideoTexture } from "three";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { Coords } from "../../../../interfaces/Coords";

export const useMonitor = ({
  isHovering,
  isNameHovering,
  coords,
  texture,
}: {
  isHovering: boolean;
  texture: string;
  coords: Coords;
  isNameHovering: boolean;
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

  const { nodes } = useGLTF("/monitor.gltf");

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

  return {
    videoTexture,
    wrapper,
    nodes,
    width,
    mesh,
  };
};
