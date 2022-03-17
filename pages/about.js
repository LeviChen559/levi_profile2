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
import { webtools, designtools, idtools } from '../data/project'
import { exp } from '../data/exp'
import ActionAreaCard from '../comps/ActionAreaCard'
import ToolsCard from '../comps/ToolsCard'
import { config } from 'react-spring'
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ExpCard from '../comps/ExpCard'
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
height:20%;
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

const Intro = styled.p`
font-size:1.5rem;
font-family: 'Baumans';
font-weight:300;
color:#E5E5E5;
line-height: 2rem;
margin:1rem;
@media (max-width: 1960px)
{
  font-size:1.25rem;
  margin:.75rem;
  line-height: 1.75rem;
}

@media (max-width: 1400px)
{
  font-size:1rem;
  margin:.5rem;
  line-height: 1.5rem;
}
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
text-align:center;
`
const Title = styled.h1`
font-family: 'Baumans';
margin:2.5%;
padding-bottom:2%;
color:#E5E5E5;
border-bottom:.2rem solid #E5E5E5;
text-align:center;
`
const Title2 = styled.h1`
font-family: 'Baumans';
margin:2.5%;
padding-bottom:2%;
color:#7ca5b8;
border-bottom:.2rem solid #7ca5b8;
text-align:center;
`
const Tools = styled.div`
margin-bottom:20rem;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
`
const Tool = styled.div`
margin-top:.5rem;
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
align-items:center;
width:100%;
height:100%;
`
const ProjectItem = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:row;
margin-bottom:10rem;
justify-content:space-between;
@media (max-width: 1000px)
{
flex-direction:column;
}
`
const ProjectCard = styled.div`
width:40%;
height:100%;
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
  padding-top:2rem;
}
`
const Exprience = styled.div`
height:100%;
background-color:#c4cbd8;
margin-bottom:5rem;
width:100vw;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const ExprienceCard = styled.div`
width:70%;
margin-top:5rem;
margin-bottom:15rem;
display:flex;
flex-direction:column;
flex-wrap:nowrap;
justify-content:flex-end;
align-items:flex-end;
@media {max-width:600px}{
  width:90%;
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
  const [flip, set] = useState(false)
  const [count, setCount] = useState(0);
  useEffect(() => {
    let counter = count;
    const interval = setInterval(() => {
      if (counter >= exp.length) {
        clearInterval(interval);
      } else {
        setCount(count => count + 1);
        counter++; // local variable that this closure will see
      }
    }, 1000);
    return () => clearInterval(interval); 
  }, [exp]);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: false,
    reverse: false,
    delay: 200,
    config: 3000,
    // onRest: () => set(!flip),
  })

  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };


  const scrollToTop0 = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  const scrollToTop1000 = () => {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  const scrollToTop3000 = () => {
    window.scrollTo({
      top: 3000,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  const scrollToTop3800 = () => {
    window.scrollTo({
      top: 3800,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  const scrollToTop4500 = () => {
    window.scrollTo({
      top: 4500,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  // const screenSize=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  // console.log(screenSize)
  return (
    <Wrraper>
      <Head>
        <title>Levi Chen FrontEnd Developer, UI UX Designer portfolio, BCIT D3 Web Development 2022 </title>
        <meta name="description"
          content="This portfolio includes web and mobile development projects, especially with MongoDB, Express, React, and Node. Also, there are some UI UX projects in the portfolio. Levi Chen graduated from BCIT D3 Program 2022 who enthuse in Web and Mobile development and design. This portfolio mainly collects the project from 2020-to 2022. " />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainView src='think.png' />
      <Container>
        <NavCon>
          <NavBar />
        </NavCon>
        <MainViewCon>
          <ShortIntroCon>
            {/* <Intro1>Hello, I am Levi.</Intro1> */}
          </ShortIntroCon>

          {/* <PicCon >  <ColorBlock src='Vector.png' /> <PicImg src='LeviChen.png' /> </PicCon> */}
        </MainViewCon>

      </Container>
      <Container2>


        <Content>
          <Title> Who I Am ? </Title> 
          <ProjectItem>
            <ProjectCard>

              <ActionAreaCard
                title="Levi(Yi-Jen) Chen"
                time="38"
                src="levi.png"
                height="375"
                maxHeight='700'
              />
            </ProjectCard>

            <ProjectIntro>
              <Intro>
                Levi has around ten years of experience in industrial design. In 2019, he decided to change his career to become a web developer since he finds there is much potential in the industry. Compared to hardware, a developer can involve deeper in the product.
              </Intro>
              <Intro>
                Recently, he is about to graduate from Digital Design and Development at BCIT. During the study, he learns how to design and 𝗯𝘂𝗶𝗹𝗱 𝗮𝗻 𝗮𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻 𝗮𝗰𝗿𝗼𝘀𝘀 𝗽𝗹𝗮𝘁𝗳𝗼𝗿𝗺𝘀, separately web pages and mobile applications. As a result, he learns how to use 𝗨𝗜/𝗨𝗫, 𝗳𝗿𝗼𝗻𝘁-𝗲𝗻𝗱, 𝗮𝗻𝗱 𝗯𝗮𝗰𝗸-𝗲𝗻𝗱 𝘀𝗸𝗶𝗹𝗹𝘀 in projects. He enjoys creating a product that can solve issues and benefit users as previous designer background.
              </Intro>
              <Intro>
                Currently, he focuses on UI/UX design and front-end development because he likes creating exciting visual enjoyment and a friendly user experience. During the process, he feels a lot of sense of achievement. He is at his best and puts all effort into the next position.

              </Intro>
              <ArrowButton>
                      <ArrowDropUpRoundedIcon onClick={scrollToTop0} sx={{ fontSize: 50 }} />
                      <ArrowDropDownRoundedIcon onClick={scrollToTop1000} sx={{ fontSize: 50 }} />
                    </ArrowButton>
            </ProjectIntro>
          </ProjectItem>
          {/* <ExprienceBGC/> */}
          <Exprience>

            <Title2>Education and Experience</Title2>
            <ExprienceCard>

              {exp.slice(0,count).map((o, i) => <>

                <ExpCard
                  key={i}
                  title={o.title}
                  schoolname={o.schoolname}
                  src={o.src}
                  exp={o.exp}
                  degreed={o.degreed}
                />
              </>
              )}
            </ExprienceCard>
            <ArrowButton>
                      <ArrowDropUpRoundedIcon onClick={scrollToTop1000} sx={{ fontSize: 50 }} />
                      <ArrowDropDownRoundedIcon onClick={scrollToTop3000} sx={{ fontSize: 50 }} />
                    </ArrowButton>
          </Exprience>
          <Tools>
            <Title>Tools</Title>
            <Intro2> Development</Intro2>
            <Tool>
              {webtools.map((o, i) => <>
                <animated.div style={props}>
                  <ToolsCard
                    key={i}
                    title={o.title}
                    toolname={o.toolnaame}
                    src={o.src}
                    exp={o.exp}
                  />
                </animated.div>
              </>
              )}
            </Tool>
              <ArrowButton>
                      <ArrowDropUpRoundedIcon onClick={scrollToTop3000} sx={{ fontSize: 50 }} />
                      <ArrowDropDownRoundedIcon onClick={scrollToTop3800} sx={{ fontSize: 50 }} />
                    </ArrowButton>
            <Intro2> Design</Intro2>
            <Tool>
              {designtools.map((o, i) => <>
                <animated.div style={props}>
                  <ToolsCard
                    key={i}
                    title={o.title}
                    toolname={o.toolnaame}
                    src={o.src}
                    exp={o.exp}
                  />
                </animated.div>
              </>
              )}
            </Tool>
              <ArrowButton>
                      <ArrowDropUpRoundedIcon onClick={scrollToTop3800} sx={{ fontSize: 50 }} />
                      <ArrowDropDownRoundedIcon onClick={scrollToTop4500} sx={{ fontSize: 50 }} />
                    </ArrowButton>
            <Intro2> Industril Design</Intro2>
            <Tool>
              {idtools.map((o, i) => <>

                <ToolsCard
                  key={i}
                  title={o.title}
                  toolname={o.toolnaame}
                  src={o.src}
                  exp={o.exp}
                />
              </>
              )}
            </Tool>
          </Tools>

          <ArrowDropUpRoundedIcon onClick={scrollToTop0} sx={{ fontSize: 50 }} />
        </Content>
      </Container2>
      <Footer />
    </Wrraper>
  )
}
