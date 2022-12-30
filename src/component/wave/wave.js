import { Box } from "@mui/material";

const waveSx = {
    paddingRight : "200px",
    marginTop : "100px",
    display: { xs: "none", lg: "flex"},
}

function Wave () {
    return (
        <Box sx={waveSx}>
            <img  width="350px" height="350px"  src="/wave.png"/>
        </Box>
    )
}


export default Wave;