import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import { initComments } from '../reducers/comments';

class CommentListContainer extends Component {
    static propTypes = {
        comments: PropTypes.array,
        initComments: PropTypes.func,
        onDeleteComment: PropTypes.func
    };

    componentWillMount () {
        this._loadComments();
    }

    _loadComments () {
        let comments = localStorage.getItem('comments');
        comments = comments ? JSON.parse(comments) : [];
        this.props.initComments(comments);
    }


    render () {
        return (
            <CommentList
                comments={this.props.comments}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        initComments: (comments) => {
            dispatch(initComments(comments))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentListContainer)
