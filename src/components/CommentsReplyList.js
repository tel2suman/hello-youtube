
import React from "react";

import Comment from "./Comment";

const CommentsReplyList = ({comments}) => {

    return (

        <React.Fragment>

            {comments.map((comment,index) => {
                return (
                    <div>
                        <Comment key={index} data={comment}/>
                        <h4 className="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">Replies</h4>
                        <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2">
                            <CommentsReplyList comments={comment.replies}/>
                        </div>
                    </div>
                )
            })}

        </React.Fragment>
    )
}

export default CommentsReplyList;