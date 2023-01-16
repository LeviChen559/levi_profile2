import React from "react";
import styled from "styled-components";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

const NavItemCons = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
// width:5rem;
margin-right:2.5rem;
&:hover:before{
backface-visibility: hidden;
  border: 1px solid rgba(#fff, 0);
  bottom: 0px;
  content: " ";
  display: block;
  margin: 0 auto;
  position: relative;
  transition: all 280ms ease-in-out;
  width: 0;
  }
  &:hover{
    backface-visibility: hidden;
    color:#859AA7;
    width:6rem;
    border-bottom:2px solid  #859AA7;
    transition: all 800ms ease-in-out;
  }
@media (max-width: 1400px)
{
    width:6rem;
    margin-right:1rem;
    &:hover{
       
        width:6rem;
      }
}
@media (max-width: 980px)
{
    width:2.5rem;
    margin-right:0;
    &:hover{
       
        width:2.5rem;
      }
}
`
const NavItemText = styled.div`
display:flex;
flex-direction:row;
align-items:flex-end;
font-size:1.5rem;
width:5rem;
font-family: 'Baumans', cursive;
margin-left:.5rem;
&:hover{
    color:#859AA7;
  }
@media (max-width: 1400px)
{
  font-size:1.25rem;
}
@media (max-width: 980px)
{
    display:none;
}
`
const HomeIcon = styled.div`
flex-direction:row;
width:6.5rem;
align-items:center;
display:${(props) => props.hdisplay};
color: ${(props) => props.navcolor};
cursor:pointer;
&:hover{
    
    color:#859AA7;
  }
@media (max-width: 780px)
{
    width:2rem;
    
}
`
const UserIcon = styled.div`
flex-direction:row;
width:6.5rem;
align-items:center;
cursor:pointer;
color: ${(props) => props.navcolor};

display:${(props) => props.udisplay};
&:hover{
    
    color:#859AA7;
  }
@media (max-width: 780px)
{
    width:2rem;
  
}
`
const NavIcon = ({
  text = "home",
  navcolor = '#E5E5E5',
  homeClick = () => { },
  udisplay = "none",
  hdisplay = "flex",
  aboutClick = () => { },
  sx = { fontSize: 24 }

}) => {


  return <NavItemCons   >
    <HomeIcon hdisplay={hdisplay} navcolor={navcolor} onClick={homeClick}>
      < HomeRoundedIcon sx={sx} />
      <NavItemText   >
        {text} </NavItemText>
    </HomeIcon>
    <UserIcon udisplay={udisplay} navcolor={navcolor} onClick={aboutClick}>
      < PersonRoundedIcon sx={sx} />
      <NavItemText   >
        {text} </NavItemText>
    </UserIcon>

  </NavItemCons>

}

export default NavIcon