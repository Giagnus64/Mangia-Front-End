import React from 'react';
import {Card, Heading, Content, Icon, Button} from 'react-bulma-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart as heartReg } from '@fortawesome/free-regular-svg-icons'



const RecipeCard = (props) => {

    
    const checkInstructions = () => {
        if(props.recipe.instructions){
            return (
                <Content className={"has-text-centered"}>{props.recipe.instructions}</Content>
            )
        } else{
            return (<Content className={"has-text-centered"}><a target="_blank" rel="noopener noreferrer" href={props.recipe.page_url}>See Instructions Here</a></Content>)
        }
    }
    const getColor = () => {
        if(props.recipe.user_submitted){
            return "info"
        }
        else {
            return "primary"
        }
    }
    const getButtons = () => {
        if (props.parentPage === "recipe_page"){
            if(props.recipe.author === localStorage.username){
                return (<Button className="user-recipes-recipe-card-update-button">Update Meal</Button>)
            } else{
                return (<></>)
            }
            
        } else{
            return (<Button onClick={() => props.openModal(props.recipe.id)}className="search-results-recipe-card-button">Add Meal</Button>)
        }
    }
    const getIcon = () => {
        if(props.userRecipeId){
            return heartSolid;
        } else{
            return heartReg;
        }
    }
    const heartClick = () => {
        if(props.userRecipeId){
           props.deleteUserRecipe(props.userRecipeId)
        } else{
            props.addUserRecipe(props.recipe.id)
        }
    }

    return(
        <Card className="recipe-card" backgroundColor={getColor()}>
            <Card.Image className={"card-img"} size="3by2" src={props.recipe.image_url} alt={`Photo of ${props.recipe.title}`}></Card.Image>
            <Heading className={"has-text-centered"} size={3}>{props.recipe.title}</Heading>
            <Heading className={"has-text-centered"} subtitle size={4}>Submitted by: {props.recipe.author}</Heading> 
            <Card.Content>
                    {checkInstructions()}
            </Card.Content>  
            <div className="recipe-card-buttons">
                <Icon onClick={heartClick} icon="heart">
                    <FontAwesomeIcon icon={getIcon()}/>
                </Icon>
                {getButtons()}
            </div> 
            
        </Card>
    )
}

export default RecipeCard;