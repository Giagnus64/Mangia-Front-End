import React, { Component } from 'react';

export default class UserRecipeCardContainer extends Component {
    
    
    
    
    
    
    
    
    getRecipeCards = () => {
       return this.props.user_recipes.map((recipeObj) => {
            return <RecipeCard recipe={recipeObj}/>
        })
    }
        
    
    
    
    
    render(){
        return(
            <>
            {this.getRecipeCards()}
            </>
        )
    }
}
