import React, { Suspense, FC } from "react";
import { useMonitor } from "./useMonitor";

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
    return [-0.7, 0.04, 0.9];
  } else if (width < 1200) {
    return [-0.8, 0.04, 1.0];
  }

  return [-0.9, 0.05, 1.1];
};

const Monitor: FC<Props> = ({
  texture,
  coords,
  isHovering,
  isNameHovering,
}) => {
  const { width, nodes, wrapper, mesh, videoTexture } = useMonitor({
    texture,
    coords,
    isHovering,
    isNameHovering,
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
