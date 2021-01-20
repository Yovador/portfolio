import React from 'react';
import styles from './Dot.module.css';


class Dot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.Type = this.Type.bind(this)
    }

    Type(){

        let classBundle = styles.dot

        if(this.props.hoverOn){
            classBundle = classBundle + " , " + styles.dotHover 
        }
        
        let div =  <img src="./assets/svg/Dot.svg" className={classBundle}/>
        if(this.props.unused){
            div = <img src="./assets/svg/Dot-unselected.svg" className={classBundle}/>
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