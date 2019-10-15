const defaultState = {
    token: '',
    user_id: '1',
    username: 'bob',
    user_recipes: [], 
    planned_meals: [],
    fetching: false,
    search_results: [],
}

const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SUBMIT_NEW_RECIPE":
            return {...state, fetching:true}

        case "ADD_NEW_RECIPE":
            return {...state, fetching:false, user_recipes: [...state.user_recipes, action.newRecipe]}
            
        case "GET_USER_RECIPES_REQUEST":
           return {...state, fetching:true}
           
        case "ADD_USER_RECIPES": 
           return {...state, fetching:false, user_recipes: action.user_recipes }

        case "GET_PLANNED_MEALS_REQUEST":
           return {...state, fetching:true}
           
        case "ADD_PLANNED_MEALS": 
           return {...state, fetching:false, planned_meals: action.planned_meals }

        case "ADD_PLANNED_MEAL_TO_DB":
            return {...state, fetching:true}
            
        case "ADD_PLANNED_MEAL_TO_STORE":
            return {...state, fetching:false, planned_meals: [...state.planned_meals, action.mealToAdd]}

        case "DELETE_PLANNED_MEAL_FROM_DB":
            return {...state, fetching:true}
            
        case "DELETE_PLANNED_MEAL_FROM_STORE":
            return {...state, fetching:false, planned_meals: state.planned_meals.filter((meal) => meal.id !== action.mealToDelete)}

        case "SEARCH_RECIPE_DATABASE":
            return { ...state, fetching: true }

        case "ADD_SEARCH_RESULTS":
            return { ...state, fetching: false, search_results: action.search_results }
            
        default:
           return state;
    }
}

export default rootReducer