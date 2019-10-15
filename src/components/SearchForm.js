import React, { Component } from 'react';
import { Form, Section, Button, Heading } from 'react-bulma-components'
const { Field, Control, Label, Input } = Form;

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
        //call fetch function
        this.props.getSearchResults(this.state.ingredient);
        //set results state
        this.props.showSearchResults();

    }
    render(){
        return (
        <Section className="search-form">
            <Heading>Search Recipes By Ingredient</Heading>
            <Field>
                <Label>Ingredient</Label>
                <Control>
                    <Input name="ingredient" value={this.state.ingredient} placeholder="Rice, Chicken..." onChange={this.changeInput} />
                </Control>
            </Field>
            <Button onClick={this.handleClick}>Search Ingredients</Button>
        </Section>

        )
    }
}
export default SearchForm;
