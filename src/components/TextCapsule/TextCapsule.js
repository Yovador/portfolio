import React from 'react'
import DefaultText from '../DefaultText/DefaultText';
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';
import styles from './TextCapsule.module.css';


class TextCapsule extends React.Component{

    constructor(props){
        super(props)
    }


    render(){
        const {children, title, subtitle} = this.props
        return (
            <div className={styles.textCapsule}>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <DefaultText>{children}</DefaultText>
            </div>
        );
    }

}

export default TextCapsule;