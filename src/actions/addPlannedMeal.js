const addPlannedMeal = (mealObj) => {
    return (dispatch) => {
        dispatch({ type: 'ADD_PLANNED_MEAL_TO_DB' });
        fetch('http://localhost:3000/planned_meals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...mealObj
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.recipe) {
            dispatch({ type: 'ADD_PLANNED_MEAL_TO_STORE', mealToAdd: data })
        }

    })
    }
}
export default addPlannedMeal;