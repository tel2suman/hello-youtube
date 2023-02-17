import React from 'react';

const VideoCard = ({ info }) => {

    //console.log(info);

    const { snippet, statistics } = info;

    const { channelTitle, title, thumbnails } = snippet;
    

  return (
    <React.Fragment>
    
        <div className='grid-cols-4'>
        <div className="block p-4">
        <img
            alt="thumbnails"
            src={thumbnails.medium.url}
            className="h-52 w-full object-cover rounded-lg"
        />

        <p className="mt-2 max-w-sm text-gray-700">{title}</p>
        <h3 className="mt-2 text-xl font-bold text-gray-900">{channelTitle}</h3>
        <p className="mt-2 max-w-sm text-gray-700">{statistics.viewCount}</p>

        </div>
        </div>
        
    </React.Fragment>
  )
}

export default VideoCard;
