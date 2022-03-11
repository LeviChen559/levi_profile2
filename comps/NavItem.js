import React from "react";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaBriefcase } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";


const NavItemCon = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width:8rem;
margin-right:2.5rem
@media (max-width: 1400px)
{
    width:2.5rem;
    margin-right:.5rem
}
`
const NavItemText = styled.p`
font-size:1.5rem;
font-family: 'Baumans', cursive;
color: ${(props)=>props.navColor1};
display:flex;
@media (max-width: 1400px)
{
  font-size:1rem;
}
@media (max-width: 980px)
{
    display:none;
}
`
const NavItemIcon_home = styled.div`
size:2rem;
margin-right:.5rem;
display:${(props) => props.homedisplay};
@media (max-width: 780px)
{
    size:1rem;
}
`
const NavItemIcon_about = styled.div`
size:2rem;
margin-right:.5rem;
display:${(props) => props.aboutdisplay}
`
const NavItemIcon_portfolio = styled.div`
size:2rem;
margin-right:.5rem;
display:${(props) => props.projectsdisplay}
`
const NavItemIcon_blogs = styled.div`
size:2rem;
margin-right:.5rem;
display:${(props) => props.blogsdisplay}
`
const NavItemIcon_contact = styled.div`
size:2rem;
margin-right:.5rem;
display:${(props) => props.contactdisplay}
`
const NavItem = ({
    text = "home",
    homedisplay = 'block',
    aboutdisplay = 'none',
    projectsdisplay = 'none',
    blogsdisplay = 'none',
    contactdisplay = 'none',
    navColor1 ='#E5E5E5',
    navColor2,
    navColor3,
    navColor4,
    navColor5,
   HandleClick=()=>{},
   onMouseOver=()=>{},
   onMouseOut=()=>{},
  

}) => {
   

    return <NavItemCon onClick={HandleClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut} >
        <NavItemIcon_home homedisplay={homedisplay}>
            <IconContext.Provider value={{ color: navColor1, className: "global-class-name", size: '1.5rem' }}>
                <FaHome />
            </IconContext.Provider>
        </NavItemIcon_home>
        <NavItemIcon_about aboutdisplay={aboutdisplay}>
            <IconContext.Provider value={{ color: navColor2, className: "global-class-name", size: '1.3rem' }}>
                <FaUserAlt />
            </IconContext.Provider>
        </NavItemIcon_about>
        <NavItemIcon_portfolio projectsdisplay={projectsdisplay}>
            <IconContext.Provider value={{ color: navColor3, className: "global-class-name", size: '1.5rem' }}>
                <FaBriefcase />
            </IconContext.Provider>
        </NavItemIcon_portfolio>
         <NavItemIcon_blogs blogsdisplay={blogsdisplay}>
            <IconContext.Provider value={{ color: navColor4, className: "global-class-name", size: '1.5rem' }}>
                <FaEdit />
            </IconContext.Provider>
        </NavItemIcon_blogs>
        <NavItemIcon_contact contactdisplay={contactdisplay}>
            <IconContext.Provider value={{ color: navColor5, className: "global-class-name", size: '1.5rem' }}>
                <FaMailBulk/>
            </IconContext.Provider>
        </NavItemIcon_contact>
        <NavItemText navColor1={navColor1}  > {text} </NavItemText>
    </NavItemCon>

}

export default NavItem