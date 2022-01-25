import React from "react";
import styled from 'styled-components';
import Logo from './Logo';
import NavItem from "./NavItem";

const NavBarCon = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
alugn-items:center;
width:100vw;
height:10rem;
padding:2rem
`
const LogoCon = styled.div`
display:flex;
flex:6;
height:5rem;
padding-left:5%
`
const NavCon = styled.div`
display:flex;
flex:4;
flex-direction:row;
justify-content:center;
alugn-items:center;
height:5rem;
`

const NavBar = ({
    handleHome=()=>{},
    handleAbout=()=>{},
    handleProjects=()=>{},
    handleBlogs=()=>{},
    handleContact=()=>{},onMouseOver=()=>{},
    onMouseOut=()=>{},
    navColor1,
    navColor2,
    navColor3,
    navColor4,
    navColor5,
}) => {
   
    return <NavBarCon>
        <LogoCon> <Logo /></LogoCon>
        <NavCon>
            <NavItem HandleClick={handleHome} onMouseOver={onMouseOver} onMouseOut={onMouseOut} navColor1={navColor1} />
            <NavItem HandleClick={handleAbout}onMouseOver={onMouseOver} onMouseOut={onMouseOut} homedisplay="none" aboutdisplay="block"  text="about" navColor2={navColor2} navColor1={navColor2}/>
            <NavItem HandleClick={handleProjects} onMouseOver={onMouseOver} onMouseOut={onMouseOut}homedisplay="none" projectsdisplay="block" text="projects" navColor3={navColor3} navColor1={navColor3}/>
            <NavItem HandleClick={handleBlogs} onMouseOver={onMouseOver} onMouseOut={onMouseOut}homedisplay="none" blogsdisplay="block" text="blogs"navColor4={navColor4} navColor1={navColor4}/>
            <NavItem HandleClick={handleContact} onMouseOver={onMouseOver} onMouseOut={onMouseOut}homedisplay="none" contactdisplay="block" text="contact"navColor5={navColor5} navColor1={navColor5}/>
        </NavCon>
    </NavBarCon>

}


export default NavBar