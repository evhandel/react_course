import React from 'react'

function Comment(props) {
    return <div>
        <h4>{props.comment.user} says:</h4><p>{props.comment.text}</p>
    </div>
}

export default Comment