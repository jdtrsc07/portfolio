import React from "react"
import WorlItem from './WorkItem'
const data =[
    {
        year: 2010,
        title: 'Machine Operator',
        duration: '3 years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorem quos esse consequatur.'
    },
    {
        year: 2010,
        title: 'Machine Operator',
        duration: '3 years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorem quos esse consequatur.'
    },
    { 
        year: 2010,
        title: 'Machine Operator',
        duration: '3 years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorem quos esse consequatur.'
    },
    {
        year: 2010,
        title: 'Machine Operator',
        duration: '3 years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorem quos esse consequatur.'
    }
]
const Work = () => {
    return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
        {data.map((item, idx)=>(
            <WorlItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
        ))}
    </div>
    )
}

export default Work;