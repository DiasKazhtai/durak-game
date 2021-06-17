const defaultState = {};


export const customerReducer = (state = defaultState, action) => {
    switch(action.payload) {
        default:
            return state;
    };
}