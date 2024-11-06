import React from 'react'
import Communication from '../assets/Communication.jpg'
import CSS from '../assets/CSS.jpg'
import JavaScript from '../assets/JavaScript.jpg'
import Python from '../assets/Python.jpg'
import react from '../assets/react.jpg'

function Certification() {
  return (
    <div id='certifications' className="flex flex-col min-h-screen min-w-screen bg-gray-400">
        <h1 className='text-3xl font-bold flex mt-6 mb-6 justify-center '>Certifications</h1>
      <div className="m-4 flex justify-around flex-wrap gap-8 max-w-screen"> 
      <img className='h-90 w-96' src={Communication}></img>
      <img className='h-90 w-96' src={CSS}></img>
      <img className='h-90 w-96' src={JavaScript}></img>
      <img className='h-90 w-96' src={Python}></img>
      <img className='h-90 w-96' src={react}></img>

      </div> 
    </div>
  )
}

export default Certification
