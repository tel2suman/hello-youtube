import React from 'react'

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { YOUTUBE_SEARCH_RESULTS_API, YOUTUBE_VIDEO_API } from '../utils/constants';

import SearchedVideoCard from './SearchedVideoCard';

import Shimmer from './Shimmer';

import VideoCard from './VideoCard';

const VideoContainer = () => {

  const {searchQuery, isSearched } = useSelector((store)=>store.results);

  const [videos, setVideos] = useState([]);

  const [isCalled, setIsCalled] = useState(false);

  const [resultsVideos, setresultsVideos] = useState([]);

  useEffect(() => {

    //getVideos();

    //searchedVideos();

    const getVideos = async () => {

      const data = await fetch(YOUTUBE_VIDEO_API);

      const json = await data.json();

      //console.log(json);

      setVideos(json.items);
    }

    const searchedVideos = async () => {

      const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + searchQuery);

      const json = await data.json();

      console.log(json);

      setresultsVideos(json.items);

      setIsCalled(true);

    }

    isSearched ? searchedVideos() : getVideos();

  }, [isSearched , searchQuery]);


  if (isCalled) {
    return (
      <React.Fragment>
      {resultsVideos.map(video =>
        <Link to={"/watchpage?v="+ video.id.videoId} key={video.videoId}>
          <SearchedVideoCard info={video}/>
        </Link>
      )}
      </React.Fragment>
    )
  }
  
  return (videos?.length === 0 ) ? <Shimmer/> : (
    <React.Fragment>
        <div className='grid grid-cols-4'>
          {videos.map(video => 
            <Link to={"/watchpage?v="+ video.id} key={video.id}>
              <VideoCard info={video}/>
            </Link>
          )}
        </div>
        {/* {resultsVideos.length > 0 && <SearchedVideoCard info={resultsVideos[0]}/> } */}
    </React.Fragment>
  )
}

export default VideoContainer;
