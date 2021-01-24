import React from 'react';
import styles from './NavText.module.css';


class NavText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {children, columnStart, columnEnd, path} = this.props
        return (
            <a href= {"#" + path} className={styles.navText} style={{gridColumnStart:columnStart, gridColumnEnd:columnEnd}}>
                {children}
            </a>
        );
    }
}
 
export default NavText;