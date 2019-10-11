const defaultState = {
    token: '',
    user_id: '',
    user_recipes: [], 
    planned_meals: [],
    fetching: false
}

const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        // case "LOGIN_USER":
        //     return {...state, user_id: action.user_id}
            
        case "GET_USER_RECIPES_REQUEST":
           return {...state, fetching:true}
           
        case "ADD_USER_RECIPES": 
           return {...state, fetching:false, user_recipes: action.user_recipes }
            
        default:
           return state;
    }
}

export default rootReducer