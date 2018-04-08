import uuid from 'uuid';


export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
/*export addComment;
export editComment;
export removeComment;
export thumbDown;
export thumbUp;*/


export function addComment (text) {
    return{
        type: ADD_COMMENT,
        text,
        id: uuid.v4
    }
}

export function editComment (id,newText) {
    return{
        type:EDIT_COMMENT,
        newText,
        id
    }
}

export function removeComment (id) {
    return{
        type:REMOVE_COMMENT,
        id
    }
}

export function thumbUp (id) {
    return{
        type:THUMB_UP_COMMENT,
        id
    }
}

export function thumbDown (id) {
    return{
        type:THUMB_DOWN_COMMENT,
        id
    }
}

