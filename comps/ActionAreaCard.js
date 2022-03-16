import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { flexbox } from '@mui/system';
import { useRouter } from 'next/router'
import Link from 'next/link';
export default function ActionAreaCard({
  title="BuzyBee",
  src="covid.png",
  time="2022",
  routeTo="/",
  codeTool,
  maxHeight="700",
  height="275"
}) {
  const router = useRouter()

  return (
    <Card sx={{ maxWidth: 700,borderRadius: 5, gap: 2}} >
      
      <CardActionArea   onClick={()=>window.open(routeTo)} >
        <CardMedia 
          component="img"
          maxHeight={maxHeight}
          height={height}
          image={src}
          alt={title}
       
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {time}
           </Typography>
          <Typography variant="body2" color="text.secondary" mt={2}>
           {codeTool}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions style={{display:"flex", justifyContent:'flex-end'}}>
        <Button size="small" color="primary">
          Enter
        </Button>
      </CardActions> */}
    </Card>
  );
}