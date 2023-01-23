import { Box } from "@mui/system"

const smallSx = {
    display: { xs: "flex", lg: "none"},
    marginTop: {xs: "50px"},
    marginLeft: {xs: "10px", md: "50px"},
    marginRight: {xs: "0px"},
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",

}

function SmallWave () {
    return (
        <Box sx={smallSx}>
            <img alt="small" width="300px" height="240px"src="/small3.png"/>
        </Box>
    )
}

export default SmallWave