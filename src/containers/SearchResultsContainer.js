import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserRecipe, deleteUserRecipe } from "../actions/userRecipeActions";
import RecipeCard from '../components/RecipeCard';
import AddMealModal from '../components/AddMealModal'
import { Button, Modal, Loader, Box } from 'react-bulma-components';

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
            } else{
                return false
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
            openRecipeModal={this.props.openRecipeModal}
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
        <Box className="search-results-container">
           <div className="search-results-cards">{this.props.fetching ? this.displayLoading() : this.displayResults() }
           </div>
            <div className="search-results-buttons">
                <Button.Group>
                    <Button onClick={this.handleNewSearch}>New Search</Button>
                </Button.Group>
            </div>
                <Modal show={this.state.modalOpen} onClose={this.closeModal}>
                    <AddMealModal today={this.props.today} recipeId={this.state.modalRecipe} addRecipeToDay={this.props.addRecipeToDay} closeModal={this.closeModal} />
                </Modal>
        </Box>
           
            
        )
    }
}


const mapStateToProps = (state, props) => {

    return { search_results: state.search_results, fetching: state.fetching }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        addUserRecipe: (recipe_id) => dispatch(addUserRecipe(recipe_id)),
        deleteUserRecipe: (recipe_id) => dispatch(deleteUserRecipe(recipe_id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer)
