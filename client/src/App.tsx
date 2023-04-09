import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Deals from "./pages/Deals/Deals";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Map from "./pages/Map/Map";
import Booking from "./pages/Booking/Booking";

function App() {

  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/deals" element={<Deals/>}/>
        <Route path="/map" element={<Map/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="deals/:id" element={<Booking/>}/>
      </Routes>
    </div>
  )
}

export default App
