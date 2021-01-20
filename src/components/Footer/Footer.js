import React from 'react';
import Row from '../Row/Row';
import styles from './Footer.module.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <footer className={styles.main}>
                <Row>
                    <div className={styles.text} style={{gridColumnStart:3, gridColumnEnd:5}}>
                        Site réalisé par Yoann Bouquey
                    </div>
                    <div className={styles.text} style={{gridColumnStart:7, gridColumnEnd:10}}>
                        Icons made by <a className={styles.link} href="https://www.freepik.com" title="Freepik" target="_blank">Freepik</a> from <a className={styles.link} href="https://www.flaticon.com/" title="Flaticon" target="_blank">www.flaticon.com</a>
                    </div>
                </Row>
            </footer>
        );
    }
}
 
export default Footer;