import React from 'react';
import { Card, Heading} from 'react-bulma-components';

const DayCard = (props) => {

    console.log(props)
    
    const formatDate = () => {
        return props.cardDate.toDateString();
    }
    const getMeals = (mealString) => {
       const filtered =  props.meals.filter((meal) => {return meal.meal === mealString})
       return filtered.map((meal) => {
           return <div className="meal-container" key={meal.id}><a target="_blank" rel="noopener noreferrer" href={meal.recipe.page_url}>{meal.recipe.title}</a></div>
       })
    }
    
    
    return(
    <Card className="day-card">
        <Heading className={"date has-text-centered"} size={4}>{formatDate()}</Heading>
        <Card.Content>
                <Heading className={"meal"} size={6}>Breakfast</Heading>
                {getMeals('Breakfast')}
                <Heading className={"meal"} size={6}>Lunch</Heading>
                {getMeals('Lunch')}
                <Heading className={"meal"} size={6}>Dinner</Heading>
                {getMeals('Dinner')}
        </Card.Content>
    </Card>)

}
export default DayCard;