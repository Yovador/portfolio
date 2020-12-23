import React from 'react';
import styles from './Title.module.css';

class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        const {children} = this.props
        return (
            <div className={styles.title}>
                {children}
            </div>
        );
    }
}
 
export default Title;