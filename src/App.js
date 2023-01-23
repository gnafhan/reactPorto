import './App.css';
import DrawerAppBar from './component/AppBar/appBar';
import Project from './component/Project/project';
import TypographyLand from './component/Typography/typography';
import Socmed from './socialMedia/socmed';
import Wave from './component/wave/wave';
import { Box } from '@mui/material';
import Skill from './component/Skill/skill';
import Decoration from './component/Decoration/decor';
import ActionAlerts from './component/Alert/alert';

const boxSx = {
  display: { xs: "", lg: "flex"},
  marginTop: { lg: "30px"}
}


function App() {
  return (
    <div className="App">
      <Box style={{position: "sticky"}}>
      <DrawerAppBar  sx={{display: {sm: 'none'}}}/>
      </Box>
      <ActionAlerts/>
      <Box sx={boxSx}>
        <TypographyLand />
      <Wave/>
      </Box>
      <Socmed/>
      <Project/>
      <Skill/>
      <Decoration/>
    </div>
  );
}

export default App;
