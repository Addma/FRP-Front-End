import './App.css';
import Landing from './pages/main.js';
import About from './pages/about';
import Login from './pages/login';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import Profile from './pages/profile';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Map from './pages/map';
import Works from './pages/works';
import Error from './pages/error';
function Router() {
  return (
  <Routes>
    <Route path="/" element={<Landing />}/>
    <Route path="*" element={<Error/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/dashboard" element={<Dashboard />}/>
    <Route path="/profile" element={<Profile />}/>
    <Route path="/works" element={<Works/>}/>
    <Route path="/map" element={<Map />}/>
  </Routes>
  );
}

export default Router;
