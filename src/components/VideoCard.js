import React from 'react';

const VideoCard = ({ info }) => {

    //console.log(info);

    const { snippet, statistics } = info;

    const { channelTitle, title, thumbnails, publishedAt } = snippet;

    const { viewCount } = statistics;

    const publishedDate = new Date(publishedAt);

    const formattedviewCount = Number(viewCount);
    
    const kFormatter = (viewCount) => {
      return Math.abs(viewCount) > 999 ? Math.sign(viewCount)*((Math.abs(viewCount)/1000).toFixed(1)) + 'k' : Math.sign(viewCount)*Math.abs(viewCount)
    }
    

  return (
    <React.Fragment>
    
        <div className='grid-cols-4'>
        <div className="block p-4">
        <img
            alt="thumbnails"
            src={thumbnails.medium.url}
            className="h-52 w-full object-cover rounded-lg"
        />

        <h3 className="mt-2 max-w-sm text-black">{title}</h3>
        <p className="mt-2 font-sm text-gray-400">{channelTitle}</p>
        <div className="flex gap-2 items-center">
          <span className='text-gray-400'>{kFormatter(formattedviewCount)} views</span>
          <span>.</span>
          <span className='text-gray-400'>{publishedDate.getDay()} days ago </span>
        </div>

        </div>
        </div>
        
    </React.Fragment>
  )
}

export default VideoCard;
