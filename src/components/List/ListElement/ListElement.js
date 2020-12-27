import React, { Children } from 'react';
import DefaultText from '../../DefaultText/DefaultText';
import Dot from '../../Dot/Dot';
import styles from './ListElement.module.css';

class ListElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {children} = this.props
        return (
            <li className={styles.container} >
                <Dot/>
                <div className={styles.text}>
                    <DefaultText>
                            {children} 
                    </DefaultText>
                </div>
            </li>
        );
    }
}
 
export default ListElement;