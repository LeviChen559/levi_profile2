import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'
import styled from 'styled-components'
import Rooter from '../comps/Rooter'
import SocialIcon from '../comps/SocialIcon'
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
z-index:3;
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
margin:0
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
`
const ColorBlock=styled.img`
objet-fit:cover;
width:60rem;
margin-top:15rem;
`
const Intro1 =styled.p`
font-size:7rem;
font-family: 'Baumans', cursive;
font-weight:300;
color:#E5E5E5;
line-hight:.7;
margin:.1rem
`
const Intro2 =styled.p`
font-size:2.75rem;
line-hight:.7;
font-family: 'Baumans', cursive;
font-weight:200;
color:#E5E5E5;
margin:.1rem
`

export default function Home() {
  return (
      <Wrraper>
        <NavCon>
          <NavBar />
        </NavCon>
        <MainViewCon>
        <ShortIntroCon>
          <Intro1>Hello, I'm Levi.</Intro1>
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
