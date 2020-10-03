import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


// --------------CAMPSITES ACTIONS-----------------

//THUNKED ---> MIDDLEWARE <---- FOR ACTION CREATOR TO ADD CAMPSITE 
export const fetchCampsites = () => dispatch => {

    dispatch(campsitesLoading());

    return fetch(baseUrl + 'campsites')
        .then(response => {
                if (response.ok){
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(campsites => dispatch(addCampsites(campsites)))
        .catch(error => dispatch(campsitesFailed(error.message)));
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
        .then(response => {
                if (response.ok){
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
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

//----------ACTION CREATORs TO ADD COMMENT ---
//This one UPDATES LOCAL REDUX STORE
export const addComment = comment => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
})
//This one HANDLES ASYNCHRONOUS CALL TO FETCH AND POST A NEW COMMENT TO THE SERVER - With THUNK 'dispatch' Middleware
export const postComment = (campsiteId, rating, author, text) => dispatch => {
    const newComment = {
        //When the identefier of a property is the same as its value, you can pass it as follows:
         campsiteId,            // campsiteId: campsiteId,
         rating,               // rating: rating,
         author,              // author: author,
         text                // text: text
    };
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
            if (response.ok){
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log('post comment', error.message);
            alert('Your comment could not be posted\nError: ' + error.message);
        });
};


// ----------------- PROMOTIONS ACTIONS -------------------

//THUNKED ACTION CREATOR FOR ADDING PROMOTIONS ==> w/THUNK MIDDLEWARE 

export const fetchPromotions = () => dispatch => {

    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => {
                if (response.ok){
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)))
        .catch(error => dispatch(promotionsFailed(error.message)));
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

//ACTION CREATOR TO ADD 
export const addPromotions = promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});


// ------------PARTNERS ACTIONS --------------
//THUNKED ACTION CREATOR
export const fetchPartners = () => dispatch => {

    dispatch(partnersLoading());

    return fetch(baseUrl + 'partners')
        .then(response => {
                if (response.ok){
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(partners => dispatch(addPartners(partners)))
        .catch(error => dispatch(partnersFailed(error.message)));
};


//ACTION CREATOR FOR LOADING
export const partnersLoading = () => ({
    type: ActionTypes.PARTNERS_LOADING
});

//ACTION FOR FAILURE
export const partnersFailed = errMess => ({
    type: ActionTypes.PARTNERS_FAILED,
    payload: errMess
});

//ACTION CREATOR TO ADD 
export const addPartners = partners => ({
    type: ActionTypes.ADD_PARTNERS,
    payload: partners
});


// ------------POST FEEDBACK ---------
export const postFeedback = (feedback) => () => {
    const newFeedback = {
        feedback
    }
    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
            if (response.ok){
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => {
            alert(`Thank you for your feedback\n ${JSON.stringify(response)}`)
            console.log(response)
    })
        .catch(error => {
            console.log('post feedback', error.message);
            alert('Your feedback could not be posted\nError: ' + error.message);
        });
};