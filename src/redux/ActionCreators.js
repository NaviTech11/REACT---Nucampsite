import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

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

// --------------CAMPSITES ACTIONS-----------------

//THUNK ---> MIDDLEWARE <---- FOR ACTION CREATOR TO ADD CAMPSITE 
export const fetchCampsites = () => dispatch => {

    dispatch(campsitesLoading());

    return fetch(baseUrl + 'campsites')
        .then(response => response.json())
        .then(campsites => dispatch(addCampsites(campsites)));
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
});

// -----------COMMENTS ACTIONS----------------

//ACTION CREATOR FOR ADD_COMMENTS ===>w/THUNK Middleware  
export const fetchComments = () => dispatch => {
    return fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
}

//ACTION CREATORS FOR HANDLING COMMENTS
export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

// ----------------- PROMOTIONS ACTIONS -------------------

//ACTION CREATOR FOR ADDING PROMOTIONS ==> w/THUNK MIDDLEWARE 

export const fetchPromotions = () => dispatch => {

    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)));
};

//ACTION CREATOR FOR LOADING
export const promotionsLoading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING
});

//ACTION FOR FAILURE
export const promotionsFailed = errMess => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
});

//ACTION CREATOR TO ADD CAMPSITES
export const addPromotions = promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});


