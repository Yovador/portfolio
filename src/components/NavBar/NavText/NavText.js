import React from 'react';
import styles from './NavText.module.css';


class NavText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {children, columnStart, columnEnd} = this.props
        return (
            <div className={styles.navText} style={{gridColumnStart:columnStart, gridColumnEnd:columnEnd}} >
                {children}
            </div>
        );
    }
}
 
export default NavText;