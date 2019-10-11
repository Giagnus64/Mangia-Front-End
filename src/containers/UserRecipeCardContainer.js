import React, { Component } from 'react';
import RecipeCard from "../components/RecipeCard";
import { Container } from "react-bulma-components";



export default class UserRecipeCardContainer extends Component {
    
    
    getRecipeCards = () => {
       return this.props.user_recipes.map((recipeObj) => {
            return <RecipeCard recipe={recipeObj.recipe} key={recipeObj.id}/>
        })
    }
    
    
    render(){
        return(
            <Container fluid className={"is-flex recipe-card-container"}>
            {this.getRecipeCards()}
            </Container>
        )
    }
}
