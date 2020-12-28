import React from 'react';
import styles from './Dot.module.css';


class Dot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.Type = this.Type.bind(this)
    }

    Type(){
        let div =  <img src="./assets/svg/Dot.svg" className={styles.dot}/>
        if(this.props.unused){
            div = <img src="./assets/svg/Dot-unselected.svg" className={styles.dot}/>
        }
        return div
    }

    render() { 
        return (
            <div>
                {this.Type()}
            </div>
                
        );
    }
}


 
export default Dot;