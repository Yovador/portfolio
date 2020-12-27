import React from 'react'
import List from '../List/List';
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';
import VerticalLine from '../VerticalLine/VerticalLine';
import styles from './RightTextCapsule.module.css';


class RightTextCapsule extends React.Component{

    constructor(props){
        super(props)
    }


    render(){
        const {title, subtitle, list} = this.props
        return (
            <div className={styles.main} >
                <VerticalLine/>
                <div className={styles.text}>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                    <List list={list} />
                </div>
            </div>
        );
    }

}

export default RightTextCapsule;