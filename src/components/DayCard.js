import React from 'react';
import { Card, Heading, Button} from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const DayCard = (props) => {


    //console.log(props)
    
    const formatDate = () => {
        return props.cardDate.toDateString();
    }
    const handleLinkClick = (recipe) => {
        props.openRecipeModal(recipe);
    }
    const getMeals = (mealString) => {
       const filtered =  props.meals.filter((meal) => {return meal.meal === mealString})
       return filtered.map((meal) => {
           return (<div className="meal-container" key={meal.id}>
               <a target="_blank" rel="noopener noreferrer" href={meal.recipe.page_url} onClick={() => handleLinkClick(meal.recipe)}>{meal.recipe.title} 
               </a>
               <FontAwesomeIcon className="delete-icon-planned-meal"
               icon={faTimesCircle}
               onClick={(e) => handleDeleteClick(e, meal.id)}>

               </FontAwesomeIcon>
           </div>)
       })
    }

    const handleDeleteClick = (e, mealID) => {
        let confirmed = window.confirm(`Are you sure you want to delete this meal?`)
        if(confirmed){
            props.deletePlannedMeal(mealID)
        }
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
        <div className="day-card-button-container">
                <Button className="day-card-add-meal-btn" onClick={() => {props.openModal(props.cardDate)}}>Add Meal</Button>
        </div>
    </Card>)

}
export default DayCard;