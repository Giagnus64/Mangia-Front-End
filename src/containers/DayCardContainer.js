import React, { Component } from 'react';
import { format, addDays } from 'date-fns'
import DayCard from "../components/DayCard"

import { Button, Modal, Section, Heading, Box } from 'react-bulma-components';
import AddMealModal from "../components/AddMealModal";
import DateForm from "../components/DateForm";



class DayCardContainer extends Component {

    state = {
        startDate: this.props.today,
        dateEntered: '',
        modalOpen: false,
        modalDate: '',
    }

    updateEnteredDate = (date) => {
        this.setState({
            dateEntered: date,
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
            cardArray.push(<DayCard openRecipeModal={this.props.openRecipeModal} cardDate={cardDate} meals={meals} key={i} deletePlannedMeal={this.props.deletePlannedMeal} openModal={this.openModal}/>)
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
 
        return (
            <Section>
                <Box>
                <Heading className="has-text-centered">Your Meal Plans</Heading>
                <div className="day-picker-container">
                    <DateForm today={this.props.today} updateEnteredDate={this.updateEnteredDate} />
                    <Button onClick={this.updateStartDate}color="info">Select Start Date</Button>
                </div>
                
                <div className="day-card-container">{this.getDayCards()}</div>
                <Modal show={this.state.modalOpen} onClose={this.closeModal}>
                        <AddMealModal  today={this.props.today} date={this.state.modalDate} userRecipeOptions={this.props.userRecipeOptions} addRecipeToDay={this.props.addRecipeToDay} closeModal={this.closeModal}/>
                </Modal>
                </Box>
            </Section>
        )
        
    }
}

export default DayCardContainer;