import React from 'react';
import styles from './Dot.module.css';


class Dot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <img src="./assets/svg/Dot.svg" className={styles.dot}/>
        );
    }
}
 
export default Dot;