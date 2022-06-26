import './App.css';
import App from './main.js';
import About from './components/about';
import Login from './components/login';
import Contact from './components/contact';
import SignUp from './components/signup';
import Profile from './components/profile';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './components/dashboard';
import Nav from './components/nav';
function Router() {
  return (
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="*" element={<h1>Error: link not found.</h1>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/dashboard" element={<Dashboard />}/>
    <Route path="/profile" element={<Profile />}/>
    <Route path="/works" element={<Nav/>}/>
  </Routes>
  );
}

export default Router;
