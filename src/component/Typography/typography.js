import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import TypeIt from "typeit-react";
import * as React from 'react';
import SmallWave from '../SmallWave/smallWave';
import AOS from 'aos'


const sizeFont = {
  fontSize: { xs: '40px',sm: '48px',   md: "48px", lg: "60px"},
  textAlign: { xs: 'left', sm: "center"},
  marginLeft: { xs: '40px', sm: "20px"},
  marginRight: { xs: '30px', sm: '20px'},

}

const miniSx = {
  fontSize: { xs: '40px',sm: '48px',   md: "48px", lg: "60px"}
}

const title = {
  marginTop:{xs:'30px', lg: '10px'}
}
const paddington = {
  fontSize: '14px',
  marginTop: '20px',
  color: '#c7cad1',
  fontWeight:"normal",
  textAlign: {xs: 'justify', sm: 'center'},
  paddingLeft: {xs: '40px',sm: "8%", md: "17%", lg: "20%"},
  paddingRight: {xs: '40px',sm:"8%",  md: "17%", lg: "20%"},
  paddingTop: {xs: '20px',sm: "0"},  
  lineHeight:"28px",
  align: 'center',
  letterSpacing:'0.35px',
  tabSize: '4'
}


function TypographyLand() {

  AOS.init()
 return (
    <div  className="Porto" style={{fontFamily: 'Inter', fontWeight: 'normal'}}>
      <Box sx={title}>
        <Box>
    <Typography sx={sizeFont} marginBottom={"5px"} variant="h1" fontFamily="'Inter', sans-serif" fontWeight="800" >
      <TypeIt
          getBeforeInit={(instance) => {
            instance.delete(1, {delay: 100}).pause(200).delete(1, {delay: 100}).pause(200).delete(1, {delay: 100}).pause(200).delete(1, {delay: 100}).pause(200).delete(1, {delay: 100}).pause(200).delete(1, {delay: 100}).pause(200).delete(1, {delay: 100}).pause(200).type('<strong class="check">Nafhan</strong>').go();
            return instance;
          }}

          options={{speed: 100, }}
      >Hi👋, I'm <span style={{color: '#6366F1'}}>Ghifari</span></TypeIt>
    </Typography>
    

    <Typography sx={sizeFont} variant="h1" fontFamily="'Inter', sans-serif" fontWeight="800" >
      
    <Box sx={miniSx}>A Backend Developer </Box>  
    </Typography>

    </Box>
    <Box>
      <div data-aos="fade-up" data-aos-duration="1000">

        <SmallWave />
      </div>


    </Box>
    <div data-aos="fade-up" data-aos-duration="1000">
      <Typography variant="h3" fontFamily="'Inter', sans-serif" sx={paddington}>
      Hello! I am an experienced backend developer skilled in developing and managing systems behind the scenes of applications or websites. I have the ability to write efficient, responsible, and easily understandable code for my team. In my portfolio, you can see some of the projects I have worked on. These projects include web application development, system management, and system performance optimization.
      </Typography>
    </div>

      </Box>

  </div>
 )
}

export default TypographyLand;