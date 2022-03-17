import React from "react";
import styled from "styled-components";
import SocialIcon from "./SocialIcon";

const RooterCon=styled.div`
width:100vw;
height:100%;
display:flex;
padding-top:1rem;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#c4cbd8
`
const Rootertext=styled.p`
font-size:1.5rem;
font-family: 'Baumans', cursive;
font-weight:400;
color:#E5E5E5;
line-height:1.5rem;
margin:1rem;
`

const Footer =()=>{
    var thisYesr = new Date()
    var year = thisYesr.getYear()+1900

    console.log(year)
return <RooterCon>
    <SocialIcon/> 
<Rootertext> Ⓒ Levi Chen Profolio Website {year} </Rootertext>
</RooterCon>
}

export default Footer