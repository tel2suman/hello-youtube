
import React from 'react'

const CommentsList = ({ info }) => {

     //console.log(info);

     const { snippet } = info;

     const { authorDisplayName, textOriginal, authorProfileImageUrl } = snippet;

     const currentHours = new Date().getHours();

  return (


    <React.Fragment>
    <div className='p-7'>
        <div className='flex'>
            <img src={authorProfileImageUrl} className='w-10 h-10 rounded-full' alt='profileurl'/>
            <div className='mx-5'>
              <h3 className='text-base font-medium'>{authorDisplayName}</h3><span className='text-sm'>{currentHours} hours ago</span>
              <h6>{textOriginal}</h6>
            </div>
        </div>
    </div>
      
    </React.Fragment>
  )
}

export default CommentsList;
