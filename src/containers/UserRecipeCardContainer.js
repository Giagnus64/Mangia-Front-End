import React, { Component } from 'react';
import RecipeCard from "../components/RecipeCard";
import { Container } from "react-bulma-components";




export default class UserRecipeCardContainer extends Component {
    
    
   

    getRecipeCards = () => {
        if(this.props.user_recipes.length !== 0){
            return this.props.user_recipes.map((recipeObj) => {
                return <RecipeCard 
                 openRecipeModal={this.props.openRecipeModal} 
                 recipe={recipeObj.recipe} 
                 key={recipeObj.id} 
                 parentPage={"recipe_page"} 
                 userRecipeId={recipeObj.id}
                 addUserRecipe={this.props.addUserRecipe}
                 deleteUserRecipe={this.props.deleteUserRecipe}
                 />
             })
        }
    }
    
    
    render(){
        return(<>
            <Container fluid className={"is-flex recipe-card-container"}>
            {this.getRecipeCards()}
            </Container>
            </>
        )
    }
}
