import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './components/Home/Home';
import Education from './components/Education/New_Enrollment';
import Healthcare from './components/Healthcare/Health_Care';
import Sponsor_A_Child from './components/Healthcare/Sponsor_A_Child';
import { Navigate, Route, Routes } from "react-router-dom"
import { Link } from 'react-router-dom';

function App() {

  return (
    <>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Education" element={<Education />} />
      <Route path="/Healthcare" element={<Healthcare />} />
      <Route path="/Sponsor_A_Child" element={<Sponsor_A_Child />} />
       </Routes>
       
    </>
  )
}

export default App
