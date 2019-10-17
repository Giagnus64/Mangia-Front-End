const addUserRecipe = (recipeID) => {
    return (dispatch) => {
        dispatch({ type: 'ADD_USER_RECIPE_TO_DB' });
        fetch('http://localhost:3000/user_recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
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
export default addUserRecipe;