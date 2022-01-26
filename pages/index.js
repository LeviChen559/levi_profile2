import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'
import styled from 'styled-components'
import Rooter from '../comps/Rooter'
import SocialIcon from '../comps/SocialIcon'

import { useState } from 'react'
const Wrraper = styled.div`
width:100vw;
height:100vh
display:flex;
flex-direction:column;

`
const NavCon = styled.div`
display:flex;
flex-direction:row;
position:absolute;
z-index:4;

`
const MainView = styled.img`
width:100vw;
height:50rem;
object-fit:cover;
display: block;
`
const MainViewCon = styled.div`
width:100vw;
height:50rem;
position:absolute;
z-index:3;
justify-content:center;
align-items:center;
display:flex;
flex-direction:row;
overflow:hidden;
`

const Textarea = styled.div`
width:100vw;
height:30rem;
background-color:#E9C46A;
margin:0;
`
const ShortIntroCon=styled.div`
display:flex;
flex:4;
flex-direction:column;
justify-content:center;
align-items:flex-start;
height:50rem;
padding-left:15%
`
const PicCon=styled.div`
display:flex;
flex:6;
flex-direction:column;
justify-content:center;
align-items:flex-start;
height:50rem;
overflow:hidden;

`
const PicImg=styled.img`
objet-fit:cover;
width:55rem;
margin-top:15rem;
position:absolute;
z-index:2;
@media (max-width: 780px)
{
  width:35rem;
}
`
const ColorBlock=styled.img`
objet-fit:cover;
width:60rem;
margin-top:15rem;
@media (max-width: 780px)
{
  width:30rem;
}
`
const Intro1 =styled.p`
font-size:7rem;
font-family: 'Baumans';
font-weight:300;
color:#E5E5E5;
line-hight:.7;
margin:.1rem;
@media (max-width: 780px)
{
  font-size:3rem;
}
`
const Intro2 =styled.p`
font-size:2.75rem;
line-hight:.7;
font-family: 'Baumans';
font-weight:200;
color:#E5E5E5;
margin:.1rem;
@media (max-width: 780px)
{
  font-size:1rem;
  line-hight:.1;
 
}
`

export default function Home() {

  const [navColor1, SetnavColor1]=useState(false)
  const [navColor2, SetnavColor2]=useState(false)
  const [navColor3, SetnavColor3]=useState(false)
  const [navColor4, SetnavColor4]=useState(false)
  const [navColor5, SetnavColor5]=useState(false)

  const Home=()=>{
    SetnavColor1(!navColor1)
  }
  const About=(e)=>{
    
    SetnavColor2(!navColor2)
  }  
  const Projects=()=>{
    SetnavColor3(!navColor3)
   
  } 
  const Blogs=()=>{
    SetnavColor4(!navColor4)
  }
  const Contact=()=>{
    SetnavColor5(!navColor5)  
  }

 
  return (
      <Wrraper>
        <NavCon>
          <NavBar 
          navColor1={navColor1? '#E9C46A' : '#E5E5E5'} 
          navColor2={navColor2? '#E9C46A' : '#E5E5E5'} 
          navColor3={navColor3? '#E9C46A' : '#E5E5E5'} 
          navColor4={navColor4? '#E9C46A' : '#E5E5E5'} 
          navColor5={navColor5? '#E9C46A' : '#E5E5E5'} 
          handleHome={Home}
          handleAbout={About}
          handleProjects={Projects}
          handleBlogs={Blogs}
          handleContact={Contact} />
        </NavCon>
        <MainViewCon>
        <ShortIntroCon>
          <Intro1>Hello, I am Levi.</Intro1>
          <Intro2>Front-end Developer</Intro2>
          <Intro2>UI/UX Desinger</Intro2>
           <SocialIcon/>
        </ShortIntroCon>
       
          <PicCon >  <ColorBlock src='Vector.png'/> <PicImg src='LeviChen.png'/> </PicCon>
        </MainViewCon>
       
        <MainView src='ocean.svg'/>
       

       
        
   
        <Textarea></Textarea>
      <Rooter/>
      </Wrraper>
  )
}
