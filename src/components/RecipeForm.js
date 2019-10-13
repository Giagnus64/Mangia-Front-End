import React, { Component } from 'react';
import { Form, Button } from 'react-bulma-components';
import firebase from "../Firebase/index";
import FileUploader from "react-firebase-file-uploader";

const {Field, Control, Label, Input, Textarea, Select, Checkbox, Radio, Help, InputFile  } = Form;

export default class RecipeForm extends Component {
    state = {
       image: null,
       progress: 0,
       title: '',
       instructions: '',
       page_url: '',
       image_url: '', 
       user_submitted: true,
       ingredients: '',
       author: ''
    }

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

    startUploadManually = () => {
        this.fileUploader.startUpload(this.state.image)
    }

    handleTextChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    splitString = () => {
        const splitIngredients = this.state.ingredients.split("\n")
    }


    render() {
        return(
            <div className="recipe-form">
                 <Field>
                    <Label>Recipe Title</Label> 
                    <Control>
                        <Input placeholder="Recipe Title" />
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
                    <Textarea name="instructions" value={this.state.instructions} onChange={this.handleTextChange} placeholder="Boil noodles for 5 mintues until al dente. Saute veggies for 10 minutes etc... " />
                </Control>
                </Field > 
                <Button onClick={this.splitString}>Woo</Button> 
                <h2 className="green-text">Upload Recipe Image</h2>
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
            </Button> 
            </div>
        )
    }
}