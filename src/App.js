import './App.css';
import DrawerAppBar from './component/AppBar/appBar';
// import Navbar from './component/Navbar/navbar';
import TypographyLand from './component/Typography/typography';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <DrawerAppBar sx={{display: {sm: 'none'}}}/>
      <TypographyLand />
    </div>
  );
}

export default App;
