import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinkIcon from '@mui/icons-material/Link';
import Box from '@mui/material/Box';

const cardSx = {
    maxWidth: 345,
    display:'inline-block',
    margin: '20px',
    border: '5px solid',
    borderColor: '#6366F1',
    borderRadius: '10px',
}

export default function MediaCard(props) {
  return (
    <Box data-aos-duration="1000" data-aos="fade-up" sx={cardSx}>
    <Card sx={''}>
    
      <CardMedia
        sx={{ height: 140 }}
        image={props.img}
      />
      <CardContent>
        <Typography fontFamily="Poppins" gutterBottom variant="h5" component="div">
         {props.name}
        </Typography>
        <Typography fontFamily="Inter" variant="body2" color="text.secondary">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><img alt="github" height="40px" width="40px" src="/github.png"/></Button>
        <Button size="small"><LinkIcon/></Button>
      </CardActions>
    </Card>
    </Box>
  );
}