import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ProjectGallery from "./components/ProjectGallery/ProjectGallery";
import Blogs from "./components/Blogs/Blogs";
import BlogDetails from "./components/Blogs/BlogDetails";
import Teams from "./components/Teams/Teams";

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path='home' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='project' element={<ProjectGallery/>}/>
            <Route path='blogs' element={<Blogs/>}/>
            <Route path='blogs/:id' element={<BlogDetails/>}/>
            <Route path='team' element={<Teams/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
