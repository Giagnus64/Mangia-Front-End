import React, { Component } from 'react';
import { Navbar, Heading } from 'react-bulma-components';
import { NavLink } from 'react-router-dom'

class NavigationBar extends Component {

    state = {
        navOpen: false
    }
    toggleNav = () => {
        this.setState({
            navOpen: !this.state.navOpen
        })
    }
    getWelcomeMessage = () => {
        if(localStorage.username){
            return (
            <Navbar.Container >
                <Navbar.Item renderAs="div">
                {`Welcome, ${localStorage.username}!`}
                </Navbar.Item>
            </Navbar.Container>
            )
        }
    }

    
    handleClick = (e, logout = false) => {
        if(logout){
            this.props.logoutUser();
        }
        this.toggleNav();
    }

    render(){
        return(
        <Navbar
            color="info"
            fixed='top'
            active={this.state.navOpen}
            transparent={true}
        >
            <Navbar.Brand>
                <Navbar.Item renderAs="div">
                    <Heading>Mangia</Heading>
                </Navbar.Item>
                <Navbar.Burger onClick={this.toggleNav}/>
            </Navbar.Brand>
            <Navbar.Menu>
                    {this.getWelcomeMessage()}
                <Navbar.Container position="end">
                    <Navbar.Item hoverable dropdown>
                        <Navbar.Link arrowless={false}>Menu</Navbar.Link>
                        <Navbar.Dropdown className="is-right">
                                <NavLink to="/home">
                                    <Navbar.Item renderAs="div" hoverable onClick={this.handleClick}>
                                        Plan Meals
                                    </Navbar.Item>
                                </NavLink>
                                <NavLink to="/recipes">
                                    <Navbar.Item renderAs="div" hoverable onClick={this.handleClick}>
                                        Manage Recipes
                                    </Navbar.Item>
                                </NavLink>
                                <NavLink to="/login">
                                    <Navbar.Item renderAs="div" hoverable onClick={(e) => this.handleClick(e, true) }>
                                        Logout
                                    </Navbar.Item>
                                </NavLink>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
        )
    }
}
export default NavigationBar;


