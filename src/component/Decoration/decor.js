import { Box } from "@mui/system";

const boxSx = {
    display: 'relative',
    marginTop:"0px",
    marginBottom: "0px",
    marginLeft: "0px",
    marginRight: "0px",
    overflow: "hidden",
    scrollBehavior: "smooth"
}

function Decoration() {
    return(
        <Box id="Contact" sx={boxSx} >
            <img  width='1535px' height='300px' src="/wave.svg" alt="" ></img>
        </Box>
    )
}


export default Decoration