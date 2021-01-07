import React from 'react';
import styles from './Arrow.module.css';


class Arrow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <img className = {styles.arrow} src="./assets/svg/Arrow.svg" />
        );
    }
}
 
export default Arrow;