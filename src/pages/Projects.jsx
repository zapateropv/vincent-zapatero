import React from 'react'
import ProjectTemplate from '../components/ProjectTemplate'
import ProjectTop from '../components/ProjectTop'
import { forwardRef } from 'react'

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <ProjectTop/>
      <ProjectTemplate />
    </div>
  )
})

export default Projects
