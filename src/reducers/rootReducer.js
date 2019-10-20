const defaultState = {
    token: '',
    user_id: '',
    username: '',
    user_recipes: [], 
    planned_meals: [],
    fetching: false,
    search_results: [],
    errors: [],
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

        case "ADD_USER_RECIPE_TO_DB":
            return { ...state,  }

        case "ADD_USER_RECIPE_TO_STORE":
            return { ...state,  user_recipes: [...state.user_recipes, action.recipeToAdd] }

        case "DELETE_USER_RECIPE_FROM_DB":
            return { ...state }

        case "DELETE_USER_RECIPE_FROM_STORE":
            return { ...state, user_recipes: state.user_recipes.filter((recipe) => recipe.id !== action.recipeToDelete) }

        case "LOGIN_USER_TOKEN":
            return { ...state }

        case "CREATE_USER_TOKEN":
            return { ...state }

        case "LOGIN_USER_STORE":
            return { ...state, token: action.loginCreds.token, user_id: action.loginCreds.id, username: action.loginCreds.username, errors: [] }

        case "LOGIN_ERROR":
            return { ...state, errors: action.errors }

        case "LOGOUT_USER":
            return { ...state, errors: action.errors }
            
        default:
           return state;
    }
}

export default rootReducer