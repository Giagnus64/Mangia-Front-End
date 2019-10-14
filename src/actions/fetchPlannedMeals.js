const fetchPlannedMeals = () => {
    return (dispatch) => {
        dispatch({ type: 'GET_PLANNED_MEALS_REQUEST' });
        fetch('http://localhost:3000/planned_meals/1')
            .then(res => res.json())
            .then(data => dispatch({ type: 'ADD_PLANNED_MEALS', planned_meals: data }))
    };
}

export default fetchPlannedMeals;