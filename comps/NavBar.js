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

const NavBar = () => {

    return <NavBarCon>
        <LogoCon> <Logo /></LogoCon>
        <NavCon>
            <NavItem />
            <NavItem homedisplay="none" aboutdisplay="block"  text="about"/>
            <NavItem homedisplay="none" portfoliodisplay="block" text="projects"/>
            <NavItem homedisplay="none" blogsdisplay="block" text="blogs"/>
            <NavItem homedisplay="none" contactdisplay="block" text="contact"/>
        </NavCon>
    </NavBarCon>

}


export default NavBar