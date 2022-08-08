import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Button, Grid, Box } from "@material-ui/core";
import { ArwesThemeProvider, Text, FrameHexagon } from '@arwes/core';

const useStyles = makeStyles((theme) => ({
  form: {
    top:  "40%",
    left: "50%",
    transform: "translate(-50%, -40%)",
    position: "absolute"
    },
    button: {
      marginTop: "1rem",
      color: "#39ff14",
      borderColor: "#39ff14",
    },
}));

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#39ff14",
        },
        "& label": {
           color: "#39ff14"
        },
        "& .MuiOutlinedInput-root": {
          "& fields": {
              borderColor: "#39ff14",
          },
          "&:hover fieldset": {
              borderColor: "#39ff14",
          },
          "&.Mui-focused fieldset": {
              borderColor: "#39ff14",
          },
        },
    },
})(TextField);


function Contact() {

  const animatorGeneral = { duration: { enter: 5000 } };
  const classes = useStyles(); 

  return (
    <div>
      <center>
        <Text variant="h5" 
         style={{
            textAlign: "center",
            top: "7rem", 
            }}>
      On this page you can contact me
    </Text>
  </center>
      
      <Box components="div" style={{height: "50vh"}}>
         <Grid container justify="center">
           <Box component="form" className={classes.form} palette="#39ff14">
             
              <ArwesThemeProvider>
       <FrameHexagon
          animator={{animatorGeneral}}
          palette='success'
          lineWidth={2}
          squareSize={35}
          hover>

              <Text 
                 variant="h5" 
                 style={{color: "#39ff14", 
                 textAlign: "center", 
                 textTransform: "uppercase"}}
                 >  contact me.
              <br />

              <InputField 
                fullWidth={true} 
                label="Name" 
                variant="outlined" 
                inputProps= {{style: { color: "#39ff14" } }}
                margin="dense"
                size="medium"/>
               <br/>

              <InputField 
                fullWidth={true} 
                label="Email" 
                variant="outlined" 
                inputProps= {{style: { color: "#39ff14" } }}
                margin="dense"
                size="medium"/>
             <br/>

              <InputField  
                fullWidth={true}
                label="Company name" 
                variant="outlined"
                inputProps= {{style: { color: "#39ff14" } }}
                margin="dense"
                size="medium"/>
              <br/>
          
              <Button 
                 className={classes.button} 
                 variant="outlined" 
                 fullWidth={true}>
                     contact me
                </Button>  
               </Text>    
              </FrameHexagon>  
            </ArwesThemeProvider>      
          </Box>
         </Grid>
        </Box>
    </div>
  )
}

export default Contact