
import React from "react"

//import Comment from "./Comment";
import CommentsReplyList from "./CommentsReplyList";

const CommentsData = [
    {
        name: "Suman",
        time: "5:34",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
        replies: [ 
            {
                name: "Suman",
                time: "5:34",
                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                replies: []
            },
            {
                name: "Suman",
                time: "5:34",
                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                replies: []
            },
            {
                name: "Suman",
                time: "5:34",
                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                replies: [
                    {
                        name: "Suman",
                        time: "5:34",
                        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                        replies: [
                            {
                                name: "Suman",
                                time: "5:34",
                                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                                replies: [
                                    {
                                        name: "Suman",
                                        time: "5:34",
                                        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                                        replies: []
                                    },
                                ],
                            },
                            {
                                name: "Suman",
                                time: "5:34",
                                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                                replies: []
                            }
                        ]
                    }
                ]
            },
        ],
    },
    {
        name: "Suman",
        time: "5:34",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
        replies: []
    },
    {
        name: "Suman",
        time: "5:34",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
        replies: []
    },
    {
        name: "Suman",
        time: "5:34",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
        replies: []
    }
];



const CommentsContainer = () => {

    return(
        <React.Fragment>

        <h3 className="mb-4 text-lg font-semibold text-gray-900">Comments</h3>

        <CommentsReplyList comments={CommentsData}/>
            
        </React.Fragment>
    )

}

export default CommentsContainer;
