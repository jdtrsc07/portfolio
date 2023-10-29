import React from 'react'


interface projectitem {
    img: string;
    title: string;
    
  }


const ProjectItem: React.FC<projectitem> = ({img, title}) => {
    return(
        <div className='relative flex items-center justify-center b-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
           <img src={img} alt="/" className='rounded-xl group-hover:opacit-10' />
           <div>
            <h3> {title} </h3>
           </div>
        </div>
    )
}

export default ProjectItem