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
                    <NavText columnStart={1} columnEnd={4}>Yoann Bouquey</NavText>
                    <NavText columnStart={5} columnEnd={7}>Qui suis je ?</NavText>
                    <NavText columnStart={7} columnEnd={9}>Mes qualifications</NavText>
                    <NavText columnStart={9} columnEnd={11}>Mes créations</NavText>
                    <NavText columnStart={11} columnEnd={13}>Me contacter</NavText>
                </Row>
            </header>
        );
    }
}
 
export default NavBar;