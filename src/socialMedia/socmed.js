import { Button, Box, Avatar } from '@mui/material';

const iconSx= {
    backgroundColor: '#6366F1',
    width: '30px',
    height: '30px',
}

function Socmed () {
    return(
        <Box>
            <Button sx={''}>
                <Avatar sx={iconSx} src="/instagram.png"/>
            </Button>
        </Box>
    )
}

export default Socmed
