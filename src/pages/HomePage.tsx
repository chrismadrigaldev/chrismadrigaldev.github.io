import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export const HomePage = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',      // Prevent scrolling
        position: 'relative',    // For absolute positioning of UI elements
      }}
    >
      {/* 3D Game Scene */}
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ position: [0, 2, 5] }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/* Placeholder 3D object: A blue cube */}
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <OrbitControls />
      </Canvas>

      {/* UI Overlay */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '1rem',
          zIndex: 1,
        }}
      >
        <button
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
          onClick={() => console.log('Start Game clicked')}
        >
          Start Game
        </button>
        <button
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
          onClick={() => console.log('End Game clicked')}
        >
          End Game
        </button>
      </div>
    </div>
  );
};
