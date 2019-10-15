import React, { Component } from 'react';
import RecipeCard from '../components/RecipeCard';
import { connect } from 'react-redux';
import { Section, Button, Heading } from 'react-bulma-components';

class SearchResultsContainer extends Component {
    state = {
        pageNum: 0
    }

    handleNewSearch = () => {
        this.props.showSearchForm();
    }

    render(){
        return(
        <Section className="search-results-container">
           <Section></Section>
            <Section className="search-results-buttons">
                <Button.Group>
                    <Button>Previous Page</Button>
                    <Button>Next Page</Button>
                    <Button onClick={this.handleNewSearch}>New Search</Button>
                </Button.Group>
            </Section>
        </Section>
            
        )
    }
}


const mapStateToProps = (state, props) => {

    return { search_results: state.search_results, fetching: state.fetching }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer)
