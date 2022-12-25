import './App.css';
import DrawerAppBar from './component/AppBar/appBar';
import Project from './component/Project/project';
// import Navbar from './component/Navbar/navbar';
import TypographyLand from './component/Typography/typography';
// import Socmed from './socialMedia/socmed';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <DrawerAppBar sx={{display: {sm: 'none'}}}/>
      <TypographyLand />
      {/* <Socmed/> */}
      <Project/>
    </div>
  );
}

export default App;
