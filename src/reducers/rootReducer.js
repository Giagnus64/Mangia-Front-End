const defaultState = {
    token: '',
    user_id: '1',
    username: 'bob',
    user_recipes: [], 
    planned_meals: [],
    fetching: false
}

const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        // case "LOGIN_USER":
        //     return {...state, user_id: action.user_id}
        case "SUBMIT_NEW_RECIPE":
            return {...state, fetching:true}

        case "ADD_NEW_RECIPE":
            return {...state, fetching:false, user_recipes: [...state.user_recipes, action.newRecipe]}
            
        case "GET_USER_RECIPES_REQUEST":
           return {...state, fetching:true}
           
        case "ADD_USER_RECIPES": 
           return {...state, fetching:false, user_recipes: action.user_recipes }
            
        default:
           return state;
    }
}

export default rootReducer