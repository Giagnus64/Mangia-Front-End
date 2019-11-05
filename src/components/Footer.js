import React from 'react';
import {Footer, Container, Content} from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'


const MyFooter = () => {
    return (<Footer className="my-footer">
        <Container>
            <Content style={{ textAlign: 'center' }}>
                <p>&copy; Made by <a className="name-link" target="_blank" rel="noopener noreferrer" href="http://www.gianfranconuschese.com">Gianfranco Nuschese</a>
                     <a href="https://github.com/Giagnus64/Mangia-API" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className="footer-icon" icon={faGithub} /></a>
              </p>
            </Content>
        </Container>
    </Footer>)
}
export default MyFooter;