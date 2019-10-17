const searchByIngredient = (search_query) => {
    return (dispatch) => {
        dispatch({ type: 'SEARCH_RECIPE_DATABASE' });
        fetch(`http://localhost:3000/recipes/${search_query}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch({ type: 'ADD_SEARCH_RESULTS', search_results: data })
            })
    };
}
export default searchByIngredient;