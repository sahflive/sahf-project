import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './components/Home/Home';
import Education from './components/Education/New_Enrollment';
import { Navigate, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Education" element={<Education />} />
      
     </Routes>
       
    </>
  )
}

export default App
