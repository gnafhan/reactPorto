import './App.css';
import DrawerAppBar from './component/AppBar/appBar';
import Project from './component/Project/project';
// import Navbar from './component/Navbar/navbar';
import TypographyLand from './component/Typography/typography';
import Socmed from './socialMedia/socmed';
import Wave from './component/wave/wave';
import { Box } from '@mui/material';


const boxSx = {
  display: { xs: "", lg: "flex"},
  marginTop: { lg: "30px"}
}


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <DrawerAppBar sx={{display: {sm: 'none'}}}/>
      <Box sx={boxSx}>
      <TypographyLand />
      <Wave/>

      </Box>
      <Socmed/>
      <Project/>
    </div>
  );
}

export default App;
