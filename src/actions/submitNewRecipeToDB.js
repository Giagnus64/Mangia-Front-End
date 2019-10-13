const submitNewRecipeToDB = (recipeObj) => {
    return (dispatch) => {
        dispatch({ type: 'SUBMIT_NEW_RECIPE' });
        fetch('http://localhost:3000/recipes/', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({
                ...recipeObj
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch({ type: 'ADD_NEW_RECIPE', newRecipe: data })})
    };
}

export default submitNewRecipeToDB;