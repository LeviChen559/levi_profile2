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
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const Wrraper = styled.div`
width:100vw;
height:100%;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
background-color:#859AA7;

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
@media (max-width: 600px)
{
  height:25rem;
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
@media (max-width: 600px)
{
  height:25rem;
}
`
const Content = styled.div`
display:flex;
width:90%;
height:100%;
// background-color:#7ca5b8;
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
margin-left:0rem;
@media (max-width: 1960px)
{
  width:42.5rem;
  margin-top:7.5rem;
}
@media (max-width: 1600px)
{
  width:35rem;
  margin-top:10rem;
  margin-left:-5rem;
}
@media (max-width: 1200px)
{
  width:27.5rem;
  margin-top:10rem;
  margin-left:-5rem;
}
@media (max-width: 800px)
{
  width:22.5rem;
  margin-top:15rem;
  margin-left:-5rem;
}
@media (max-width: 600px)
{
  width:15rem;
  margin-top:10rem;
  margin-left:0rem;
}
@media (max-width: 400px)
{
  width:13rem;
  margin-top:10rem;
  margin-left:-1rem;
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
  line-height: 1.5rem;
}
`
const Intro3 = styled.p`
font-size:1.25rem;
font-family: 'Baumans';
font-weight:300;
color:#7ca5b8;
line-height: 2rem;
width:70%;
@media (max-width: 1000px)
{
  font-size:1.1rem;
  line-height: 1.5rem;
  width:75%;
}
@media (max-width: 600px)
{
  font-size:.9rem;
  line-height: 1.2rem;
  width:110%;
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
margin:10%;
color:#E5E5E5;
// border-bottom:.2rem solid #E5E5E5;
text-align:center
`
const Title2 = styled.h1`
font-family: 'Baumans';
color:#7ca5b8;
text-align:center;
@media (max-width: 1400px)
{
  font-size:2rem;
  margin-bottom:0rem;
  padding:0;
  line-height:2rem;
}
@media (max-width: 600px)
{
  font-size:1.25rem
}
@media (max-width: 400px)
{
  font-size:1.2rem;
  margin-top:2rem;
  margin-bottom:0rem;
  padding:0;
  line-height:1rem;
}
`
const Introduction = styled.div`
height:45rem;
background-color:#E5E5E5;
padding:5rem;
padding-bottom:7.5rem;
width:100vw;
position:absolute;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
clip-path: polygon(0 0%, 100% 25%, 100% 100%, 0% 75%);
margin-top:-11.5rem;
z-index:3;
@media (max-width: 1400px)
{
  height:35rem;
  margin-top:-5rem;
  clip-path: polygon(0 0%, 100% 15%, 100% 100%, 0% 85%);
}
@media (max-width: 600px)
{
  height:25rem;
  margin-top:-4rem;
  clip-path: polygon(0 0%, 100% 10%, 100% 100%, 0% 90%);
}

`
const Projects = styled.div`
margin-top:30rem;
margin-bottom:10rem;
display:flex;
flex-direction:column;
width:100%;
height:100%;
@media (max-width: 1980px)
{
  margin-top:27.5rem;
}
@media (max-width: 600px)
{
  margin-top:25rem;
}
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
justify-content:flex-end;
`
const UpArrow = styled.div`
&:hover{
  opacity:.5
}
`
const DownArrow = styled.div`
&:hover{
  opacity:.5
}
`
export default function Home() {
  const router = useRouter()
  const ref = useRef([])
  const [items, set] = useState([])
  const [count, setCount] = useState(0);
  const [windowW,setWindowW]=useState(0)
  useEffect(()=>{
    console.log("window.innerWidth", window.innerWidth);
    var y = window.innerWidth
    
    setWindowW(y)
  },[windowW])
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
    config: { duration: 3000, friction: 100, tension: 100 }

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
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
      <MainView src='black.png' />
      <Container name="Top">
        <NavCon>
          <NavBar />
        </NavCon>
        <MainViewCon>
          <ShortIntroCon>
            <Intro1 >Hello, I am Levi.</Intro1>
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
             
            {windowW > 1000 ?
            
            <SocialIcon  value={{ color: "#E5E5E5", className: "global-class-name", size: "2rem" }} /> :
            <SocialIcon  value={{ color: "#E5E5E5", className: "global-class-name", size: "1.75rem" }} />
          }
            
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


          <Projects >
          <Title>Projects </Title>
          <Intro>

          </Intro>

            {project.slice(0, count).map((o, i) => <>
              <animated.div style={styles}  >
                <ProjectItem name={o.name}key={i}>
                  <ProjectCard>
                    <ActionAreaCard 
                    key={i}
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
                      <UpArrow>
                <Link activeClass="active" to={o.back} spy={true} smooth={true} >
                        <ArrowDropUpRoundedIcon  sx={{ fontSize: 50 }} />
                     </Link>
                      </UpArrow>
                      {o.next!==""?
                      <DownArrow>
                      <Link activeClass="active" to={o.next} spy={true} smooth={true}>
                        <ArrowDropDownRoundedIcon  sx={{ fontSize: 50 }} />
                        </Link>
                      </DownArrow>:null}
                    </ArrowButton>
                  </ProjectIntro>
                </ProjectItem>

              </animated.div>
            </>)}


          </Projects>

          <UpArrow>
                        <ArrowDropUpRoundedIcon onClick={scrollToTop} sx={{ fontSize: 50 }} />
                      </UpArrow>
        </Content>

      </Container2>
      <Footer />
    </Wrraper>
  )
}
