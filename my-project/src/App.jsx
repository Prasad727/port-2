import React from "react";
import Hero from "./components/Hero";
import Navbar1 from "./components/Navbar1";
import Pagecomponents from "./components/Pagecomponents";
//import Navigation from './Navigation/Navigation';
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar1 />
      <Hero />
      <Pagecomponents />
    </BrowserRouter>
  );
};

export default App;
/*
<BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/education' element={<Education />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/code' element={<Code />} />
        </Routes>
      </BrowserRouter>
    
*/
