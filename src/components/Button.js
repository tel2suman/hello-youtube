
import React from "react"

const Button = ({name}) => {

    return (
        <React.Fragment>
            <button className="inline-flex items-center px-4 py-2 mt-4 mx-3 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">{name}</button>
        </React.Fragment>
    )
}

export default Button;