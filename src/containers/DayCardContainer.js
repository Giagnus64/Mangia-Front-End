import React, { Component } from 'react';
import { format, addDays } from 'date-fns'
import DayCard from "../components/DayCard"


let today = new Date(2019,9,12)

class DayCardContainer extends Component {

    state = {
        startDate: today,
        dateEntered: ''
    }

    //check for meals on that date
    checkPlannedMeals = (date) => {
        return this.props.planned_meals.filter((planned_meal) => {
            return planned_meal.date === date
        })
    }

    //get day cards starting at start date
    getDayCards = () => {
    let cardArray = [];
        for(let i = 0; i < 7; i++){
            let cardDate = addDays(this.state.startDate, i)
            let meals = this.checkPlannedMeals(format(cardDate, "yyyy-MM-dd"));
            cardArray.push(<DayCard cardDate={cardDate} meals={meals} key={i}/>)
        }
        return cardArray;
    }


    render () {
        console.log(this.props)
 
        return (
            <div className="day-card-container">{this.getDayCards()}</div>
        );
        
    }
}

export default DayCardContainer;