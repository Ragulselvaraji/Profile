import React from 'react'
import Profile from '../assets/profile2.jpg'
import Hire from '../assets/hire.png'

const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
  
    <div id='home' className='flex h-screen min-h-screen' >
    <div className='bg-gray-600 text-white flex flex-col items-start justify-center  h-3/9 w-1/2 '>
      <h1><span className='text-2xl mt-8 ml-8 pb-8'>Hello,</span></h1>
      <p className='text-5xl ml-8 font-bold'>I'm<span className='text-yellow-400'> Ragul</span><br/>Website Designer
      </p>
      <p className='ml-8 mt-4'>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.</p>
      <button className='bg-white flex hover:bg-yellow-500 duration-300 p-2 text-gray-900 font-bold ml-8 mt-4 rounded' onClick={()=>scrollToSection("contact")}>
      <img className='w-4 h-4 mt-1 ml-1 mr-2' src={Hire}></img>Hire Me
        
      </button>
    </div>
    <div className=' w-1/2 h-3/9 flex justify-center items-center bg-gray-500 '>
    <img className='h-3/4 w-3/4 ml-8 rounded-full' src={Profile} alt="image"></img>
    
    </div>
    </div>
  )
}

export default Home
