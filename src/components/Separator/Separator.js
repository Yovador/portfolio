import React from 'react';
import styles from './Separator.module.css';

class Separator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <hr className={styles.separator} />
        );
    }
}
 
export default Separator;