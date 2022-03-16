import React from "react";
import styled from 'styled-components'

const LogoCon = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
width: 100%;
height:100%;
`
const Logotext= styled.p`
font-size:4rem;
line-height:4rem;
height:4rem;
font-family: 'Baumans', cursive;
font-weight:400;
color:#E5E5E5;
margin:0;
`
const Logoimg=styled.img`
width: 4rem;
height:4rem

`

const Logo= ()=>{

return<LogoCon>
    <Logotext>Levi</Logotext>
    <Logoimg src='Logo.svg'/>
</LogoCon>

}

export default Logo