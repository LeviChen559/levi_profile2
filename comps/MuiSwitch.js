import  React,{useState} from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/styles";

const IOSSwitch = styled((props,switchState) => (
  

    <Switch focusVisibleClassName={switchState} disableRipple {...props} 
    />
  ))(({ theme }) => ({
    width: 42,
    height: 24,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#f2c3bb',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 20,
      height: 20,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

 
  
  

  const useStyles = makeStyles(() => ({
    formControlLabel: { fontFamily:"Baumans",fontWeight:"600",color:"#e5e5e5", fontSize: "1.25rem", "& label": { fontSize: "0.6rem" } }
  }));
  


  export default function MuiSwitch({
    onClick=()=>{},
    check,
    label="Light Mode",
    switchState
  }) {
 
    const classes = useStyles();

    
    return (
      <FormGroup>
        <FormControlLabel 
          control={<IOSSwitch sx={{ m: 1 }} check={check} onClick={onClick} switchState={switchState}/>}
          label= {<Typography className={classes.formControlLabel}>{label}</Typography>}
           
        />
        
      </FormGroup>
    );
  }