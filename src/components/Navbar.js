import React, { Component } from 'react';
import { Navbar } from 'react-bulma-components';

class NavigationBar extends Component {

    state = {
        navOpen: false
    }
    toggleNav = () => {
        this.setState({
            navOpen: !this.state.navOpen
        })
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
                <Navbar.Item renderAs="a" href="#">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </Navbar.Item>
                <Navbar.Burger onClick={this.toggleNav}/>
            </Navbar.Brand>
            <Navbar.Menu >
                <Navbar.Container >
                    <Navbar.Item href="#">
                        Welcome, user!
                    </Navbar.Item>
                </Navbar.Container>
                <Navbar.Container position="end">
                    <Navbar.Item hoverable dropdown href="#">
                        <Navbar.Link arrowless={false}>Menu</Navbar.Link>
                        <Navbar.Dropdown className="is-right">
                                <Navbar.Item hoverable href="#">
                                    Plan Meals
                                </Navbar.Item>
                                <Navbar.Item hoverable href="#">
                                    Manage Recipes
                                </Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
        )
    }
}
export default NavigationBar;


