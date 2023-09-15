// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import MyPortfolio from "./components/MyPortfolio/MyPortfolio";
import Navbar from "./components/Navbar/Navbar";
import "./components/MyPortfolio/myportfolio.scss";
import "./components/Home/Home.scss";
import "./components/About/About.scss";
import "./components/Navbar/Navbar.scss";
import "./index.scss";
import "./globalColors.scss";

function App() {
  // const [scrolled, setScrolled] = useState(false);

  // const handleScroll = () => {
  //   const offset = window.scrollY
  //   console.log("OFFSET VALUE", offset)
  //   if (offset > 300) {
  //     setScrolled(true);

  //   } else {
  //     setScrolled(false);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll)
  // })


  return (
    <div className="myApp" >
      <Navbar />
      <div className="sections">
        <Home />
        <About />
        <MyPortfolio />
      </div>


      {/* <BrowserRouter >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/myportfolio" element={<MyPortfolio />} />
        </Routes>
      </BrowserRouter>
    */}
    </div>
  );
}

export default App;
