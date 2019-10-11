import React, { Component } from 'react';
import {Card, Heading, Content} from 'react-bulma-components';


const RecipeCard = (props) => {
    console.log(props);
    const checkInstructions = () => {
        if(props.recipe.instructions){
            return (
                <Content>{props.recipe.instructions}</Content>
            )
        } else{
            return (<Content>Instructions Found <a href="props.recipe.page_url">Here</a></Content>)
        }
    }


    return(
        <Card className="recipe-card">
            <Card.Image size="3by2" src={props.recipe.image_url} alt={`Photo of ${props.recipe.title}`}></Card.Image>
            <Heading className={"has-text-centered"}size={3}>{props.recipe.title}</Heading>
            <Heading subtitle size={2}>Submitted by: {props.recipe.author}</Heading> 
            <Card.Content>
                    {checkInstructions()}
            </Card.Content>   
            
        </Card>
    )
}

export default RecipeCard;