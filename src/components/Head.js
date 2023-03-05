import React from 'react'

import ytubelogo from '../assets/images/Logo_of_YouTube_(2015-2017).svg.webp'

import { FaBars } from "react-icons/fa";

import { useState, useEffect } from 'react';

import {FaSistrix} from "react-icons/fa";

import {FaUserCircle} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { searchedFor } from '../utils/resultsSlice';

const Head = () => {

  const [searchquery, setSearchquery] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() =>{

    //API call
    const timer = setTimeout(() => {
      
      if (searchCache[searchquery]) {
        setSuggestions(searchCache[searchquery]);
      } else {
        getSearchSuggestions();
      }
      
      getSearchSuggestions()
    
    }, 200);

    //console.log(searchquery);

    return () => {
      clearTimeout(timer);
    };

  },[searchquery]);

  const getSearchSuggestions = async () => {

    console.log(searchquery);

    const data = await fetch(YOUTUBE_SEARCH_API+ searchquery);

    const json = await data.json();

    //console.log(json[1]);

    setSuggestions(json[1]);

    dispatch(cacheResults({
      [searchquery]: json[1],
    }));

  }

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  const queryClickHandler = () => {
    if (searchquery === "") return null;
      dispatch(searchedFor(searchquery));
  };

  return (
    <React.Fragment>
    <div className='grid grid-flow-col p-2 m-1 shadow-lg'>
        <div className='flex col-span-1'>
            <FaBars className='cursor-pointer mt-2 text-2xl mx-5' onClick={() => toggleMenuHandler()}/>
            <a href='/'><img src={ytubelogo} className='w-24' alt='youtube-logo'/></a>
        </div>
        <div className='col-span-10'>
          <div className='flex justify-center'>
            <input 
            className='w-1/2 border border-gray-500 py-1 px-4 rounded-l-full' 
            type="text" placeholder='Search'
              value={searchquery}
              onChange={(e)=> setSearchquery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() =>setShowSuggestions(false)}
              onClick={() => queryClickHandler()}
            />
            <button className='border border-gray-400 px-4 py-2 rounded-r-full bg-gray-200'><FaSistrix/></button>
            </div>
            {showSuggestions && (
              <div className=' py-4 justify-start ml-[17rem] absolute bg-white w-[34rem] rounded-lg shadow-lg'>
              <ul>
              {suggestions.map(suggestion=>(
                <li key={suggestion} onClick={() => queryClickHandler()} className='flex items-center mt-2 hover:bg-gray-100 py-2 px-2'><FaSistrix className='mx-1'/>
                {suggestion}</li>
              ))}
              </ul>
            </div>
            )}    
        </div>
        <div className='col-span-1 mr-auto'>
            <FaUserCircle className='text-3xl mt-1'/>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Head;
