import React from 'react';
import styles from './LinkButton.module.css';

class LinkButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <a className = {styles.main} href={this.props.href}>
                <button className={styles.text} >
                        {this.props.children}
                </button>
            </a>
        );
    }
}
 
export default LinkButton;