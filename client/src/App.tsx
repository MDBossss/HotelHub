import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Deals from "./pages/Deals/Deals";

function App() {

  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/deals" element={<Deals/>}/>
      </Routes>
    </div>
  )
}

export default App
