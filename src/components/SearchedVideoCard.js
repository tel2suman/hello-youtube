
import React from "react";

const SearchedVideoCard = ({info}) => {

    const {snippet} = info;

    const {title, channelTitle , thumbnails, publishedAt, description } = snippet;

    const publishedDate = new Date(publishedAt);

    return (

        <React.Fragment>

        <div className="flex rounded-lg p-4 shadow-indigo-100">
            <img
                alt="thumbnails"
                src={thumbnails.high.url}
                className="h-56 w-96 rounded-md object-cover"
            />

            <div className="mt-2 w-full p-5 py-2">
                <div>
                    <div>
                        <h3 className="mt-2 max-w-sm text-black text-2xl font-semibold">{title}</h3>
                        <p className="mt-2 font-sm text-black">{channelTitle}</p>
                        <p className="mt-2 font-sm text-black">{publishedDate.getDay()} days ago</p>
                        <p className="mt-5 font-sm text-black">{description}</p>
                    </div>
                </div>
            </div>
        </div>

        </React.Fragment>
    )
}

export default SearchedVideoCard;