const defaultState = {
    token: '',
    user_id: '',
    user_recipes: [{recipe:{title:"fewd"}}], 
    planned_meals: []
}

const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            const newState = {...state, user_id: action.user_id}
            return newState
        default:
           return state;
    }
}

export default rootReducer