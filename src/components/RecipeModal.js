import React from 'react';
import { Modal, Section, Heading, Media, Image, Content, Columns } from 'react-bulma-components'

 const RecipeModal = (props) => {

    const getIngredients = () => {
        return props.recipe.ingredients.map((ingredient, index) => {
            return <div key={index}>{ingredient.name}</div>
        })
    }




     return (
     <Modal.Content className="recipe-modal-content">
             <Section className="modal-section recipe-modal" style={{ backgroundColor: ' #EAEAED;', textAlign: 'center' }}>
             <Heading className="has-text-centered">{props.recipe.title}</Heading>
             <Columns className="columns-recipe-modal">
                <Columns.Column  size={3}>
                    <Media> 
                        <Media.Item className="recipe-modal-image-container">
                            <Image rounded={true} size={"1by1"} alt="100X100" src={props.recipe.image_url}/>
                        </Media.Item>
                    </Media>
                </Columns.Column>
                <Columns.Column size={3} className="recipe-details">
                    <Content>
                        <h3>Ingredients</h3>
                        <div className="ingredient-list">
                            {getIngredients()}
                        </div>
                    </Content>
                </Columns.Column>
                <Columns.Column className="recipe-details">
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