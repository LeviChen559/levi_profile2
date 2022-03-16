import React, { useState, useCallback, useRef, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'
import styled from 'styled-components'
import Rooter from '../comps/Rooter'
import SocialIcon from '../comps/SocialIcon'
import { useRouter } from 'next/router'
import { useTransition, animated, useSpring } from '@react-spring/web'
import { fontSize } from '@mui/system'
import { project } from '../data/project'
import ActionAreaCard from '../comps/ActionAreaCard'

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
width:60%;
height:100%;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
position:absolute;
z-index:2:

`
const Container2 = styled.div`
width:65%;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
@media (max-width: 1980px)
{
  width:70%
}

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
width:45rem;
margin-top:15rem;
position:absolute;
z-index:2;
margin-left:-2.5rem;
@media (max-width: 1960px)
{
  width:42.5rem;
  margin-top:7.5rem;
}
@media (max-width: 1600px)
{
  width:35rem;
  margin-top:12.5rem;
  margin-left:-5rem;
}
@media (max-width: 1200px)
{
  width:27.5rem;
  margin-top:7.5rem;
  margin-left:-7.5rem;
}
@media (max-width: 800px)
{
  width:20rem;
  margin-top:17.5rem;
  margin-left:-5rem;
}
`
const ColorBlock = styled.img`
objet-fit:cover;
width:52.5rem;
margin-top:10rem;
@media (max-width: 1980px)
{
  width:45rem;
}
@media (max-width: 1400px)
{
  width:32.5rem;
  margin-letf:-10rem;
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
@media (max-width: 800px)
{
  font-size:2rem;
}
`
const Intro2 = styled.p`
font-size:2.25rem;
font-family: 'Baumans';
line-height:2.5rem;
font-weight:200;
color:#E5E5E5;
margin-top:2.5rem;
margin-bottom:2rem;
&:hover{
  color:#264653
}
`
const Title = styled.h1`
font-family: 'Baumans';
margin:5%;
color:#E5E5E5;
border-bottom:.25rem solid #E5E5E5;
`
const Projects = styled.div`
margin-top:5rem;
display:flex;
flex-direction:column;
width:100%;
height:100%;
`
const ProjectItem =styled.div`
width:100%;
display:flex;
flex-direction:row;
margin-bottom:2rem;
justify-content:space-between;
@media (max-width: 1000px)
{
flex-direction:column;
}
`
const ProjectCard = styled.div`
width:40%;
@media (max-width: 1000px)
{
  width:100%;
}
`
const ProjectIntro = styled.div`
width:55%;
height:100%;
display:flex;
flex-direction:column;
justify-contnet:space-around;
align-items:flex-start;
@media (max-width: 1000px)
{
  width:100%;
}
`
export default function Home() {
  const router = useRouter()
  const ref = useRef([])
  const [items, set] = useState([])


  return (
    <Wrraper>
      <Head>
        <title>Levi Chen FrontEnd Developer, UI UX Designer portfolio, BCIT D3 Web Development 2022 </title>
        <meta name="description"
          content="This portfolio includes web and mobile development projects, especially with MongoDB, Express, React, and Node. Also, there are some UI UX projects in the portfolio. Levi Chen graduated from BCIT D3 Program 2022 who enthuse in Web and Mobile development and design. This portfolio mainly collects the project from 2020-to 2022. " />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainView src='ocean.svg' />
      <Container>
        <NavCon>
          <NavBar />
        </NavCon>
        <MainViewCon>
          <ShortIntroCon>
            <Intro1>Hello, I am Levi.</Intro1>
            <Intro>
            
            </Intro>
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

          <Title>Projects</Title>
          <Intro>
           
          </Intro>
        

        

        </Content>
      </Container2>
      <Rooter />
    </Wrraper>
  )
}
