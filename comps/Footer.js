import React from "react";
import styled from "styled-components";
import SocialIcon from "./SocialIcon";
import MuiSwitch from "./MuiSwitch";
import { foot_theme } from "../utils/variables";
import { useTheme } from "@emotion/react";
const FooterCon=styled.div`
width:100vw;
height:100%;
display:flex;
padding-top:1rem;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:${props=>props.BGC}
`
const Footertext=styled.p`
font-size:1.5rem;
font-family: 'Baumans', cursive;
font-weight:400;
color:#E5E5E5;
line-height:1.5rem;
margin:1rem;
`
const TemsAndPrivacy=styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
width:10rem;
height:2rem;
margin-bottom:2rem;
`
const Privacy=styled.p`
font-size:1rem;
font-family: 'Baumans', cursive;
font-weight:400;
color:#E5E5E5;
line-height:1rem;
height:1.25rem;
&:hover{
    border-bottom:2px solid 
}
`
const Terms=styled.p`
font-size:1rem;
font-family: 'Baumans', cursive;
font-weight:400;
color:#E5E5E5;
line-height:1rem;
height:1.25rem;
&:hover{
    border-bottom:2px solid 
}
`


const Footer =({
    onClick=()=>{},
    check,label,BGC,switchState
})=>{
    var thisYesr = new Date()
    var year = thisYesr.getYear()+1900
        const {theme}=useTheme()
    console.log(year)
return <FooterCon BGC={BGC}>
    <SocialIcon/> 
    <MuiSwitch onClick={onClick} check={check} label={label} switchState={switchState}/>
<Footertext> Ⓒ Levi Chen Profolio Website {year} </Footertext>
<TemsAndPrivacy>

<Privacy onClick={()=>window.open("https://www.privacypolicies.com/live/7268dcf5-8124-4715-a08c-b7b367a32497")}>Privacy</Privacy>
<Terms onClick={()=>window.open("https://www.privacypolicies.com/live/9339371d-fe58-45eb-9ccf-4d063707ebd5")}>Terms</Terms>
</TemsAndPrivacy>
</FooterCon>
}

export default Footer