import React from 'react';

import { AnimatorGeneralProvider } from '@arwes/animation';
import { ArwesThemeProvider, StylesBaseline, FrameBox, Text } from '@arwes/core';

import styled from "styled-components";

const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';

const animatorGeneral = { duration: { enter: 2000 } };

const Footer = () => {

const [activate] = React.useState(true);

  return (
    <ArwesThemeProvider>
      <FooterContainer>
        <StylesBaseline styles={{
          body: { fontFamily: FONT_FAMILY_ROOT }
          }}
            palette="main"/>
            
        <AnimatorGeneralProvider animator={animatorGeneral}>
         <FrameBox
            animator={{ activate }}
            palette='main'
            linesWidths={[2, 0, 4, 0]}>
            <Text 
              style={{
                 color: "#A65CE5",
                  top: "1rem", 
                  left: "1rem", 
                  position: "relative"}}> 

              &copy;{
              new Date().getFullYear()
            } 
            All rights reserved. Louis Wackenier
            </Text>
          
          <div style={{ width: 1892, height: 20 }}/>
        </FrameBox>
       </AnimatorGeneralProvider>
      </FooterContainer>
    </ArwesThemeProvider>  
  )
}

export default Footer

//FOOTER CONTAINER 
const FooterContainer = styled.footer`
  background: #344;
  background: #;
  height: 4rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;
