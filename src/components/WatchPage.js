import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";


const WatchPage = () => {

    const [searchprams] = useSearchParams();

    console.log(searchprams.get("v"));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    },);

    return(

        <React.Fragment>
            <div className="p-16">
                <iframe width="1000" height="675" 
                src={"https://www.youtube.com/embed/"+searchprams.get("v")}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
                </iframe>
            </div>
        </React.Fragment>
    )
}


export default WatchPage;