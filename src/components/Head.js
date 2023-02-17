import React from 'react'

import ytubelogo from '../assets/images/Logo_of_YouTube_(2015-2017).svg.webp'

import { FaBars } from "react-icons/fa";

import {FaSistrix} from "react-icons/fa";

import {FaUserCircle} from "react-icons/fa"
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <React.Fragment>
    <div className='grid grid-flow-col p-2 m-1 shadow-lg'>
        <div className='flex col-span-1'>
            <FaBars className='cursor-pointer mt-2 text-2xl mx-5' onClick={() => toggleMenuHandler()}/>
            <a href='/'><img src={ytubelogo} className='w-24' alt='youtube-logo'/></a>
        </div>
        <div className='flex col-span-10 justify-center'>
            <input className='w-1/2 border border-gray-500 py-1 px-4 rounded-l-full' type="text" placeholder='Search'/>
            <button className='border border-gray-400 px-4 py-2 rounded-r-full bg-gray-200'><FaSistrix/></button>
        </div>
        <div className='col-span-1 mr-auto'>
            <FaUserCircle className='text-3xl mt-1'/>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Head;
