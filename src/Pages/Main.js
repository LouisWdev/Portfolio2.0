import React from 'react';

import { Link } from 'react-router-dom';

import { ArwesThemeProvider, Text, Button, FrameLines } from '@arwes/core';

import VaporWave from "../VaporwaveBG.png"


//CONST SOUNDS
const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';


//CONST STYLING
const duration = { enter: 10000 };

 function main() {

// CONST ARWES ANIMATION
const animatorGeneral = { duration: { enter: 2000 } };

  return ( 
      
      <div>
        <center>
        
           <ArwesThemeProvider styles={{
              body: { fontFamily: FONT_FAMILY_ROOT }
             }}>  
      
            <img 
              src={VaporWave}
              height={880} width={1950}
              style={{                                      
                  top: "6rem", 
                  left: "0rem",
                  position: "center",
                  position:"absolute"
                  }} 
                 />    
        <Text 
          as="h1" 
          animator={{ duration }} 
            style={{                                      
                  color: "#A65CE5",
                  top: "10rem", 
                  right: "1rem",
                  position: "relative"
                 }}> 
          Welcome to my portfolio
        </Text>
        <br/>
        
        <Text 
          as="h4"
          animator={{ duration }} 
            style={{
                 color: "#A65CE5",
                  top: "10rem", 
                  left: "3rem",
                  position: "relative"}}> 
             Made by louis Wackenier
          </Text> 

       <Link to="AboutMe">
         <Button
            FrameComponent={FrameLines}
             style={{
                 color: "#success",
                  top: "12rem", 
                  right: "11rem",
                  position: "relative"
                }}
         >
            About me 
         </Button>
        </Link>

          </ArwesThemeProvider> 
        
      </center>
      
    </div>
  );
};

export default main