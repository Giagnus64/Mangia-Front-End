import React, { Component } from 'react';
import { Form, Button } from 'react-bulma-components';
// import firebase from "../Firebase/index";
// import FileUploader from "react-firebase-file-uploader";

const {Field, Control, Label, Input, Textarea, Select, Checkbox, Radio, Help, InputFile  } = Form;

const DEFAULT_STATE = {
    image: null,
    progress: 0,
    title: '',
    instructions: '',
    image_url: '',
    user_submitted: true,
    ingredients: '',
    author: ''
}

export default class RecipeForm extends Component {
    state = {
       ...DEFAULT_STATE
    }

    handleRecipeSubmit = (e) => {
        e.preventDefault();
        const newObj = {
            ingredients: this.splitString(),
            recipe: {
                title: this.state.title,
                instructions: this.state.instructions,
                image_url: this.state.image_url,
                user_submitted: true
            }
        }
        this.props.submitNewRecipe(newObj)
        this.setState({
            ...DEFAULT_STATE
        })
    }

    // customOnChangeHandler = (event) => {
    //     this.setState({
    //         image: event.target.files[0]
    //     })
    // }

    // handleUploadStart = () => {
    //     this.setState({
    //         isUploading: true, progress: 0
    //     })
    // }

    // handleProgress = progress => this.setState({ progress });

    // handleUploadError = error => {
    //     this.setState({ isUploading: false });
    //     console.error(error);
    // };

    // handleUploadSuccess = filename => {
    //     this.setState({ image: filename, progress: 100, isUploading: false });
    //     firebase
    //         .storage()
    //         .ref("images")
    //         .child(filename)
    //         .getDownloadURL()
    //         .then(url => this.setState({ image_url: url }));
    // };

    // startUploadManually = () => {
    //     this.fileUploader.startUpload(this.state.image)
    // }

    handleTextChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    splitString = () => {
        return this.state.ingredients.split("\n")
    }
    

    render() {
        return(
            <div className="recipe-form">
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
                <Button onClick={this.handleRecipeSubmit}>Woo</Button> 
                {/* <h2 className="green-text">Upload Recipe Image</h2>
                {this.state.image_url !== '' ? <img src={this.state.image_url} alt={this.state.title}></img> : <h3>Img goes here</h3>}
                <br />
                <br />
                <div className="row">
                    <progress value={this.state.progress} max="100" className="progress" />
                </div>
                <label className="button is-primary">
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
                        onChange={this.customOnChangeHandler}
                        ref={inst => { this.fileUploader = inst }}
                    />
                </label>
                <Button
                    onClick={this.startUploadManually}
                    className="btn"
                >
                    Upload
            </Button>  */}
            </div>
        )
    }
}