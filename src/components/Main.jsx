import React from 'react'
import water from '../../images/godafoss-1840758_1280.jpg'
import {TypeAnimation} from 'react-type-animation'
import {FaLinkedin} from 'react-icons/fa'

const Main = () => {
  return ( 
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={water} alt=""/>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
          <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800 '>I'm Mervyn Chiong</h1>
            <h2 className='flex sm:text-3xl text-2xl pt04 text-gray-800'>I'm a
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Software and Hardware Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Tech Enthusiast',
        2000,
        'Book Fanatic',
        2000,

      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', paddingLeft:'5px' }}
      repeat={Infinity}
    />

            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
              <FaLinkedin className="cursor-pointer" size={20}/> 
            </div>
          </div>

        </div>
    </div>
  ) 
}

export default Main