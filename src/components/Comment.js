import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    };

    constructor () {
        super();
        this.state = { timeString: '' };
    }

    handleDeleteComment () {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }

    render () {
        const comment = this.props.comment;
        return (
            <div className='comment'>
                <div className='comment-user'>
          <span className='comment-username'>
            {comment.username}
          </span>：
                </div>
                <p>{comment.content}</p>
                <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
            </div>
        )
    }
}
