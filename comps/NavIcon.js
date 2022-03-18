import React from "react";
import styled from "styled-components";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

const NavItemCons = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width:5rem;
margin-right:2.5rem;
&:hover {
    color: lightblue;
  }
@media (max-width: 1400px)
{
    width:5rem;
    margin-right:1rem;
}
@media (max-width: 980px)
{
    width:2.5rem;
    margin-right:0;
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
&:hover {
    color: lightblue;
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
flex-dirextion:row;
width:6.5rem;
display:${(props) => props.hdisplay};
color: ${(props) => props.navcolor};
&:hover {
    color: lightblue;
    border-bottom:2px solid 
  }
@media (max-width: 780px)
{
    width:2rem;
    
}
`
const UserIcon = styled.div`
flex-dirextion:row;
width:6.5rem;
color: ${(props) => props.navcolor};
&:hover {
    color: lightblue;
    border-bottom:2px solid 
  }
display:${(props) => props.udisplay};

@media (max-width: 780px)
{
    width:2rem;
  
}
`
const NavIcon = ({
    text = "home",
    navcolor = '#E5E5E5',
    homeClick = () => { },
    udisplay="none",
    hdisplay="flex",
    aboutClick = () => { },
    sx={fontSize:30}

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