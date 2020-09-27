import * as ActionTypes from './ActionTypes';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        //When the identefier of a property is the same as its value, you can pass it as follows:
         campsiteId,            // campsiteId: campsiteId,
         rating,               // rating: rating,
         author,              // author: author,
         text                // text: text
    }
})