import React from 'react'
import { ArwesThemeProvider, Blockquote, Text, pallete } from '@arwes/core';

function Projects() {
  return (
    <ArwesThemeProvider>
     <br/>
      <center>
      <br/>
      <Text 
        style={{              
          position: "relative",
         }}>
        This page displays all live projects
      </Text>
     </center>

         {/*Project 1*/}
        <br/>
          <Blockquote>
             <Text>
                      A nebula is an interstellar cloud of dust, hydrogen,
                      helium and other ionized gases. Originally, the term
                      was used to describe any diffused astronomical object,
                      including galaxies beyond the Milky Way.    
             </Text>
          </Blockquote>
         <br/>

         {/*Project 2*/}
        <br/>
          <Blockquote>
             <Text>
                      A nebula is an interstellar cloud of dust, hydrogen,
                      helium and other ionized gases. Originally, the term
                      was used to describe any diffused astronomical object,
                      including galaxies beyond the Milky Way.    
             </Text>
          </Blockquote>
         <br/>
         
         {/*Project 3*/}
        <br/>
          <Blockquote>
             <Text>
                      A nebula is an interstellar cloud of dust, hydrogen,
                      helium and other ionized gases. Originally, the term
                      was used to describe any diffused astronomical object,
                      including galaxies beyond the Milky Way.    
             </Text>
          </Blockquote>
        <br/>
      </ArwesThemeProvider> 
  )
}

export default Projects