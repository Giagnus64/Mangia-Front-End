import React, { Component } from 'react';
import DateForm from "../components/DateForm";
import { Form, Modal, Section, Button, Heading } from 'react-bulma-components'
const { Field, Control, Label, Select } = Form;


class AddMealModal extends Component {
    
    state = {
       meal: '',
       recipe_id: this.props.recipeId ? this.props.recipeId : null,
       date: this.props.date ? this.props.date.toISOString() : null
    }

    changeSelect = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    mealOptions = () => {
        return (<>
            <option key="s" value="">Select A Meal</option>
            <option key="b" value="Breakfast">Breakfast</option>
            <option key="l" value="Lunch">Lunch</option>
            <option key="d" value="Dinner">Dinner</option>
            </>
        )
    }
    getTitle = () => {
        if(this.props.date){
            return `Add Meal To ${this.props.date.toDateString()}`
        } else{
            return `Add Meal`
        }
        
    }
    getProperField = () => {
        if(this.props.userRecipeOptions){
            return (<Field>
                <Label>Select Recipe</Label>
                <Control>
                    <Select name="recipe_id" value={this.state.recipe_id} onChange={this.changeSelect}>
                        <option key="p" value="">Select a Recipe</option>
                        {this.props.userRecipeOptions}
                    </Select>
                </Control>
            </Field>)
        } else{
            return (<label>Date:<DateForm updateEnteredDate={this.updateEnteredDate} /></label>)
        }
    }
    updateEnteredDate = (day) => {
        this.setState({
            date: day.toISOString()
        })
    }

 

    render(){
        console.log(this.props, this.props.date)
        return (
                <Modal.Content>
                    <Section style={{backgroundColor:'white'}}>
                    <Heading>{this.getTitle()}</Heading>
                    {this.getProperField()}
                    <Field>
                        <Label>Select Meal Time</Label>
                        <Control>
                            <Select name="meal" value={this.state.meal} onChange={this.changeSelect}>
                                {this.mealOptions()}
                            </Select>
                        </Control>
                    </Field>
                    <Button 
                    onClick={() => {
                        this.props.addRecipeToDay(this.state)
                        this.props.closeModal()
                    }
                    }>
                        Submit</Button>
                    </Section>
                    
                </Modal.Content>
        )
    }



    
}
export default AddMealModal