import React from 'react';
import styles from './Portrait.module.css';

class Portrait extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {path, alt} = this.props
        return (
            <div className={styles.container}>
                <img className={styles.portrait}  src={path} alt={alt} />
            </div>
        );
    }
}
 
export default Portrait;