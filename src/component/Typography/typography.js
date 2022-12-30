import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import TypeIt from "typeit-react";
import * as React from 'react';


const sizeFont = {
  fontSize: { xs: '30px',sm: '48px',   md: "48px", lg: "60px"},
  textAlign: { xs: 'center', sm: "center"},
  marginLeft: { xs: '20px'},
  marginRight: { xs: '20px'},

}

const title = {
  marginTop:{xs:'30px', lg: '10px'}
}
const paddington = {
  fontSize: '14px',
  marginTop: '20px',
  color: '#c7cad1',
  fontWeight:"normal",
  textAlign: {xs: 'left', sm: 'center'},
  paddingLeft: {xs: '40px',sm: "8%", md: "17%", lg: "20%"},
  paddingRight: {xs: '40px',sm:"8%",  md: "17%", lg: "20%"},
  paddingTop: {xs: '20px',sm: "0"},  
  lineHeight:"28px",
  align: 'center',
  letterSpacing:'0.35px',
  tabSize: '4'
}


function TypographyLand() {

 return (
    <div className="Porto" style={{fontFamily: 'Inter', fontWeight: 'normal'}}>
      <Box sx={title}>
        <Box>
    <Typography sx={sizeFont} marginBottom={"5px"} variant="h1" fontFamily="'Inter', sans-serif" fontWeight="800" >
      <TypeIt
          getBeforeInit={(instance) => {
            instance.delete(1, {delay: 100}).pause(200).delete(1, {delay: 100}).pause(200).delete(1, {delay: 100}).pause(200).delete(1, {delay: 100}).pause(200).delete(1, {delay: 100}).pause(200).delete(1, {delay: 100}).pause(200).delete(1, {delay: 100}).pause(200).type('<strong class="check">Nafhan</strong>').go();
        
            // Remember to return it!
            return instance;
          }}

          options={{speed: 100, }}
      >Hi👋, I'm <span style={{color: '#6366F1'}}>Ghifari</span></TypeIt>
    </Typography>
    

    <Typography sx={sizeFont} variant="h1" fontFamily="'Inter', sans-serif" fontWeight="800" >
      A Backend Developer
    </Typography>
    </Box>
    <Typography variant="h3" fontFamily="'Inter', sans-serif" sx={paddington}>
    Hello! I am an experienced backend developer skilled in developing and managing systems behind the scenes of applications or websites. I have the ability to write efficient, responsible, and easily understandable code for my team. In my portfolio, you can see some of the projects I have worked on. These projects include web application development, system management, and system performance optimization.
    </Typography>

      </Box>

  </div>
 )
}

export default TypographyLand;