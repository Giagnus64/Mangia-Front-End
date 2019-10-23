const URL = 'https://mangia-api.herokuapp.com/planned_meals'

const fetchPlannedMeals = () => {
    return (dispatch) => {
        dispatch({ type: 'GET_PLANNED_MEALS_REQUEST' });
        fetch(`${URL}/${localStorage.user_id}`, { headers: { 'Authorization': localStorage.token } })
            .then(res => res.json())
            .then(data => dispatch({ type: 'ADD_PLANNED_MEALS', planned_meals: data }))
    };
}

const addPlannedMeal = (mealObj) => {
    return (dispatch) => {
        dispatch({ type: 'ADD_PLANNED_MEAL_TO_DB' });
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.token
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



const deletePlannedMeal = (mealID) => {
    return (dispatch) => {
        dispatch({ type: 'DELETE_PLANNED_MEAL_FROM_DB' });
        fetch(`${URL}/${mealID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.token
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    dispatch({ type: 'DELETE_PLANNED_MEAL_FROM_STORE', mealToDelete: mealID })
                }
            })
    };
}
export {fetchPlannedMeals, addPlannedMeal, deletePlannedMeal};