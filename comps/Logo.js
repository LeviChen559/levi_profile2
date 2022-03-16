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
// height:100;
font-family: 'Baumans', cursive;
font-weight:400;
color:#E5E5E5;
margin:0;
@media (max-width: 1400px)
{
    font-size:3rem;
    line-height:3rem;
    // height:3rem;
}
@media (max-width: 800px)
{
    font-size:2.5rem;
    line-height:2.5rem;
    
}
`
const Logoimg=styled.img`
width: 3.5rem;
height:3.5rem;
margin-left:.5rem;
@media (max-width: 1400px)
{
    width: 2.75rem;
height:2.75rem
}
@media (max-width: 800px)
{
    width: 2.25rem;
height:2.25rem
}
`

const Logo= ()=>{

return<LogoCon>
    <Logotext>Levi</Logotext>
    <Logoimg src='Logo.svg'/>
</LogoCon>

}

export default Logo