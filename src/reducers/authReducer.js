const initialState = {
    isAuthorized: true
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_AUTH': 
            return {
                ...state,
                isAuthorized: action.payload
            }
        default: 
            return state;
    }
}

export default authReducer;