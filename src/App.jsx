import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss'
import Navbar from './components/Navbar/Navbar';
import { ProfileProvider } from './utils/Utill_Togg.jsx';
import { Suspense, lazy } from 'react';

const Demo = lazy(() => import('./components/Demo'));
const Home = lazy(() => import('./components/Home/Home.jsx'));
const About = lazy(() => import('./components/About/About.jsx'));
const Project = lazy(() => import('./components/Projects/Project.jsx'));
const Myskill = lazy(() => import('./components/Skill/Myskill.jsx'));

function App() {
  const location = useLocation();

  console.log('render app');
  return (
    <ProfileProvider>
      <div className="text-black max-md:text-white h-full overflow-hidden">
        <Navbar />
        <Routes>
          <Route path='/Portfolio/' exact element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
          <Route path='/Portfolio/About' element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
          <Route path='/Portfolio/Projects' element={<Suspense fallback={<div>Loading...</div>}><Project /></Suspense>} />
          <Route path='/Portfolio/Skills' element={<Suspense fallback={<div>Loading...</div>}><Myskill location={location.pathname.substring(1)} /></Suspense>} />
          <Route path='/Portfolio/Resume' element={<Suspense fallback={<div>Loading...</div>}><Demo location={location.pathname.substring(1)} /></Suspense>} />
        </Routes>
      </div>
    </ProfileProvider>
  )
}

export default App;

