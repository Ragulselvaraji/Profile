import React from 'react'
import FineArts from '../assets/FineArts.jpg'
import Movie1 from '../assets/MovieList.jpg'
import Movie2 from '../assets/MovieList2.jpg'
import RPS from '../assets/rps.jpg'
import Portfolio from '../assets/Portfolio.jpg'
const Projects = () => {
  return (
    
        <div id='projects' className="flex flex-col min-w-screen min-h-screen bg-yellow-200 ">
            <h1 className='flex justify-center font-semibold text-3xl my-4'>Projects</h1>
            
            <div className="flex justify-around flex-wrap p-2 gap-4 m-2 max-w-screen">
                <a className="flex-col bg-gray-100 flex-wrap m-2 rounded-lg max-w-screen" style={{ width: '47%', minWidth: '45px' }} href="https://ragulselvaraji.github.io/fine-arts/">
                <div className="">
                <img className='h-90 w-90 m-2 p-2' src= {FineArts} alt="projects"></img>
                <p className='m-4'>Heber's ArtSpark" showcases our achievements and streamlines the registration process for the Fine Arts Club.</p>
                </div>
                </a>
                <a className="flex-col bg-gray-100 flex-wrap m-2 rounded-lg max-w-screen" style={{ width: '47%', minWidth: '45px' }} href="https://ragulselvaraji.github.io/IMDB/">
                <div >
                <img className='h-90 w-90 m-2 p-2' src= {Movie1} alt="projects"></img>
                <p className='ml-2'>An application for creating a Watchlist with IMDb ratings, retrieving data through the TMDB API.This application was built using React.</p>
                </div>
                </a>
                <a className="flex-col bg-gray-100 flex-wrap m-2 rounded-lg max-w-screen" style={{ width: '47%', minWidth: '45px' }} href="https://ragulselvaraji.github.io/rock-paper-scissors/">
                <div >
                <img className='h-90 w-90 m-2 p-2' src= {RPS} alt="projects"></img>
                <p className='m-4'>A stone-paper-scissors game designed using JavaScript.</p>
                </div>
                </a>
                <a className="flex-col bg-gray-100 flex-wrap m-2 rounded-lg max-w-screen"style={{ width: '47%', minWidth: '45px' }} href="https://ragulselvaraji.github.io/portfolio/ ">
                <div >
                <img className='h-90 w-90 m-2 p-2' src= {Portfolio} alt="projects"></img>
                <p className='m-4'>A personal website showcasing my details, skills, and certifications. It is built using HTML, CSS, and JavaScript for the frontend.</p>
                </div>
                </a>
            </div>

        </div>
      
   
  )
}

export default Projects
