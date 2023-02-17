import React from 'react'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { YOUTUBE_VIDEO_API } from '../utils/constants';

import VideoCard from './VideoCard';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {

    getVideos();

  }, []);

  const getVideos = async () => {

      const data = await fetch(YOUTUBE_VIDEO_API);

      const json = await data.json();

      //console.log(json);

      setVideos(json.items);
  }
  return (
    <React.Fragment>
        <div className='grid grid-cols-4'>
        {videos.map(video => 
          <Link to={"/watchpage?v="+ video.id} key={video.id}>
            <VideoCard info={video}/>
          </Link>
        )}
        </div>
    </React.Fragment>
  )
}

export default VideoContainer;
