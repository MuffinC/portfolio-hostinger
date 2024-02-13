import React from 'react';
import ProjectItem from './ProjectItem';

import aiimge from '../assets/ai.jpg';
import leetimg from '../assets/leet.jpg';
import rpaimg from '../assets/rpa.png';
import webimg from '../assets/website.png';




const Projects = () => {
  return (
    <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae officiis dolores quo porro? Numquam adipisci rerum suscipit beatae maiores molestias eius, dolor, dolorum, iste illum vel? Velit, praesentium dicta?
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={aiimge} title='AI app'/>
            <ProjectItem img={leetimg} title='Leet app'/>
            <ProjectItem img={rpaimg} title='Rpa app'/>
            <ProjectItem img={webimg} title='Web app'/>
        </div>

    </div>
  );
};

export default Projects;