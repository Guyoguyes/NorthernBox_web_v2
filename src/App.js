import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar';
import Participation from "./components/Partcipation/Participation";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/participation" element={<Participation/>}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
