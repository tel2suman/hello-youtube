/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect , useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { YOUTUBE_COMMENTS_API } from "../utils/constants";
import CommentsList from "./CommentsList";


const WatchPage = () => {

    const [searchprams] = useSearchParams();

    const [comments, setComments] = useState([]);

    console.log(searchprams.get("v"));

    const dispatch = useDispatch();

    useEffect(() => {

         getComments();

        dispatch(closeMenu());
    },[]);

    const getComments = async () => {

         const data = await fetch(YOUTUBE_COMMENTS_API);

         const json = await data.json();

         console.log(json);

         setComments(json.items);
    }

    return(

        <React.Fragment>
            <div className="p-16">
                <iframe width="1000" height="675" 
                src={"https://www.youtube.com/embed/"+searchprams.get("v")}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
                </iframe>

                <div>
                    <h5 className="text-2xl my-4">Comments</h5>
                    {comments.map((comment) =><CommentsList key={comment.id} info={comments[0]}/>)}
                    
                </div>
            </div>

        </React.Fragment>
    )
}


export default WatchPage;