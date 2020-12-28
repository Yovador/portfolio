import React from 'react';
import styles from './List.module.css';
import ListElement from './ListElement/ListElement';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {list} = this.props 
        let div = []
        if (list != undefined){
            list.forEach(element => {
                console.log(element)
                div.push(<ListElement> {element} </ListElement>)
            });
        }

        return (
            <ul className={styles.list} >
                {div}
            </ul>
        );
    }
}
 
export default List;