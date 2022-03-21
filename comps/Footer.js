import React from "react";
import styled from "styled-components";
import SocialIcon from "./SocialIcon";
import MuiSwitch from "./MuiSwitch";
import { foot_theme } from "../utils/variables";
import { useTheme } from "@emotion/react";
const RooterCon=styled.div`
width:100vw;
height:100%;
display:flex;
padding-top:1rem;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:${props=>props.BGC}
`
const Rootertext=styled.p`
font-size:1.5rem;
font-family: 'Baumans', cursive;
font-weight:400;
color:#E5E5E5;
line-height:1.5rem;
margin:1rem;
`

const Footer =({
    onClick=()=>{},
    check,label,BGC
})=>{
    var thisYesr = new Date()
    var year = thisYesr.getYear()+1900
        const {theme}=useTheme()
    console.log(year)
return <RooterCon BGC={BGC}>
    <SocialIcon/> 
    <MuiSwitch onClick={onClick} check={check} label={label}/>
<Rootertext> Ⓒ Levi Chen Profolio Website {year} </Rootertext>
</RooterCon>
}

export default Footer