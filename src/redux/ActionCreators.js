import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites';

//ACTION CREATOR TO ADD COMMENT
export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        //When the identefier of a property is the same as its value, you can pass it as follows:
         campsiteId,            // campsiteId: campsiteId,
         rating,               // rating: rating,
         author,              // author: author,
         text                // text: text
    }
});

//THUNK ---> MIDDLEWARE <---- FOR ACTION CREATOR TO ADD CAMPSITE 
export const fetchCampsites = () => dispatch => {

    dispatch(campsitesLoading());

    setTimeout(() => {
        dispatch(addCampsites(CAMPSITES));
    }, 2000)
};

//ACTION CREATOR FOR LOADING
export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
});

//ACTION FOR FAILURE
export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

//ACTION CREATOR TO ADD CAMPSITES
export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
})
