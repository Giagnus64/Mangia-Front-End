import React, { Component } from 'react';
import { Form, Box, Button, Heading } from 'react-bulma-components'
const { Field, Control, Input } = Form;

class SearchForm extends Component{

    state = {
        resultsOpen: false,
        ingredient: '',
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {

        if(this.state.ingredient !== ''){
            //call fetch function
            this.props.getSearchResults(this.state.ingredient);
            //set results state
            this.props.showSearchResults();
        }

    }
    render(){
        return (
        <Box className="search-form">
            <Heading>Search Recipes By Ingredient</Heading>
            <Field>
                <Control>
                    <Input name="ingredient" value={this.state.ingredient} placeholder="Rice, Chicken..." onChange={this.changeInput} />
                </Control>
            </Field>
            <Button onClick={this.handleClick}>Search Ingredients</Button>
        </Box>

        )
    }
}
export default SearchForm;
