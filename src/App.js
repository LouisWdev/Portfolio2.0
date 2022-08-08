import React from "react";
import { Routes, Route } from 'react-router-dom';
import { emotion, theme } from '@arwes/design';

// IMPORT PAGES
import Main from './Pages/Main'
import Contact from './Pages/Contact'
import Portfolio from './Pages/Portfolio'
import Projects from './Pages/Projects'
import AboutMe from "./Pages/AboutMe";

// IMPORT LAYOUT
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'

function App () {

  return <div>
    <Navbar />
      <Routes>
           <Route exact path="/" element={<Main/>}/>
           <Route path="/Contact" element={<Contact/>}/>
           <Route path="/Portfolio" element={<Portfolio />}/>
           <Route path="/Projects"  element={<Projects/>}/>
           <Route path="/AboutMe"  element={<AboutMe/>}/>
      </Routes>  
    <Footer />
   </div>;

<emotion.ThemeProvider theme={theme}>
<emotion.Global styles={{
  'html, body': {
    fontFamily: 'monospace',
    backgroundColor: theme.success.neutral.elevate(0)
     }
   }} />
</emotion.ThemeProvider>

};                   

export default App