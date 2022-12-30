/* eslint-disable jsx-a11y/alt-text */
import { Button, Box, Avatar, Card, Fab } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const iconSx= {
    width: '24px',
    height: '24px',
    fill:'#6366F1', 
    padding: '10px',
    paddingTop: '15px',
    
}

function Socmed () {
    return(
        <Box marginBottom={10} marginTop={5} bgcolor="#18181B">
            <Box >
                <Fab style={{ backgroundColor: '#6366F1', margin: "10px"}}>
                    <img src="/instagram.svg"></img>
                </Fab>
                <Fab style={{ backgroundColor: '#6366F1', margin: "10px"}}>
                    <img src="/github.svg"></img>
                </Fab>
                <Fab style={{ backgroundColor: '#6366F1', margin: "10px"}}>
                    <img src="/linkedin.svg"></img>
                </Fab>
                <Fab style={{ backgroundColor: '#6366F1', margin: "10px"}}>
                    <img src="/gmail.svg"></img>
                </Fab>
            </Box>
        </Box>
    )
}

export default Socmed
