
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ProjectGallery from "./components/ProjectGallery/ProjectGallery";
import Blogs from "./components/Blogs/Blogs";
import BlogDetails from "./components/Blogs/BlogDetails";
import Teams from "./components/Teams/Teams";
import Events from "./components/Events/AllEvents/Events";
import SingleEvent from "./components/Events/SingleEvent/SingleEvent";
import TechWeek from "./components/TechWeek/TechWeek";
import {ChakraProvider} from "@chakra-ui/react";
import Membership from "./components/Membership/Membership";
import NBCWave from "./components/NBCWAVE/NBCWave";
import NotFound from './components/404/NotFound';
import DataCampDonates from './components/DatacampDonates/DataCampDonates';
import MemberShipRegistration from './components/Membership/Register';
import AmbassadorReg from './components/Membership/ambassador_reg';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
        <Route path="*" element={<NotFound />} />
            <Route path='' element={<Home/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='project' element={<ProjectGallery/>}/>
            <Route path='blogs' element={<Blogs/>}/>
            <Route path='blogs/:id' element={<BlogDetails/>}/>
            <Route path='team' element={<Teams/>}/>
            <Route path='events' element={<Events/>}/>
            <Route path='event/:id' element={<SingleEvent/>}/>
            <Route path='innovationweek' element={<TechWeek/>}/>
            <Route path='membership' element={<Membership/>}/>
            <Route path='nbcwave' element={<NBCWave/>}/>
            <Route path='datacamp_donates' element={<DataCampDonates/>}/>
            <Route path='reg_membership' element={<MemberShipRegistration/>}/>
            <Route path='reg_Ambassador' element={<AmbassadorReg/>}/>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
