import React from "react";
import styled,{keyframes} from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaPinterest } from "react-icons/fa";
import { useRouter } from 'next/router'

const pulse = keyframes`
  0% {
    margin-top:-2rem;  
    // opacity: 0;
  }
40% {
    margin-top:1rem;
    opacity: 0;
  }
  75% {
    margin-top:-.5rem;
    opacity: .75;
  }
  100% {
    margin-top:0rem;
    opacity: 1;
  }
`;
const SocialLinkCon = styled.div`
display:flex;
flex-direction:row;
width:10rem;
justify-content:space-between;
align-items:center;
height:3.5rem;
@media (max-width: 800px)
{
  width:9rem;
}
@media (max-width: 600px)
{
  width:9rem;
}
`
const Linkedin =styled.div`
&:hover{
    animation: ${pulse} 1000ms infinite alternate;
}
`
const Github =styled.div`
&:hover{
    animation: ${pulse} 1000ms infinite alternate;
}
`
const Pinterest =styled.div`

&:hover{
    animation: ${pulse} 1000ms infinite alternate;
}
`
const SocialIcon = ({value={ color: "#E5E5E5", className: "global-class-name", size: "2rem" }}) => {
  const router=useRouter()
    return <SocialLinkCon>

        <IconContext.Provider value={value} >
           <Linkedin onClick={()=>window.open("https://www.linkedin.com/in/yi-jen-levi-chen-87a1a2126/")}>
            <FaLinkedinIn />
           </Linkedin>
        </IconContext.Provider>
        <IconContext.Provider value={value}>
           <Github onClick={()=>window.open("https://github.com/LeviChen559")}>
            <FaGithub />
           </Github>
        </IconContext.Provider>
        <IconContext.Provider  value={value} >
           <Pinterest>
            <FaPinterest />
           </Pinterest>
        </IconContext.Provider>

    </SocialLinkCon>
}

export default SocialIcon