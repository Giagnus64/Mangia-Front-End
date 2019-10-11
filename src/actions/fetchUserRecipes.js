const fetchUserRecipes = () => {
    return (dispatch) => {
        dispatch({type: 'GET_USER_RECIPES_REQUEST'});
        fetch('http://localhost:3000/user_recipes/1')
        .then(res => res.json())
        .then(data => dispatch({type: 'ADD_USER_RECIPES', user_recipes: data}))
    };
}

export default fetchUserRecipes;