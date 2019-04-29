import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

export default class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    };

    static defaultProps = {
        comments: []
    };


    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) =>
                    <Comment
                        comment={comment}
                        key={i}/>
                )}
            </div>
        )
    }
}
