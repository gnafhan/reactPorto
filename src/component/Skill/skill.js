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

function Skill () {
    return (
        <Box id="Skills" style={{backgroundColour: '#FFFF'}}>
        <div data-aos="">
            <Box display={'inline-block'}>
            </Box>
        <Box backgroundColor="#18181B" marginTop={5}>
            <Box>
                <div data-aos="fade-up" data-aos-duration="1000">
                <Typography sx={tySx} color="#6366F1" marginTop="5px">
                    SKILLS   & CERTIFICATES
                </Typography>    

                </div>
            </Box>    
            <Box>
                <Box sx={boxSx}>
                    <MediacCard data-aos="fade-up" img="/serti2.jpg" name="Javascript Dasar" desc="Pemograman website menggunakan javascript dasar" link="https://www.dicoding.com/certificates/JLX1GWV5JZ72" width="300px" height="300px"/>
                    <MediacCard img="/serti1.jpg" name="BackEnd-App" desc="Membuat backend website & CRUD API menggunakan Node Js" link="https://www.dicoding.com/certificates/1RXYM14WKXVM" width="300px" height="300px"/>
                    <MediacCard img="/serti3.jpg" name="Javascript Dasar" desc="Membuat website menggunakan javascript dasar dengan Codepolitan" link="https://codepolitan.com/c/8SKXZ9B/" width="300px" height="300px"/>
                </Box>
            </Box>
        </Box>
        </div>
        </Box>

    )
}

export default Skill