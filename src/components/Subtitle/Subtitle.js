import React from 'react';
import styles from './Subtitle.module.css';

class Subtitle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        const {children} = this.props
        return (
            <div className={styles.subtitle} >
                {children}
            </div>
        );
    }
}
 
export default Subtitle;