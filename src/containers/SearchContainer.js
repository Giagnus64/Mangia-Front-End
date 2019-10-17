import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import SearchResultsContainer from './SearchResultsContainer';
import {Section} from 'react-bulma-components';


class SearchContainer extends Component{
    state = {
        resultsDisplay: false,
    }

    showSearchForm = () => {
        this.setState({
            resultsDisplay: false
        })
    }
    showSearchResults = () => {
        this.setState({
            resultsDisplay: true
        })
    }

    

    render(){
        return(<Section className="search-container">
            {this.state.resultsDisplay ? 
            <SearchResultsContainer addRecipeToDay={this.props.addRecipeToDay} 
            showSearchForm={this.showSearchForm}
            userRecipeObjs={this.props.userRecipeObjs}
            /> : <SearchForm 
            getSearchResults={this.props.getSearchResults} 
            showSearchResults={this.showSearchResults}/>}
            </Section>
            )
    }
}

export default SearchContainer;