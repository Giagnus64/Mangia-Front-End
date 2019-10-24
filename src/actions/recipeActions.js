const URL = `http://localhost:3000/recipes/`;

const searchByIngredient = (search_query) => {
    return (dispatch) => {
        dispatch({ type: 'SEARCH_RECIPE_DATABASE' });
        fetch(`${URL}${search_query}`, { headers: { 'Authorization': localStorage.token } })
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'ADD_SEARCH_RESULTS', search_results: data })
            })
    };
}

const submitNewRecipeToDB = (recipeObj) => {
    return (dispatch) => {
        dispatch({ type: 'SUBMIT_NEW_RECIPE' });
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.token
            },
            body: JSON.stringify({
                ...recipeObj
            })
        })
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'ADD_NEW_RECIPE', newRecipe: data })
            })
    };
}
export {searchByIngredient, submitNewRecipeToDB}
