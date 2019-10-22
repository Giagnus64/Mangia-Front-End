import React from 'react';
import { Modal, Section, Heading, Media, Image, Content, Columns } from 'react-bulma-components'

 const RecipeModal = (props) => {

    const getIngredients = () => {
        return props.recipe.ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient.name}</li>
        })
    }




     return (
     <Modal.Content>
         <Section className="modal-section" style={{ backgroundColor: 'white', textAlign: 'center' }}>
             <Heading className="has-text-centered">{props.recipe.title}</Heading>
             <Columns>
                <Columns.Column size={6}>
                    <Media> 
                        <Media.Item className="recipe-modal-image-container">
                            <Image rounded={true} size={"1by1"} alt="100X100" src={props.recipe.image_url}/>
                        </Media.Item>
                    </Media>
                </Columns.Column>
                <Columns.Column size={6} className="recipe-details">
                    <Content>
                        <h3>Ingredients</h3>
                        <ul className="ingredient-list">
                            {getIngredients()}
                        </ul>
                    </Content>
                    <Content>
                        <h3>Instructions</h3>
                        <p>{props.recipe.instructions}</p>
                    </Content>
                </Columns.Column>
             </Columns>
         </Section>
     </Modal.Content>
     )
 }


 export default RecipeModal;