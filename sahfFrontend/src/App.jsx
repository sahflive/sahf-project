import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './components/Home/Home';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Pagenotfound from './components/Home/Pagenotfound';
import Dreamoflife from './components/Education/Dreamoflife';
import Ourgiftwishlist from './components/WayToDonate/Ourgiftwishlist';
import Internship from './components/GetInvolved/Career/Internship/Internship';
import NewAdmission from './components/GetInvolved/Career/NewAdmission/NewAdmission';
import Feedback from './components/GetInvolved/Career/Feedback/Feedback';
import Donate from './components/Donate/Donate';
import Notice from './components/Notice/Notice';
import ContactUs from './components/More/contact_us/ContactUs';
import UnfortunateLife from './components/More/unfortunate_life/UnfortunateLife';
import New_Enrollment from './components/Education/New_Enrollment';
import Health_Care from './components/Healthcare/Health_Care';
import AddChild from './components/Education/AddChild';
import Sponsor_A_Child from './components/Healthcare/Sponsor_A_Child';
import Slider from './components/Healthcare/Slider';
import Donate_To_A_Cause from './components/WayToDonate/Donate_to_a_Cause/Donate_To_A_Cause';
import Donate_for_development from './components/WayToDonate/Donate_for_development/Donate_for_development';
import Other_way_to_give from './components/WayToDonate/Other_ways_to_give/Other_way_to_give';
import Write_your_child from './components/GetInvolved/For_sponsor/Write_your_child';
import Give_to_your_child from './components/GetInvolved/For_sponsor/Give_to_your_child';
import Trip_And_Visit from './components/GetInvolved/For_sponsor/Trip_And_Visit';
import Crisis_Updates_And_Alert from './components/GetInvolved/For_sponsor/Crisis_Updates_And_Alert';
import Ways_to_get_involved from './components/GetInvolved/Ways_to_get_involved/Ways_to_get_involved';
import Join_us from './components/GetInvolved/Join_us/Join_us';
import Partner_with_us from './components/GetInvolved/Partner_with_us/Partner_with_us';
import Sponsorship from './components/GetInvolved/Sponsorship/Sponsorship';
import GallerySection from './components/Event_and_stories/Gallery_section';
import Who_we_are from './components/About_us/Who_we_are/Who_we_are';
import FAQs from './components/About_us/FAQs/FAQs';
import Laws_and_policy from './components/About_us/Law_and_policy/Laws_and_policy';
import Account from './components/About_us/Accountability_report/Account';
import Contact_us from './components/About_us/Contact_us/Contact_us';
import Upcoming_events from './components/Event_and_stories/Upcoming_events';
import General_awarness from './components/Event_and_stories/General_awarness';

function App() {``

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/education/new-enrollment' element={<New_Enrollment />} />
          <Route path='/education/dream-of-life' element={<Dreamoflife />} />
          <Route path='/education/add-child' element={<AddChild />} />
          <Route path='/way-to-donate/our-gift-wishlist' element={<Ourgiftwishlist />} />
          <Route path='/health-care' element={<Health_Care />} />
          <Route path='/healthcare/sponsor-a-child' element={<Sponsor_A_Child />} />
          <Route path='/healthcare/give-a-gift' element={<Slider />} />
          <Route path='/way-to-donate/donate-to-a-cause' element={<Donate_To_A_Cause />} />
          <Route path='/way-to-donate/donate-for-development' element={<Donate_for_development />} />
          <Route path='/way-to-donate/other-way-to-give' element={<Other_way_to_give />} />
          <Route path='/get-involved/for-sponsor/write-your-child' element={<Write_your_child />} />
          <Route path='/get-involved/for-sponsor/give-to-your-child' element={<Give_to_your_child />} />
          <Route path='/get-involved/for-sponsor/trip-and-visit' element={<Trip_And_Visit />} />
          <Route path='/get-involved/for-sponsor/crisis-update-and-delete' element={<Crisis_Updates_And_Alert />} />
          <Route path='/get-involved/career/internship' element={<Internship />} />
          <Route path='/get-involved/career/new-admission' element={<NewAdmission />} />
          <Route path='/get-involved/career/feedback' element={<Feedback />} />
          <Route path='/get-involved/way-to-get-involved' element={<Ways_to_get_involved />} />
          <Route path='/get-involved/join-us-volunteer' element={<Join_us />} />
          <Route path='/get-involved/partner-with-us' element={<Partner_with_us />} />
          <Route path='/get-involved/sponsorship' element={<Sponsorship />} />
          <Route path='/event-and-stories/general-awareness' element={<General_awarness />} />
          <Route path='/event-and-stories/upcoming-events' element={<Upcoming_events />} />
          <Route path='/event-and-stories/gallery' element={<GallerySection />} />
          <Route path='/about-us/who-we-are' element={<Who_we_are />} />
          <Route path='/about-us/faqs' element={<FAQs />} />
          <Route path='/about-us/law-and-policy' element={<Laws_and_policy />} />
          <Route path='/about-us/accountability-report' element={<Account />} />
          <Route path='/about-us/contact-us' element={<Contact_us />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/notice' element={<Notice />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/unfortunate-life' element={<UnfortunateLife />} />
          <Route path='*' element={<Pagenotfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
