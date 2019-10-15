const deletePlannedMeal = (mealID) => {
    return (dispatch) => {
        dispatch({ type: 'DELETE_PLANNED_MEAL_FROM_DB' });
        fetch(`http://localhost:3000/planned_meals/${mealID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if(data.message){
                dispatch({ type: 'DELETE_PLANNED_MEAL_FROM_STORE', mealToDelete: mealID })
                }
            })
    };
}


export default deletePlannedMeal;