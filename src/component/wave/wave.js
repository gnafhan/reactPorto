import { Box } from "@mui/material";

const waveSx = {
    paddingRight : {xl:"200px"},
    marginTop : "100px",
    display: { xs: "none", lg: "flex"},
}



function Wave () {
    return (
        <Box>
            <div data-aos="fade-left" data-aos-duration="1000">
            <Box sx={waveSx}>
                <img alt="wave"  width="350px" height="350px"  src="/wave.png"/>
            </Box>

            </div>

        </Box>
    )
}


export default Wave;