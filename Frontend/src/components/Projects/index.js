import React from 'react'
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const Projects = ({openModal,setOpenModal}) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title className='FadeInLeft'>Projects</Title>
        <Desc className='FadeInLeft' style={{marginBottom: 30}}>
           Here are some of the projects I have worked on. From Full stack to machine learning, I have worked on numerous small and large scale projects.
        </Desc>
        {/* <ToggleButtonGroup className='FadeInLeft'>
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>Web Apps</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>Web Apps</ToggleButton>
          }
          <Divider />
          {toggle === 'android app' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>Mobile Apps</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>Mobile Apps</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>Machine learning</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>Machine learning</ToggleButton>
          }
        </ToggleButtonGroup> */}
        <CardContainer className='FadeInLeft' >
          {projects
            .map((project) => (
              <ProjectCard  project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
