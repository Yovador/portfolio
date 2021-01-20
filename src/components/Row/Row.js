import React from 'react';
import styles from './Row.module.css';

class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let marginStyle = '0rem'
        if(this.props.marginOn == true){
            marginStyle = '7rem'
        }
        return (
            <div id={this.props.id} className={styles.row} style={{marginTop:marginStyle}} >
                {this.props.children}
            </div>
        );
    }
}

export default Row;