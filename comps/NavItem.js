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
`
const NavItemText = styled.p`
font-size:1.5rem;
font-family: 'Baumans', cursive;
color:#E5E5E5
`
const NavItemIcon_home = styled.div`
size:2rem;
margin-right:.5rem;
display:${(props) => props.homedisplay}
`
const NavItemIcon_about = styled.div`
size:2rem;
margin-right:.5rem;
display:${(props) => props.aboutdisplay}
`
const NavItemIcon_portfolio = styled.div`
size:2rem;
margin-right:.5rem;
display:${(props) => props.portfoliodisplay}
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
    portfoliodisplay = 'none',
    blogsdisplay = 'none',
    contactdisplay = 'none',
}) => {

    return <NavItemCon>
        <NavItemIcon_home homedisplay={homedisplay}>
            <IconContext.Provider value={{ color: "#E5E5E5", className: "global-class-name", size: '1.5rem' }}>
                <FaHome />
            </IconContext.Provider>
        </NavItemIcon_home>
        <NavItemIcon_about aboutdisplay={aboutdisplay}>
            <IconContext.Provider value={{ color: "#E5E5E5", className: "global-class-name", size: '1.3rem' }}>
                <FaUserAlt />
            </IconContext.Provider>
        </NavItemIcon_about>
        <NavItemIcon_portfolio portfoliodisplay={portfoliodisplay}>
            <IconContext.Provider value={{ color: "#E5E5E5", className: "global-class-name", size: '1.5rem' }}>
                <FaBriefcase />
            </IconContext.Provider>
        </NavItemIcon_portfolio>
         <NavItemIcon_blogs blogsdisplay={blogsdisplay}>
            <IconContext.Provider value={{ color: "#E5E5E5", className: "global-class-name", size: '1.5rem' }}>
                <FaEdit />
            </IconContext.Provider>
        </NavItemIcon_blogs>
        <NavItemIcon_contact contactdisplay={contactdisplay}>
            <IconContext.Provider value={{ color: "#E5E5E5", className: "global-class-name", size: '1.5rem' }}>
                <FaMailBulk/>
            </IconContext.Provider>
        </NavItemIcon_contact>
        <NavItemText> {text} </NavItemText>
    </NavItemCon>

}

export default NavItem