import { Canvas } from '@react-three/fiber';

const HomePage = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',      
        position: 'relative',    
      }}
    >
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ 
          position: [-3, 0, 0], 
        }}
      >
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

export default HomePage;
