import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./components/Home/Home";
import Education from "./components/Education/New_Enrollment";
import Healthcare from "./components/Healthcare/Health_Care";
import Sponsor_A_Child from "./components/Healthcare/Sponsor_A_Child";
import Donate_To_A_Cause from "./components/Ways_to_donate/Donate_to_a_Cause/Donate_To_A_Cause";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Ways_to_get_involved from "./components/Get_Involved/Ways_to_get_involved/Ways_to_get_involved";
import SahfExperience from "./components/Get_Involved/Ways_to_get_involved/the_sahf_experience/sahf_experience";
import WriteYourChild from "./components/Get_Involved/Ways_to_get_involved/write_your_child/write_your_child";
import Partner_with_us from "./components/Get_Involved/Partner_with_us/Partner_with_us";
import Join_us from "./components/Get_Involved/Join_us/Join_us";
import Sponsorship from "./components/Get_Involved/Sponsorship/Sponsorship";
import Who_we_are from "./components/About_us/Who_we_are/Who_we_are";
import FAQs from "./components/About_us/FAQs/FAQs";
import Laws_and_policy from "./components/About_us/Laws_and_policy/Laws_and_policy";
import Accountability_Report from "./components/About_us/Accountability_report/Account";
import Contact_us from "./components/About_us/Contact_us/Contact_us";
import New_Enrollment from "./components/Education/New_Enrollment";
import Health_Care from "./components/Healthcare/Health_Care";
import Donate from "./components/Donate/Donate";
import Notice from "./components/Notice/Notice";
import Unfortunate_life from "./components/More/Unfortunate_life/Unfortunate_life";
import Gallery_section from "./components/Event_and_stories/Gallery_section";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Education/New_Enrollment" element={<New_Enrollment />} />
        <Route path="/Healthcare/Health_Care" element={<Health_Care />} />
        <Route path="/Sponsor_A_Child" element={<Sponsor_A_Child />} />
        <Route path="/Donate_To_A_Cause" element={<Donate_To_A_Cause />} />
        <Route path="/Join_us" element={<Join_us />} />
        <Route path="/Partner_with_us" element={<Partner_with_us />} />
        <Route path="/Ways_to_donate/Donate_to_Cause" element={<Donate_To_A_Cause />} />
        <Route path="/Sponsorship" element={<Sponsorship />} />
        <Route path="/Ways_to_get_involved" element={<Ways_to_get_involved />} />
        <Route path="/sahf_experience" element={<SahfExperience />} />
        <Route path="/write_your_child" element={<WriteYourChild/>} />
        <Route path="About_us/Who_we_are" element={<Who_we_are/>} />
        <Route path="About_us/FAQs" element={<FAQs/>} />
        <Route path="About_us/Laws_&_policy" element={<Laws_and_policy/>} />
        <Route path="About_us/Accountability_Report" element={<Accountability_Report/>} />
        <Route path="About_us/Contact_us" element={<Contact_us/>} />
        <Route path="/Donate" element={<Donate/>} />
        <Route path="/Notice" element={<Notice/>} />
        <Route path="/More/Unfortunate_life" element={<Unfortunate_life/>} />
        <Route path="/Event_and_stories/Gallery_section" element={<Gallery_section/>} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;
