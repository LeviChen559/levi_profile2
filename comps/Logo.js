import React from "react";
import styled from 'styled-components'

const LogoCon = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width: 8rem;
height:4.5rem
`
const Logotext= styled.p`
font-size:4rem;
font-family: 'Baumans', cursive;
font-weight:400;
color:#E5E5E5
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