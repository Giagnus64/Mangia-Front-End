import React, { Component } from 'react';
import {Card, Heading, Content, Icon} from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart as heartReg } from '@fortawesome/free-regular-svg-icons'



const RecipeCard = (props) => {
    console.log(props);
    const checkInstructions = () => {
        if(props.recipe.instructions){
            return (
                <Content className={"has-text-centered"}>{props.recipe.instructions}</Content>
            )
        } else{
            return (<Content className={"has-text-centered"}>Instructions Found <a href="props.recipe.page_url">Here</a></Content>)
        }
    }


    return(
        <Card className="recipe-card">
            <Card.Image className={"card-img"} size="3by2" src={props.recipe.image_url} alt={`Photo of ${props.recipe.title}`}></Card.Image>
            <Heading className={"has-text-centered"} size={3}>{props.recipe.title}</Heading>
            <Heading className={"has-text-centered"} subtitle size={4}>Submitted by: {props.recipe.author}</Heading> 
            <Card.Content>
                    {checkInstructions()}
            </Card.Content>  
            <div className={"icon"}>
                <Icon icon="heart" color="info">
                    <FontAwesomeIcon icon={heartReg}/>
                </Icon>
            </div> 
            
        </Card>
    )
}

export default RecipeCard;