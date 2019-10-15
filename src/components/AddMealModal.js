import React, { Component } from 'react';
import { Modal, Section } from 'react-bulma-components'

const DEFAULT_STATE = {
    mealtime: '',
    recipe_id: '',
}
class AddMealModal extends Component {

    state = {
       ...DEFAULT_STATE
    }
 

    render(){
        return (
                <Modal.Content>
                    <Section style={{backgroundColor:'white'}}>
                    <h1>Here's the modal!</h1>
                    </Section>
                    
                </Modal.Content>
        )
    }



    
}
export default AddMealModal