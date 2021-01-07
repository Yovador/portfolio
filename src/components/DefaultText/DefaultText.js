import React from 'react';
import styles from './DefaultText.module.css';


class DefaultText extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        const {children} = this.props
        return ( 
            <div className={styles.text} >
                {children}
            </div>
        );
    }
}
 
export default DefaultText;