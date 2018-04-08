import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_DOWN_COMMENT, THUMB_UP_COMMENT} from './actions';

const initialState = {
    comments: [],
    users: []
};

function comments(state = initialState, action) {
    switch (action.type) {
        case
        ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        id: action.id,
                        text: action.text,
                        votes: 0
                    }
                    , ...state]
            });
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });
        case EDIT_COMMENT:
            const editedComment = state.comments.filter(comment => {
                if (comment.id === action.id) {
                    return {
                        id: comment.id,
                        text: action.text,
                        votes: comment.votes
                    };
                }
            });
            return Object.assign({}, state, {
                comments: state.comments.splice(action.id, 1, editedComment)
            });
        case THUMB_UP_COMMENT:
            return state.comments.map(comment => {
                if(comment.id === action.id) {
                    return {...comment, votes: comment.votes + 1}
                }
                return comment;
            });
        case THUMB_DOWN_COMMENT:
            return state.comments.map(comment => {
                if(comment.id === action.id) {
                    return {...comment, votes: comment.votes - 1}
                }
                return comment;
            });
        default:
            return state;
    }
}

export default comments;
