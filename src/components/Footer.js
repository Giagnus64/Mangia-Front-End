import React from 'react';
import {Footer, Container, Content} from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'


const MyFooter = () => {
    return (<Footer>
        <Container>
            <Content style={{ textAlign: 'center' }}>
                <p>Made by Gianfranco Nuschese
                     <a href="https://github.com/Giagnus64" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className="footer-icon" icon={faGithub} /></a>
              </p>
            </Content>
        </Container>
    </Footer>)
}
export default MyFooter;