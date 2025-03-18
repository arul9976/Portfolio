import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss'
import Navbar from './components/Navbar/Navbar';
import { ProfileProvider } from './utils/Utill_Togg.jsx';
import { Suspense, lazy } from 'react';
import Loading from './utils/Loading.jsx';
import MyInfo from './Contact/MyInfo.jsx';

const Home = lazy(() => import('./components/Home/Home.jsx'));
const About = lazy(() => import('./components/About/About.jsx'));
const Project = lazy(() => import('./components/Projects/Project.jsx'));
const Myskill = lazy(() => import('./components/Skill/Myskill.jsx'));

function App() {
  const location = useLocation();
  return (
    <ProfileProvider>
      <div className="text-black max-md:text-white h-full overflow-hidden">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
          <Route path='/About' element={<Suspense fallback={<Loading />}><About /></Suspense>} />
          <Route path='/Projects' element={<Suspense fallback={<Loading />}><Project /></Suspense>} />
          <Route path='/Skills' element={<Suspense fallback={<Loading />}><Myskill location={location.pathname.substring(1)} /></Suspense>} />
          <Route path='/MyInfo' element={<Suspense fallback={<Loading />}><MyInfo /></Suspense>} />
        </Routes>
      </div>
    </ProfileProvider>
  )
}

export default App;

