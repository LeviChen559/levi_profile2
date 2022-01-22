import React from "react";
import styled from "styled-components";


const RooterCon=styled.div`
width:100vw;
height:5rem;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
background-color:#E9C46A
`
const Rootertext=styled.p`
font-size:2rem;
font-family: 'Baumans', cursive;
font-weight:400;
color:#E5E5E5
`

const Rooter =()=>{


return <RooterCon>
<Rootertext> Ⓒ Levi Chen perfile website 2022 </Rootertext>
</RooterCon>
}

export default Rooter