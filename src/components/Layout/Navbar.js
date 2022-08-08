import React from 'react';
import styled from "styled-components";

import { Link } from 'react-router-dom';
import { AnimatorGeneralProvider } from '@arwes/animation';
import { BleepsProvider } from '@arwes/sounds';
import { ArwesThemeProvider, StylesBaseline, Text, Button, FrameBox, FrameLines } from '@arwes/core';

import VaporwaveColors from './PaletteVaporwave';

// CONST SOUNDS
const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
const SOUND_OBJECT_URL = '/assets/sounds/object.mp3';
const SOUND_ASSEMBLE_URL = '/assets/sounds/assemble.mp3';
const SOUND_TYPE_URL = '/assets/sounds/type.mp3';
const SOUND_CLICK_URL = '/assets/sounds/click.mp3';

//CONST STYLING
const globalStyles = { body: { fontFamily: FONT_FAMILY_ROOT } };
const animatorGeneral = { duration: { enter: 500} };
const audioSettings = { common: { volume: 0.25 } };
const playersSettings = {
  object: { src: [SOUND_OBJECT_URL] },
  assemble: { src: [SOUND_ASSEMBLE_URL], loop: true },
  type: { src: [SOUND_TYPE_URL], loop: true },
  click: { src: [SOUND_CLICK_URL] }
};
const bleepsSettings = {
  object: { player: 'object' },
  assemble: { player: 'assemble' },
  type: { player: 'type' },
  click: { player: 'click' }
};

 function Navbar() {

  const [activate] = React.useState(true);

  return (
    
    <ArwesThemeProvider> 
      <AnimatorGeneralProvider animator={animatorGeneral}>
       <FrameBox
        animator={{ activate }}
        palette='VaporWavePurple'
        linesWidths={[2, 0, 4, 0]}
        
        hover>
     <StylesBaseline 
         styles={{
          button: { margin: '0 20px 20px 0' }
         }}
         
        
         />
     <BleepsProvider
        audioSettings={audioSettings}
        playersSettings={playersSettings}
        bleepsSettings={bleepsSettings}>

      <NavbarContainer> 
  
          
            
          {/*Button One*/}    
       <Link to="/">
          <Button 
            onClick={event => console.log(event)}
            palette='main'
            FrameComponent={FrameLines}
             style={{
               top: "1rem"
             }}
            >
            <Text>Home</Text>
          </Button> 
       </Link>
      

       {/*Button Two*/}
        <Link to="/Portfolio">   
          <Button
            onClick={event => console.log(event)}
            palette='main'
            FrameComponent={FrameLines}
            style={{
              top: "1rem"
            }}>
            <Text>Portfolio</Text>
          </Button>
        </Link>
   
        {/*Button Three*/}
     
        <Link to="/Contact">
          <Button
            onClick={event => console.log(event)}
            palette='main'
            FrameComponent={FrameLines}
            style={{                                      
              left: "95rem",    
              top: "1rem"   
             }}
            >
            <Text>
              Contact me
            </Text>
          </Button>
       </Link>
    
            
          {/*Button Four*/}
  
          <Link to="/Projects">  
           <Button
            onClick={event => console.log(event)}
            palette='main'
            FrameComponent={FrameLines}
            style={{                                      
              right: "8rem",    
              top: "1rem"   
             }} 
            >
            <Text>Projects</Text>
          </Button>
         </Link>
    
        <center>
         <div
         style={{                                      
          top: "10rem",       
         }}>
        <FrameBox
            linesWidths={[2, 1, 1, 2]}
            animator={{ activate }}
            palette='main'
            origins={['left', 'top', 'right', 'bottom']}
            style={{                                      
              bottom: "3rem",      
              width: 300,
              height: 60
             }}>
           <Text
            as="h1"
           >
             Louis Portfolio
           </Text>
        </FrameBox>
          </div>    
        </center> 
      
        </NavbarContainer>

        </BleepsProvider> 
        <div style={{ width: 1892, height: 20 }}/>            
      </FrameBox>
     </AnimatorGeneralProvider>
    </ArwesThemeProvider>

  );
};

export default Navbar

const NavbarContainer = styled.div `
background: #;
height: 3.5rem;
left: 0;
bottom: 0;
width: 100%;
`;