import React from 'react';
import DefaultText from '../DefaultText/DefaultText';
import styles from './IconText.module.css';

class IconText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {children, path, title} = this.props
        return (
            <div className = {styles.main} >
                <img src = {path} />
                <div className={styles.text} > <span className={styles.title} >{title} :</span> {children}</div>
            </div>
        );
    }
}
 
export default IconText;
