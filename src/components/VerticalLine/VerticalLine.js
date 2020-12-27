import React from 'react';
import styles from './VerticalLine.module.css';

class VerticalLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {column, align} = this.props
        return (
            <hr style={{gridColumnStart:column, justifySelf:align}} className={styles.verticalLine} />
        );
    }
}
 
export default VerticalLine;