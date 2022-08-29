const initState = {
    userJwt: ""
}
export const rootReducer = (state = initState, action) => {
    console.log("rootred", state, action)
    if (action.type === 'SET_JWT') {
        return {
            ...state,
            userJwt: action.jwt
        }
    }
    return state;
}