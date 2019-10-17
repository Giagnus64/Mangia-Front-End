import React, { Component } from 'react';
import RecipeCard from '../components/RecipeCard';
import AddMealModal from '../components/AddMealModal'
import { connect } from 'react-redux';
import { Section, Button, Heading, Modal, Loader } from 'react-bulma-components';

class SearchResultsContainer extends Component {
    state = {
        pageNum: 0,
        modalOpen: false,
        modalRecipe: ''
    }

    handleNewSearch = () => {
        this.props.showSearchForm();
    }

    checkFavorited = (id) => {
        const recipeObj = this.props.userRecipeObjs.filter((userRecipeObj) => {
            if (userRecipeObj.recipe_id === id) {
                return true
            }
        })
        if(recipeObj.length !== 0){
            return recipeObj[0].user_recipe_id
        } else{
            return false
        }
        

    }

    displayLoading = () => {
        return (<Loader style={{ width: 200, height: 200, border: '4px solid blue', borderTopColor: 'transparent', borderRightColor: 'transparent' }} />)
    }

    displayResults = () => {
       return this.props.search_results.map((search_result) => {
            return <RecipeCard 
            openModal={this.openModal} 
            recipe={search_result} 
            key={search_result.id} 
            userRecipeId={this.checkFavorited(search_result.id)} 
            parentPage={"searchResults"}
            addUserRecipe={this.props.addUserRecipe}
            deleteUserRecipe={this.props.deleteUserRecipe}
            />
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
           <Section className="search-results-cards">{this.props.fetching ? this.displayLoading() : this.displayResults() }</Section>
            <Section className="search-results-buttons">
                <Button.Group>
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
