import React, { useState, useCallback, useRef, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'
import styled from 'styled-components'
import Footer from '../comps/Footer'
import SocialIcon from '../comps/SocialIcon'
import { useRouter } from 'next/router'
import { useTransition, animated, useSpring } from '@react-spring/web'
import { config } from 'react-spring'
import { project } from '../data/project'
import ActionAreaCard from '../comps/ActionAreaCard'
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
const Wrraper = styled.div`
width:100vw;
height:100%;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
background-color:#7ca5b8;
`
const Container = styled.div`
width:60%;
height:60%;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
position:absolute;
z-index:2;
@media (max-width: 700px)
{
  width:85%
}
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
@media (max-width: 700px)
{
  width:85%
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
background-color:#7ca5b8;
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
height:40rem;
// padding-left:15%

`
const PicCon = styled.div`
display:flex;
flex:6;
flex-direction:column;
justify-content:center;
align-items:flex-start;
height:40rem;
overflow:hidden;

`
const PicImg = styled.img`
objet-fit:cover;
width:45rem;
margin-top:9.5rem;
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
  margin-top:7.5rem;
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
  width:22.5rem;
  margin-top:10rem;
  margin-left:-7.5rem;
}
@media (max-width: 600px)
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
line-height: 2rem;
margin:.1rem;
@media (max-width: 600px)
{
  font-size:1rem;
}
`
const Intro3 = styled.p`
font-size:1.25rem;
font-family: 'Baumans';
font-weight:300;
color:#7ca5b8;
line-height: 2rem;
margin:.1rem;
width:70%;
@media (max-width: 600px)
{
  font-size:1rem;
}
`
const Intro1 = styled.div`
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
const Intro2 = styled.div`
font-size:2.25rem;
font-family: 'Baumans';
line-height:2.5rem;
font-weight:200;
color:#E5E5E5;
margin-top:1rem;
margin-bottom:1rem;
&:hover{
  color:#264653
}
`
const Title = styled.h1`
font-family: 'Baumans';
margin:5%;
color:#E5E5E5;
border-bottom:.2rem solid #E5E5E5;
`
const Title2 = styled.h1`
font-family: 'Baumans';
margin:2.5%;
padding-bottom:1%;
color:#7ca5b8;
border-bottom:.2rem solid #7ca5b8;
text-align:center;
`
const Introduction = styled.div`
height:100%;
background-color:#c4cbd8;
margin-bottom:5rem;
padding:5rem;
width:100vw;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Projects = styled.div`
margin-top:5rem;
margin-bottom:20rem;
display:flex;
flex-direction:column;
width:100%;
height:100%;
`
const ProjectItem = styled.div`
width:100%;
display:flex;
flex-direction:row;
margin-bottom:5rem;
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
height:20rem;
display:flex;
flex-direction:column;
justify-content: space-between;
align-items:flex-start;
@media (max-width: 1000px)
{
  width:100%;
}
`
const ArrowButton = styled.div`
width:100%;
height:1rem;
display:flex;
flex-direction:row;
justify-content:flex-end
`
export default function Home() {
  const router = useRouter()
  const ref = useRef([])
  const [items, set] = useState([])
  const [count, setCount] = useState(0);

  useEffect(() => {
    let counter = count;
    const interval = setInterval(() => {
      if (counter >= project.length) {
        clearInterval(interval);
      } else {
        setCount(count => count + 1);
        counter++; // local variable that this closure will see
      
      }
    }, 1000);
    return () => clearInterval(interval); 
  }, [project]);
  
  const styles = useSpring({
    loop: false,
    to: [
      { opacity: 1, marginLeft: "0rem" },
    ],
    from: { opacity: .75, marginLeft: "100rem" },
    config: config.molasses,
  })
  
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#8fa5b6',
    },

    enter: [
      { opacity: 1, height: 35, innerHeight: 35 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#0bb38e' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#28b4d7' },
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Industrial Designer']), 2000))
    ref.current.push(setTimeout(() => set(['Mechanic Engineer']), 5000))
    ref.current.push(setTimeout(() => set(['UI/UX Designer', 'Frontend Developer']), 8000))
  }, [])

  useEffect(() => {
    reset()
    return () => ref.current.forEach(clearTimeout)
  }, [])

  const scrollToTop0 = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

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
              {transitions(({ innerHeight, ...rest }, item) => (
                <animated.div className={styles.transitionsItem} style={rest} onClick={reset}>
                  <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                </animated.div>
              ))}
            </Intro>


            {/* <Intro1>Hello, I am Levi.</Intro1>
            <Intro2>Front-end Developer</Intro2>
            <Intro2>UI/UX Desinger</Intro2> */}
            <SocialIcon />
          </ShortIntroCon>

          <PicCon >   <PicImg src='LeviChen2.png' /> </PicCon>
        </MainViewCon>

      </Container>
      <Container2>


        <Content>

            <Introduction>

          <Title2> Introduction</Title2>
          <Intro3>
            Levi is about to graduate from Digital Design and Development at BCIT. During the study, he learns how to design and build an application across platforms, separately web and mobile. As a result, he knows how to use UI/UX, front-end, and back-end skills that are Figma, HTML, CSS, JavaScript, react, and react-native in projects.
            Currently, he focuses on UI/UX design and front-end development because he likes creating exciting visual enjoyment and a friendly user experience.
          </Intro3>
            </Introduction>

          <Title>Projects </Title>
          <Intro>

          </Intro>

          <Projects >
            
            {project.slice(0, count).map((o ,i) => <>
              <animated.div style={styles} >
                <ProjectItem key={i} >
                  <ProjectCard>
                    <ActionAreaCard
                      title={o.title}
                      time={o.time}
                      codeTool={o.codeTool}
                      src={o.src}
                      routeTo={o.link}
                    />
                  </ProjectCard>

                  <ProjectIntro>
                    <Intro2 onClick={() => router.push(o.link)}> {o.title}</Intro2>
                    <Intro> {o.intro}</Intro>
                    {/* <Intro> Enter</Intro> */}
                    <ArrowButton>
                      <ArrowDropUpRoundedIcon onClick={o.scrollUp} sx={{ fontSize: 50 }} />
                      <ArrowDropDownRoundedIcon onClick={o.scrollDown} sx={{ fontSize: 50 }} />
                    </ArrowButton>
                  </ProjectIntro>
                </ProjectItem>
              
              </animated.div>
            </>)}

          
          </Projects>

          <ArrowDropUpRoundedIcon onClick={scrollToTop0} sx={{ fontSize: 50 }} />
        </Content>

      </Container2>
      <Footer />
    </Wrraper>
  )
}
