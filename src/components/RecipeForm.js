import React, { Component } from 'react';
import { Form, Button, Box, Heading, Image } from 'react-bulma-components';
import firebase from "../firebase/index";
import FileUploader from "react-firebase-file-uploader";

const {Field, Control, Label, Input, Textarea } = Form;

const DEFAULT_STATE = {
    progress: 0,
    title: '',
    instructions: '',
    image_url: null,
    user_submitted: true,
    ingredients: '',
    author: ''
}

export default class RecipeForm extends Component {
    state = {
       ...DEFAULT_STATE
    }
    //************************ FORM SUBMISSION */
    handleRecipeSubmit = (e) => {
        e.preventDefault();
        let confirmed;
        let recipeObj;
        if(!this.state.image_url){
            confirmed = window.confirm("You have not uploaded an image! Would you still like to submit your recipe? (A default image will be used.")
        } else {
            confirmed = true;
        }

        if(confirmed){
            recipeObj = this.getNewRecipeObject();
            this.props.submitNewRecipe(recipeObj)
            this.setState({
                ...DEFAULT_STATE
            })
        }
    }
    getNewRecipeObject = () => {
        const newObj = {
            ingredients: this.splitString(),
            recipe: {
                title: this.state.title,
                instructions: this.state.instructions,
                user_submitted: true
            }
        }
        if(this.state.image_url) {newObj.image_url = this.state.image_url} 
        return newObj
    }

    handleTextChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    splitString = () => {
        return this.state.ingredients.split("\n")
    }
//************************* IMAGE SUBMISSION */
    customOnChangeHandler = (event) => {
        this.setState({
            image: event.target.files[0]
        })
    }

    handleUploadStart = () => {
        this.setState({
            isUploading: true, progress: 0
        })
    }

    handleProgress = progress => this.setState({ progress });

    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };

    handleUploadSuccess = filename => {
        this.setState({ image: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ image_url: url }));
    };


    getImage = () => {
        if(this.state.image_url){
            return(<Image size={300} src={this.state.image_url} alt={this.state.title}></Image>)
        } else if( this.state.progress > 0 && this.state.progress < 100){
            return (<h3>Loading...</h3>)
        } else{
             return (<h3>You haven't uploaded an image yet!</h3>)
        }
    }


    render() {
        return(
            <Box className="recipe-form is-clearfix">
                <Heading className="has-text-centered recipe-form-title">Submit New Recipe</Heading>
                <div className="recipe-form-container">
                    <div className="recipe-form-img-upload">
                        <Heading className="has-text-centered" size={5}>Upload Recipe Image</Heading>
                        <div className="recipe-form-img-box">{this.getImage()}</div>
                        <div className="row">
                            <progress value={this.state.progress} max="100" className="progress" />
                        </div>
                        <br></br>
                        <div className="recipe-form-image-buttons">
                        <label className="recipe-form-image-upload-select-button button is-primary">
                            Select A Recipe Image
                            <FileUploader
                                hidden
                                accept="image/*"
                                name="image"
                                storageRef={firebase.storage().ref('images')}
                                onUploadStart={this.handleUploadStart}
                                onUploadError={this.handleUploadError}
                                onUploadSuccess={this.handleUploadSuccess}
                                onProgress={this.handleProgress}
                            />
                        </label>
                        </div>
                    </div>
                    <div className="recipe-form-inputs">
                        <Field>
                            <Label>Recipe Title</Label> 
                            <Control>
                                <Input name="title"placeholder="Recipe Title"
                                    value={this.state.title} onChange={this.handleTextChange} />
                            </Control>
                        </Field>
                        <Field>
                        <Label>Ingredients</Label>
                        <Control>
                            <Textarea name="ingredients" value={this.state.ingredients} onChange={this.handleTextChange} placeholder="Put each ingredient on its own line!" />
                        </Control>
                        </Field >   
                        <Field>
                        <Label>Instructions</Label>
                        <Control>
                            <Textarea name="instructions" value={this.state.instructions} onChange={this.handleTextChange} placeholder="Boil noodles for 5 minutes until al dente. Saute veggies until browned etc... " />
                        </Control>
                        </Field > 
                    </div>
                    
                </div>
                <Button color="info" className="recipe-form-submit is-pulled-right" onClick={this.handleRecipeSubmit}>Submit Recipe</Button> 
            </Box>
        )
    }
}