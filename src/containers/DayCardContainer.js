import React, { Component } from 'react';
import { format, addDays } from 'date-fns'
import DayCard from "../components/DayCard"
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { Button, Modal } from 'react-bulma-components';
import AddMealModal from "../components/AddMealModal";

import 'react-day-picker/lib/style.css';

//fix for pushing out
let today = new Date(2019,9,12)

class DayCardContainer extends Component {

    state = {
        startDate: today,
        dateEntered: '',
        modalOpen: false,
        modalDate: '',
    }

    handleDayClick = (day) => {
        let dayToChange = day
        this.setState({
            dateEntered: dayToChange
        })
    }
    updateStartDate = () => {
        this.setState({
            startDate: this.state.dateEntered,
            dateEntered: '',
        })
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
            cardArray.push(<DayCard cardDate={cardDate} meals={meals} key={i} deletePlannedMeal={this.props.deletePlannedMeal} openModal={this.openModal}/>)
        }
        return cardArray;
    }
    openModal = (date) => {
        this.setState({
            modalOpen:true,
            modalDate: date
        })
    }
    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }



    render () {
        //console.log(this.props)
 
        return (
            <>
            <div className="day-picker-container">
            <DayPickerInput 
            initialMonth={today}id="day-picker-input"
            dayPickerProps={{
                disabledDays:
                {before: today}
            }}
            value={this.state.dateEntered}
            onDayChange={day => this.handleDayClick(day)}/>
            <Button onClick={this.updateStartDate}color="info">Select Start Date</Button>
            </div>
            <div className="day-card-container">{this.getDayCards()}</div>
            <Modal show={this.state.modalOpen} onClose={this.closeModal}>
                    <AddMealModal date={this.state.modalDate} userRecipeOptions={this.props.userRecipeOptions} addRecipeToDay={this.props.addRecipeToDay} closeModal={this.closeModal}/>
            </Modal>
            </>
        )
        
    }
}

export default DayCardContainer;