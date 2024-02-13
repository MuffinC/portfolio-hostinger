import React from 'react'
import Workitem from './Workitem'

const data =[
  {
    year:2023,
    title: 'Histoindex, Software Engineer',
    duration:'Current',
    details:'lorem ipsum '
},
{
  year:2023,
  title: 'Ministry of Home Affiars, Software and Artificial Intelligence Intern',
  duration:'6 Months',
  details:'lorem ipsum '
},
{
  year:2022,
  title: 'Accenture, Data Migration Intern',
  duration:'3 Months',
  details:'lorem ipsum '
},
    {
        year:2016,
        title: 'Scoot, Commercial Intern',
        duration:'6 Months',
        details:'lorem ipsum '
    },
    
    
    
]

const work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text -[#001b5e]'>Work</h1>
      {data.map((item, idx)=> (
        <Workitem 
        key={idx} 
        year={item.year} 
        title={item.title} 
        duration={item.duration} 
        details={item.details}
        />

      ))}
    </div>
  )
}

export default work