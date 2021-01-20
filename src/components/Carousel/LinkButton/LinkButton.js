import React from 'react';
import styles from './LinkButton.module.css';

class LinkButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        return (
            <button className = {styles.main}>
                <a className={styles.text} href={this.props.href} target="_blank">
                    {this.props.children}
                </a>
            </button>
        );
    }
}
 
export default LinkButton;