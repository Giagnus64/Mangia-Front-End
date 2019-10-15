import React, { Component } from 'react';
import { Form, Modal, Section, Button } from 'react-bulma-components'
const { Field, Control, Label, Input, Textarea, Select } = Form;

const DEFAULT_STATE = {
    meal: '',
    recipe_id: '',
}
class AddMealModal extends Component {

    state = {
       ...DEFAULT_STATE,
       date: this.props.date.toISOString()
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
 

    render(){
        return (
                <Modal.Content>
                    <Section style={{backgroundColor:'white'}}>
                    <h1>{`Add Meal To ${this.props.date.toDateString()}`}</h1>
                    <Field>
                        <Label>Select Recipe</Label>
                        <Control>
                            <Select name="recipe_id" value={this.state.recipe_id} onChange={this.changeSelect}>
                                <option key="p" value="">Select a Recipe</option>
                                {this.props.userRecipeOptions}
                            </Select>
                        </Control>
                    </Field>
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