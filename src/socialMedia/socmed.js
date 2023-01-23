/* eslint-disable jsx-a11y/alt-text */
import {  Box,  Fab } from '@mui/material';



function Socmed () {
    return(
        <Box marginBottom={10} marginTop={5} bgcolor="#18181B">
            <Box >
                <div data-aos="fade-up" data-aos-duration="1000">

                <Fab target="_blank" href='https://instagram.com/ghifarinafhan_' style={{ backgroundColor: '#6366F1', margin: "10px"}}>
                    <img src="/instagram.svg"></img>
                </Fab>
                <Fab target="_blank" href='https://github.com/gnafhan' style={{ backgroundColor: '#6366F1', margin: "10px"}}>
                    <img src="/github.svg"></img>
                </Fab>
                <Fab target="_blank" href='https://www.linkedin.com/in/gnafhan' style={{ backgroundColor: '#6366F1', margin: "10px"}}>
                    <img src="/linkedin.svg"></img>
                </Fab>
                <Fab target="_blank" href='mailto:nafhanghifari@gmail.com' style={{ backgroundColor: '#6366F1', margin: "10px"}}>
                    <img src="/gmail.svg"></img>
                </Fab>
                </div>
            </Box>
        </Box>
    )
}

export default Socmed
