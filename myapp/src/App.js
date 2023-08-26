import React from 'react';
import {Routes,Route,Router} from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Client from './Components/Client';
import Slider from './Components/Slider';
import Footer from './Components/Footer';
import Service from "./Components/Service";
import Team from './Components/Team';
import Contact from './Components/Contact';
import Info from './Components/Info';
import Allone from './Components/Allone';


function App() {
  return (
    <div>
   
    <Header />
    <Routes>
    
             
        
              <Route path="/" element={<Allone />} />
              <Route path="/about" element={<About />} />
         
          
              <Route path='/team'element ={<Team />} />
         
          
              <Route path='/contact'element={<Contact />} />
         
   
             <Route path='/client' element={<Client />} />
             
             <Route path='/service' element={<Service />} />

            </Routes>

    
            <Info />
            <Footer />

    </div>
    
  );
}

export default App;
