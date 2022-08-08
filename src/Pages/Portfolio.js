import React from 'react'
import { ArwesThemeProvider, Blockquote, Text, Card, Button } from '@arwes/core';

function Portfolio() {
 
  return (
       <div> 
         <br/>
          <ArwesThemeProvider> 
           <center>
            <Text 
              style={{
                   textAlign: "relative",
                   position: "relative",
              }}>
                This page has all of my projects
              </Text>
             </center> 
            <br/>
            {/* CARD 1*/}
             <br/>
                 <Card  
                    style={{              
                      maxWidth: 400,
                      position: "relative",
                      left: "48rem",
                     }}>
                   <Text>
                      A nebula is an interstellar cloud of dust, hydrogen,
                      helium and other ionized gases. Originally, the term
                      was used to describe any diffused astronomical object,
                      including galaxies beyond the Milky Way.              
                   </Text>
                   <Button>
                       <Text>Learn More</Text>
                   </Button>  
                 </Card>
              <br/>
              {/* CARD 2*/}
              <br />
              <Card 
                  style={{            
                      maxWidth: 400,
                      position: "relative",
                      left: "48rem"
                   }}>
                   <Text>
                      A nebula is an interstellar cloud of dust, hydrogen,
                      helium and other ionized gases. Originally, the term
                      was used to describe any diffused astronomical object,
                      including galaxies beyond the Milky Way.              
                   </Text>
                     <Button>
                        <Text>Learn More</Text>
                    </Button>  
                 </Card>
              <br/>
              {/* CARD 3*/}
              <br/>
               <Card 
                  style={{              
                      maxWidth: 400,
                      position: "relative",
                      left: "48rem"
                   }}>

                   <Text>
                      A nebula is an interstellar cloud of dust, hydrogen,
                      helium and other ionized gases. Originally, the term
                      was used to describe any diffused astronomical object,
                      including galaxies beyond the Milky Way.              
                   </Text>
                     <Button>
                     <Text>
                        Learn more
                      </Text>
                    </Button>  
                 </Card>
              <br/>
          </ArwesThemeProvider>
       </div>  
     )  
    ;
   
}

export default Portfolio