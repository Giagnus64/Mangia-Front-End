import React, { Component } from 'react';
import CalendarForm from './CalendarForm';
import { Form, Modal, Section, Button, Heading, Columns } from 'react-bulma-components'
const { Field, Label, Select } = Form;


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
            return `Add Meal To Day`
        }
        
    }
    getProperField = () => {
        if(this.props.userRecipeOptions){
            return (<Field>
                <Label>Select Recipe</Label>
                    <Select name="recipe_id" value={this.state.recipe_id} onChange={this.changeSelect}>
                        <option key="p" value="">Select a Recipe</option>
                        {this.props.userRecipeOptions}
                    </Select>
            </Field>)
        } else{
            return (<label><CalendarForm id="date-form-modal" today={this.props.today} updateEnteredDate={this.updateEnteredDate} /></label>)
        }
    }
    updateEnteredDate = (day) => {
        this.setState({
            date: day.toISOString()
        })
    }

 

    render(){
        return (
                <Modal.Content>
                    <Section className="modal-section" style={{backgroundColor:'white', textAlign: 'center'}}>
                    <Heading className="has-text-centered">{this.getTitle()}</Heading>
                    <Columns>
                        <Columns.Column size={6}>
                            <Field>
                                <Label>Select Meal Time</Label>
                                    <Select name="meal" value={this.state.meal} onChange={this.changeSelect}>
                                        {this.mealOptions()}
                                    </Select>
                            </Field>
                        </Columns.Column>
                        <Columns.Column size={6}>
                            {this.getProperField()}
                        </Columns.Column>
                    </Columns>
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