const deleteUserRecipe = (recipeID) => {
    return (dispatch) => {
        dispatch({ type: 'DELETE_USER_RECIPE_FROM_DB' });
        fetch(`http://localhost:3000/user_recipes/${recipeID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
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
export default deleteUserRecipe;