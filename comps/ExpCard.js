import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import styled from '@emotion/styled';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);
const Avatarcom =styled.div`
display:flex;
flex-direction:row;
justify-content:flex-end;
margin:0;
// position:absolute;
// z-index:2;


`

export default function ExpCard({
    title="Education",
    schoolname="National Yunlin University of Science and Technology",
    exp="2005 - 2007",src="./skill_icon/YUST.svg",
    degreed="Bachelor’s Degree, Industrial and Product Design"
}) {
  return (
    <Box sx={{ minWidth: 350,  margin: 2}} >
    <Card variant="outlined" sx={{borderRadius: 2}}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body" component="div">
       {schoolname}
      </Typography>
      <Avatarcom >
    <Avatar src={src} sx={{ width: 36, height: 36 }}/>
      </Avatarcom>
      <Typography variant="body2">
       {degreed}
      </Typography>
      <Typography variant="body2">
       {exp}
      </Typography>
    </CardContent>
  </Card>
    </Box>
  );
}