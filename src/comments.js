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
                    return{
                        id: comment.id,
                        text: action.text,
                        votes: comment.votes
                    };
                }
            });
            return Object.assign({}, state, {
                comments: state.comments.splice(action.id,1,editedComment)
            });
        case THUMB_UP_COMMENT:
            const thumbUpComment = state.comments.filter(comment => {
                if (comment.id === action.id) {
                    return{
                        id: action.id,
                        text: comment.text,
                        votes: comment.votes + 1
                    };
                }
            });
            return Object.assign({}, state, {
                comments: state.comments.splice(action.id,1,thumbUpComment)
            });
        case THUMB_DOWN_COMMENT:
            const thumbDownComment = state.comments.filter(comment => {
                if (comment.id === action.id) {
                    return{
                        id: action.id,
                        text: comment.text,
                        votes: comment.votes + 1
                    };
                }
            });
            return Object.assign({}, state, {
                comments: state.comments.splice(action.id,1,thumbDownComment)
            });
        default:
            return state;
    }
}

export default comments;
