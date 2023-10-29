import React from 'react'
import ProjectItem from './ProjectItem'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'


const Projects = () =>{
    return(
        <div id="projects" className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi culpa tempora ea nostrum sequi ipsa! Possimus voluptatibus earum illo ratione.</p>
        <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem img={image2} title='image2'/>
            <ProjectItem img={image3}  title='image3'/>
            <ProjectItem img={image4}  title='image4'/>
            <ProjectItem img={image5}  title='image5'/>
        </div>
        </div>
    )
}

export default Projects