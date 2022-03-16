import React from "react";
import styled from "styled-components";


const RooterCon=styled.div`
width:100vw;
height:5rem;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
background-color:#c4cbd8
`
const Rootertext=styled.p`
font-size:1.5rem;
font-family: 'Baumans', cursive;
font-weight:400;
color:#E5E5E5
`

const Footer =()=>{
    var thisYesr = new Date()
    var year = thisYesr.getYear()+1900

    console.log(year)
return <RooterCon>
<Rootertext> Ⓒ Levi Chen Profolio Website {year} </Rootertext>
</RooterCon>
}

export default Footer