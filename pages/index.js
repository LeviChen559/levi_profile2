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
height:100%;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
background-color:#E9C46A;
`
const Container = styled.div`
width:80%;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
position:absolute;
z-index:2:
`
const Container2 = styled.div`
width:80%;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;

`
const NavCon = styled.div`
display:flex;
flex-direction:row;
position:absolute;
z-index:4;
width:100%;
justify-content:center;
margin:1%

`
const MainView = styled.img`
width:100%;
height:50rem;
object-fit:cover;
display: block;
@media (max-width: 1980px)
{
  height:45rem;
}
@media (max-width: 1400px)
{
  height:35rem;
}
`
const MainViewCon = styled.div`
width:100%;
height:50rem;
position:absolute;
z-index:3;
justify-content:center;
align-items:center;
display:flex;
flex-direction:row;
overflow:hidden;
@media (max-width: 1980px)
{
  height:45rem;
}
@media (max-width: 1400px)
{
  height:35rem;
}
`
const Content = styled.div`
display:flex;
width:90%;
height:100%;
background-color:#E9C46A;
margin:0;
flex-direction:column;
justify-content:flex-start;
align-items:center;
color:#E5E5E5;
`
const ShortIntroCon = styled.div`
display:flex;
flex:4;
flex-direction:column;
justify-content:center;
align-items:flex-start;
height:50rem;
// padding-left:15%

`
const PicCon = styled.div`
display:flex;
flex:6;
flex-direction:column;
justify-content:center;
align-items:flex-start;
height:50rem;
overflow:hidden;

`
const PicImg = styled.img`
objet-fit:cover;
width:52.5rem;
margin-top:15rem;
position:absolute;
z-index:2;
@media (max-width: 1980px)
{
  width:42.5rem;
}
@media (max-width: 1400px)
{
  width:30rem;
}
`
const ColorBlock = styled.img`
objet-fit:cover;
width:60rem;
margin-top:15rem;
@media (max-width: 1980px)
{
  width:55rem;
}
@media (max-width: 1400px)
{
  width:37.5rem;
}
`
const Intro = styled.p`
font-size:1.25rem;
font-family: 'Baumans';
font-weight:300;
color:#E5E5E5;
line-height: 120%;
margin:.1rem;
`

const Intro1 = styled.p`
font-size:5rem;
font-family: 'Baumans';
font-weight:300;
color:#E5E5E5;
line-hight:.7rem;
margin:.1rem;
@media (max-width: 1980px)
{
  font-size:4rem;
}
@media (max-width: 1400px)
{
  font-size:3rem;
}
`
const Intro2 = styled.p`
font-size:2.75rem;
line-hight:.7rem;
font-family: 'Baumans';
font-weight:200;
color:#E5E5E5;
margin:.1rem;
@media (max-width: 1980px)
{
  font-size:1.5rem;
}
@media (max-width: 1400px)
{
  font-size:1rem;
  line-hight:.1;
 
}
`
const Title = styled.h1`
font-family: 'Baumans';
margin:5%;
color:#E5E5E5;
border-bottom:.25rem solid #E5E5E5;
`

export default function Home() {

  const [navColor1, SetnavColor1] = useState(false)
  const [navColor2, SetnavColor2] = useState(false)
  const [navColor3, SetnavColor3] = useState(false)
  const [navColor4, SetnavColor4] = useState(false)
  const [navColor5, SetnavColor5] = useState(false)

  const Home = () => {
    SetnavColor1(!navColor1)
  }
  const About = (e) => {

    SetnavColor2(!navColor2)
  }
  const Projects = () => {
    SetnavColor3(!navColor3)

  }
  const Blogs = () => {
    SetnavColor4(!navColor4)
  }
  const Contact = () => {
    SetnavColor5(!navColor5)
  }


  return (
    <Wrraper>
      <MainView src='ocean.svg' />
      <Container>
        <NavCon>
          <NavBar
            navColor1={navColor1 ? '#E9C46A' : '#E5E5E5'}
            navColor2={navColor2 ? '#E9C46A' : '#E5E5E5'}
            navColor3={navColor3 ? '#E9C46A' : '#E5E5E5'}
            navColor4={navColor4 ? '#E9C46A' : '#E5E5E5'}
            navColor5={navColor5 ? '#E9C46A' : '#E5E5E5'}
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
            <SocialIcon />
          </ShortIntroCon>

          <PicCon >  <ColorBlock src='Vector.png' /> <PicImg src='LeviChen.png' /> </PicCon>
        </MainViewCon>

      </Container>
      <Container2>


        <Content>
          <Title> Introduction</Title>
          <Intro>
            Levi is about to graduate from Digital Design and Development at BCIT. During the study, he learns how to design and build an application across platforms, separately web and mobile. As a result, he knows how to use UI/UX, front-end, and back-end skills that are Figma, HTML, CSS, JavaScript, react, and react-native in projects.
            Currently, he focuses on UI/UX design and front-end development because he likes creating exciting visual enjoyment and a friendly user experience.
          </Intro>
          
          <Title> Experience</Title>
          <Intro>
            Levi is about to graduate from Digital Design and Development at BCIT. During the study, he learns how to design and build an application across platforms, separately web and mobile. As a result, he knows how to use UI/UX, front-end, and back-end skills that are Figma, HTML, CSS, JavaScript, react, and react-native in projects.
            Currently, he focuses on UI/UX design and front-end development because he likes creating exciting visual enjoyment and a friendly user experience.
          </Intro>
          <Title> Skills</Title>
          <Intro>
            Levi is about to graduate from Digital Design and Development at BCIT. During the study, he learns how to design and build an application across platforms, separately web and mobile. As a result, he knows how to use UI/UX, front-end, and back-end skills that are Figma, HTML, CSS, JavaScript, react, and react-native in projects.
            Currently, he focuses on UI/UX design and front-end development because he likes creating exciting visual enjoyment and a friendly user experience.
          </Intro>
        </Content>
      </Container2>
      <Rooter />
    </Wrraper>
  )
}
