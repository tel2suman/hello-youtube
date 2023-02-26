
import React from 'react'

const Shimmer = () => {
    
  return (

    <React.Fragment>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-10 p-6'>
            {
                Array(50).fill("").map((e,index)=>

                <div className="bg-white w-full shadow-lg rounded-2xl" key={index}>
                <div className="h-48 p-3 overflow-hidden bg-gray-200 animate-pulse">
                </div>
                <div className="p-3 h-">
                    <div className="grid grid-cols-3 gap-4 mt-2">
                        <div className="h-8 bg-gray-200 rounded animate-pulse">
                        </div>
                        <div className="h-8 bg-gray-200 rounded animate-pulse">
                        </div>
                        <div className="h-8 bg-gray-200 rounded animate-pulse">
                        </div>
                        <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse">
                        </div>
                        <div className="h-8 bg-gray-200 rounded  animate-pulse">
                        </div>
                        <div className="...">
                        </div>
                        <div className="col-span-2 ...">
                        </div>
                    </div>
                </div>
            </div>
            )}
            
        </div>
      
    </React.Fragment>
  )
}

export default Shimmer
