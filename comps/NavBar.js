import React,{useState} from "react";
import styled from 'styled-components';
import Logo from './Logo';
import NavItem from "./NavItem";
import { useRouter } from "next/router";
const NavBarCon = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
alugn-items:center;
width:100%;
height:10rem;
padding:2rem
`
const LogoCon = styled.div`
display:flex;
flex:6;
height:5rem;
padding-left:5%
width:50%;
`
const NavCon = styled.div`
display:flex;
flex:4;
flex-direction:row;
justify-content:center;
alugn-items:center;
height:5rem;
width:50%;
`

const NavBar = ({
    
}) => {
    const router = useRouter()
    const [navColor1, SetnavColor1] = useState(false)
    const [navColor2, SetnavColor2] = useState(false)
    const [navColor3, SetnavColor3] = useState(false)
    const [navColor4, SetnavColor4] = useState(false)
    const [navColor5, SetnavColor5] = useState(false)
  
    const Home = () => {
      SetnavColor1(!navColor1);
      router.push('/')
    }
    const About = (e) => {
      SetnavColor2(!navColor2)
    }
    const Development = () => {
      SetnavColor3(!navColor3)
      router.push('/development')
    }
    const Design = () => {
      SetnavColor4(!navColor4)
      router.push('/design')
  
    }

    const Contact = () => {
      SetnavColor5(!navColor5)
    }
    return <NavBarCon>
        <LogoCon> <Logo /></LogoCon>
        <NavCon>
            <NavItem HandleClick={Home}  navColor1={navColor1 ? '#E9C46A' : '#E5E5E5'} />
            <NavItem HandleClick={About} homedisplay="none" aboutdisplay="block"  text="about" navColor2={navColor2 ? '#E9C46A' : '#E5E5E5'} />
            <NavItem HandleClick={Development} homedisplay="none" projectsdisplay="block" text="dev." navColor3={navColor3 ? '#E9C46A' : '#E5E5E5'} />
            <NavItem HandleClick={Design} homedisplay="none" blogsdisplay="block" text="design" navColor4={navColor4 ? '#E9C46A' : '#E5E5E5'} />
            <NavItem HandleClick={Contact} homedisplay="none" contactdisplay="block" text="contact"navColor5={navColor5 ? '#E9C46A' : '#E5E5E5'} />
        </NavCon>
    </NavBarCon>

}


export default NavBar