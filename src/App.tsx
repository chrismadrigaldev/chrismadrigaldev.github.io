import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Navbar } from './components/Navbar.tsx'

export const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage />
          }
        />
      </Routes>
    </>
  )
}