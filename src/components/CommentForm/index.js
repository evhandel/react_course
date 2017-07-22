import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class CommentForm extends Component {
    static propTypes = {

    };

    state = {
        user: '',
        text: ''
    }

    limits = {
        max: {
            user:30,
            text:150
        },
        min: {
            user:10,
            text:30
        }
    }

    render() {
        return (
            <div>
                <div>
                    user: <input type = "text"
                             value = {this.state.user}
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')} />
                </div>
                <div>
                    text: <textarea
                             value = {this.state.text}
                             onChange = {this.handleChange('text')}
                             className = {this.getClassName('text')} />
                </div>
            </div>
        )
    }

    handleChange = type => ev => {
        const {value} = ev.target
        if (type == 'user' && value.length > 30 || type == 'text' && value.length > 150) {
            return
        }

        this.setState({
            [type]: value
        })
    }

    getClassName = type => {
        if (this.state[type].length && this.state[type].length < this.limits.min[type]) return 'comment-from__input_invalid'
        return ''

    }
}

export default CommentForm