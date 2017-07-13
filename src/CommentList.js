import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
        return <div>
                <button onClick={this.toggleOpen}>{this.state.isOpen ? 'Hide' : 'Show'} comments</button>
                {this.getBody()}
            </div>
    }

    getBody() {
        if (!this.state.isOpen) return ''
        const {comments} = this.props
        if (comments && comments.length)
            return <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
            </ul>
        else return <h4>No comments yet</h4>

    }

    toggleOpen = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList