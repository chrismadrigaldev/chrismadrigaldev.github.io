import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainMenu = lazy(() => import('./pages/MainMenu.tsx'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainMenu />} />
      </Routes>
    </Suspense>
  );
};
