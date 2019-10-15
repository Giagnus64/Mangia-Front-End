import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import SearchResultsContainer from './SearchResultsContainer';


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
        return(<>
            {this.state.resultsDisplay ? <SearchResultsContainer showSearchForm={this.showSearchForm}/> : <SearchForm getSearchResults={this.props.getSearchResults} showSearchResults={this.showSearchResults}/>}
            </>
            )
    }
}

export default SearchContainer;