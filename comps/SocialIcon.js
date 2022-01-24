import React from "react";
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaPinterest } from "react-icons/fa";


const SocialLinkCon = styled.div`
display:flex;
flex-direction:row;
width:10rem;
justify-content:space-between;
align-items:center;
height:3.5rem;
`
const SocialIcon = () => {
    return <SocialLinkCon>
        <IconContext.Provider value={{ color: "#E5E5E5", className: "global-class-name", size: '2rem' }}>
            <FaLinkedinIn />
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "#E5E5E5", className: "global-class-name", size: '2rem'  }}>
            <FaGithub />
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "#E5E5E5", className: "global-class-name", size: '2rem'  }}>
            <FaPinterest />
        </IconContext.Provider>

    </SocialLinkCon>
}

export default SocialIcon