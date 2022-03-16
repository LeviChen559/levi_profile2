import React,{useState} from "react";
import styled from 'styled-components';
import Logo from './Logo';
import NavIcon from "./NavIcon";
import { useRouter } from "next/router";
const NavBarCon = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width:100%;
height:100%;

`
const LogoCon = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-start;
flex:6;
height:100%;
width:50%;
`
const NavCon = styled.div`
display:flex;
flex:4;
flex-direction:row;
justify-content:flex-end;
align-items:center;
height:100%;
width:50%;

`

const NavBar = ({
  
}) => {
    const router = useRouter()
    const [navcolor1, setNavcolor1] = useState(false)
    const [navcolor2, setNavcolor2] = useState(false)
   
  
    const Home = () => {
      setNavcolor1(!navcolor1);
     router.push('/')
    }
    const about = () => {
      setNavcolor2(!navcolor2);
     router.push('/about')
    }

    return <NavBarCon>
        <LogoCon> <Logo /></LogoCon>
        <NavCon>
            <NavIcon homeClick={Home}  navcolor={navcolor1 ? '#E9C46A' : '#E5E5E5'} />
            <NavIcon aboutClick={about} hdisplay="none" text="about" udisplay="flex" navcolor={navcolor2 ? '#E9C46A' : '#E5E5E5'} />
           
         </NavCon>
    </NavBarCon>

}


export default NavBar