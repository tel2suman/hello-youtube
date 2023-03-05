
import React from "react"

const Comment = ({data}) => {

    const {name, time, text } = data;

    return(

        <React.Fragment>

            <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                    <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt=""/>
                </div>
                <div className="flex-1 rounded-lg px-4 py-0 sm:px-6 sm:py-0 leading-relaxed my-5">
                    <strong>{name}</strong> <span className="text-xs text-gray-400">{time} PM</span>
                    <p className="text-sm">{text}</p>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Comment;