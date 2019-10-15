import React, { Component } from 'react';
import RecipeCard from '../components/RecipeCard';
import AddMealModal from '../components/AddMealModal'
import { connect } from 'react-redux';
import { Section, Button, Heading, Modal } from 'react-bulma-components';

class SearchResultsContainer extends Component {
    state = {
        pageNum: 0,
        modalOpen: false,
        modalRecipe: ''
    }

    handleNewSearch = () => {
        this.props.showSearchForm();
    }

    checkFavorited = () => {

    }

    displayResults = () => {
       return this.props.search_results.map((search_result) => {
            return <RecipeCard openModal={this.openModal} recipe={search_result} key={search_result.id} isFavorited={true} parentPage={"searchResults"}/>
        })
    }
    openModal = (recipe_id) => {
        this.setState({
            modalRecipe: recipe_id,
        }, this.setState({
            modalOpen: true
        }))
    }
    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }

    render(){
        return(
        <Section className="search-results-container">
           <Section className="search-results-cards">{this.displayResults()}</Section>
            <Section className="search-results-buttons">
                <Button.Group>
                    <Button>Previous Page</Button>
                    <Button>Next Page</Button>
                    <Button onClick={this.handleNewSearch}>New Search</Button>
                </Button.Group>
            </Section>
                <Modal show={this.state.modalOpen} onClose={this.closeModal}>
                    <AddMealModal recipeId={this.state.modalRecipe} addRecipeToDay={this.props.addRecipeToDay} closeModal={this.closeModal} />
                </Modal>
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
