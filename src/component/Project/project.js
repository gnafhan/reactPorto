import { Box, Typography } from "@mui/material"
import MediacCard from "./card"

const tySx = {
    fontFamily: "'Inter', sans-serif",
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: '10px'
}

const boxSx = {
    alignItems: 'center',
    justifyContent: 'center',
}

function Project () {
    return (
        <Box backgroundColor="#18181B">
            <Box>
                <Typography sx={tySx} color="#6366F1" marginTop="-5px">
                    PROJECTS
                </Typography>    
            </Box>    
            <Box>
                <Box sx={boxSx}>
                    <MediacCard img="/global.png" name="Global Link" desc="Website yang dapat menyalin (copy) dan mempaste (paste) teks antar device    " width="300px" height="300px"/>
                    <MediacCard img="/store.png" name="BackEnd Store" desc="Halaman admin sebuah store dan membuat CRUD API" width="300px" height="300px"/>
                    <MediacCard img="/old.png" name="Perjuangan45" desc="Website sederhana mengingat perjuangan pahlawan" width="300px" height="300px"/>
                </Box>
            </Box>
        </Box>

    )
}

export default Project