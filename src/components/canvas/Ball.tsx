import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal, 
  Float, 
  OrbitControls, 
  Preload, 
  useTexture, 
  Html,
} from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Ball = React.forwardRef<any, any>((props, ref) => {
  const [decal] = useTexture([props.imgUrl]);
  // Accept zoomed prop for triple click zoom
  const scale = props.zoomed ? 4.5 : 2.75;
  return (
    <>
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh
          ref={ref}
          castShadow
          receiveShadow
          scale={scale}
          onClick={props.onClick}
          onPointerDown={props.onPointerDown}
        >
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color={props.accent || '#6366f1'}
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            // @ts-expect-error
            flatShading
          />
        </mesh>
      </Float>
      {/* Overlay a square with the image when zoomed */}
      {props.zoomed && (
        <Html center style={{ pointerEvents: 'none' }}>
          <div
            style={{
              width: 120,
              height: 120,
              background: '#fff',
              border: `3px solid ${props.accent || '#6366f1'}`,
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
            }}
          >
            <img
              src={props.imgUrl}
              alt="tech"
              style={{ width: 80, height: 80, objectFit: 'contain' }}
            />
          </div>
        </Html>
      )}
    </>
  );
});

const BallCanvas: React.FC<{ icon: string; accent?: string }> = ({ icon, accent }) => {
  // Add a spin state for click effect
  const [spin, setSpin] = React.useState(false);
  const [zoomed, setZoomed] = React.useState(false);
  const meshRef = React.useRef<any>(null);
  const clickTimes = React.useRef<number[]>([]);

  // Triple click detection
  const handlePointerDown = () => {
    const now = Date.now();
    clickTimes.current.push(now);
    // Keep only last 3 clicks
    if (clickTimes.current.length > 3) clickTimes.current.shift();
    if (
      clickTimes.current.length === 3 &&
      clickTimes.current[2] - clickTimes.current[0] < 600
    ) {
      setZoomed((z) => !z);
      clickTimes.current = [];
    }
  };

  React.useEffect(() => {
    if (spin && meshRef.current) {
      let frame: number;
      const animate = () => {
        if (meshRef.current) {
          meshRef.current.rotation.y += 0.2;
        }
        frame = requestAnimationFrame(animate);
      };
      animate();
      setTimeout(() => {
        setSpin(false);
        cancelAnimationFrame(frame);
      }, 600);
      return () => cancelAnimationFrame(frame);
    }
  }, [spin]);

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enablePan={true} enableZoom={true} />
        <Ball
          ref={meshRef}
          imgUrl={icon}
          accent={accent}
          onClick={() => setSpin(true)}
          zoomed={zoomed}
          onPointerDown={handlePointerDown}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
