const URL = 'http://localhost:3000/user_recipes'

const fetchUserRecipes = () => {
    return (dispatch) => {
        dispatch({ type: 'GET_USER_RECIPES_REQUEST' });
        fetch(`${URL}/${localStorage.user_id}`, { headers: {'Authorization': localStorage.token}})
            .then(res => res.json())
            .then(data => dispatch({ type: 'ADD_USER_RECIPES', user_recipes: data }))
    };
}

const addUserRecipe = (recipeID) => {
    return (dispatch) => {
        dispatch({ type: 'ADD_USER_RECIPE_TO_DB' });
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.token
            },
            body: JSON.stringify({
                recipe_id: recipeID,
                user_id: localStorage.user_id
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.recipe) {
                    dispatch({ type: 'ADD_USER_RECIPE_TO_STORE', recipeToAdd: data })
                }
            })
    }
}

const deleteUserRecipe = (recipeID) => {
    return (dispatch) => {
        dispatch({ type: 'DELETE_USER_RECIPE_FROM_DB' });
        fetch(`${URL}/${recipeID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.token
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.message) {
                    dispatch({ type: 'DELETE_USER_RECIPE_FROM_STORE', recipeToDelete: recipeID })
                }
            })
    }
}
export {fetchUserRecipes, addUserRecipe, deleteUserRecipe}