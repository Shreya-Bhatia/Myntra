import { faArrowRight, faBoltLightning, faCamera, faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Content.css'
import men from './homePage/men.png'
import women from './homePage/women.jpg'
import SlickContent from './SlickContent'
import { Card } from './Card'

export const Content = () => {
    return (
        <div className="container mx-auto">
            <div className="h-8 text-center bg-pink-600 pt-[6px] text-white text-xs px-auto rounded-md w-[350px] mx-auto my-5"><span>On every 15th of the month, get a free accessory!</span></div>

            <form className="flex mt-2 items-center w-[350px] mx-auto">
                <label htmlFor="voice-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <FontAwesomeIcon icon={faSearch} color={'#BEBEBE'} />
                    </div>
                    <input type="text" id="voice-search" className="bg-white border border-[#BEBEBE] text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Search for brands and products" required />
                    <div className="absolute inset-y-0 end-0 flex items-center pe-3">
                        <FontAwesomeIcon icon={faCamera} className='mr-3 fill' color='#333333' />
                        <FontAwesomeIcon icon={faMicrophone} className='fill' color='#333333' />
                    </div>
                </div>
            </form>

            <div className='relative w-[350px] h-[72px] border border-[#FF912E] mx-auto rounded-md mt-3'>
                <div className='absolute inset-0 bg-[#FF912E] opacity-[0.14] rounded-md'></div>
                <h4 className='relative text-[#EF1865] pt-[4px] pl-[8px]'>
                    <span className='pr-2'>
                        <FontAwesomeIcon icon={faBoltLightning} color='#EF1865' />
                    </span>
                    Weekly Challenge
                </h4>
                <p className='text-[#FF912E] text-xs pl-[8px] pt-1'>Show off your style! Enter our dress-up challenge for a chance to win points and recognition.</p>
            </div>
            <div className="absolute top-[258px] right-[15px] rounded-md text-center text-white bg-[#FF912E] w-[222px] h-[24px] text-xs flex items-center justify-center">
                View Challenge for this week
                <span>
                    <FontAwesomeIcon icon={faArrowRight} color='#FFFFFF' className='pl-5' />
                </span>
            </div>
            <div className="flex items-center justify-center mt-9">
                <button className='w-[165px] h-[32px] mr-2 rounded-3xl flex items-center justify-center border text-center border-[#060A2D]'>
                    <img src={men} alt="Men's" className='h-7 w-7 mr-2' />
                    <div className="text-sm">Men's</div>
                </button>
                <button className='w-[165px] h-[32px] ml-2 rounded-3xl flex items-center justify-center border text-center bg-[#060A2D] text-white'>
                    <img src={women} alt="Women's" className='h-7 w-7 mr-2' />
                    <div className="text-sm">Women's</div>
                </button>
            </div>
            <SlickContent />
            <div className="font-bold mt-6 text-center">OUR PICKS FOR YOU</div>
            <div className="flex justify-center items-center mx-auto">
                <Card />
                <Card />
            </div>
        </div>
    )
}
