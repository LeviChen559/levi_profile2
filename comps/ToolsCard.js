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

`

export default function ToolsCard({
    title="Development",
    toolname="HTML5",
    exp="2 years",
    src="./skill_icon/html-icon.png",
    src2="./skill_icon/sass.jpeg",
    sx
}) {
  return (
    <Box sx={{ minWidth: 200,margin: 1}} >
    <Card variant="outlined" sx={{borderRadius: 2,height:140}}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h6" component="div">
       {toolname}
      </Typography>
      <Avatarcom >
    <Avatar src={src} sx={{ width: 30, height: 30  }}/>
    <Avatar src={src2} sx={sx}/>
      </Avatarcom>
      <Typography variant="body2">
       {exp}
      </Typography>
    </CardContent>
  </Card>

    </Box>
  );
}