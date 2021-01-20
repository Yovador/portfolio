import React from 'react';
import Row from '../Row/Row';
import styles from './NavBar.module.css';
import NavText from './NavText/NavText';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <header className={styles.navbar}>
                <Row>
                    <NavText columnStart={1} columnEnd={4} path="me">Yoann Bouquey</NavText>
                    <NavText columnStart={5} columnEnd={7} path="me" >Qui suis je ?</NavText>
                    <NavText columnStart={7} columnEnd={9} path="quali" >Mes qualifications</NavText>
                    <NavText columnStart={9} columnEnd={11} path="crea" >Mes créations</NavText>
                    <NavText columnStart={11} columnEnd={13} path="contact">Me contacter</NavText>
                </Row>
            </header>
        );
    }
}
 
export default NavBar;