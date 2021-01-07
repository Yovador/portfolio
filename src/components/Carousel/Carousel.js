import React from 'react';
import Dot from '../Dot/Dot';
import LinkButton from './LinkButton/LinkButton';
import Arrow from './Arrow/Arrow';
import styles from './Carousel.module.css';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImgPath : 0,
            isToggleOn: true
        }

        this.changeImage = this.changeImage.bind(this)
        this.showDot = this.showDot.bind(this)
    }

    changeImage (directMode, value) {

        let path = this.state.currentImgPath
        console.log("Bef", path)

        if(directMode){
            path = value
        }
        else{
            if (value === -1) {
                if (this.state.currentImgPath != 0) {
                    path += value
                    console.log("Back", path)
    
                }
                else{
                    path = this.props.pathArray.length -1
                    console.log("Go last", path)
                }
            }
    
            if (value === 1) {
                if (this.state.currentImgPath != this.props.pathArray.length -1) {
                    path += value
                    console.log("Forward", path)
    
                }
                else{
                    path = 0
                    console.log("Go first", path)
                }
            }
        }

        this.setState({currentImgPath: path})

    }

    showDot () {
        let div = []

        for (let i = 0; i < this.props.pathArray.length; i++) {
            if(i === this.state.currentImgPath){
                div.push(<button onClick = {() => this.changeImage(true, i)} > <Dot/> </button>)
            }
            else{
                div.push(<button onClick = {() => this.changeImage(true, i)}>  <Dot unused={true}  /> </button>)
            }
        }

        return div
    }

    render() { 
    
        return (
            <div className={styles.main} >
                
                <div className={styles.picContainer}>
                    <img className={styles.screenshot} src= {this.props.pathArray[this.state.currentImgPath]} />

                    <div className={styles.buttonContainer}>

                        <button className={styles.arrow, styles.arrowLeft} onClick = {() => this.changeImage(false,-1)} >
                            <Arrow/>
                        </button>

                        <button className={styles.arrow, styles.arrowRight} onClick = { () => this.changeImage(false,1)} >
                            <Arrow/>
                        </button >

                    </div>

                </div>



                <div className={styles.dots}>
                    {this.showDot()}
                </div>    

                <LinkButton href= {this.props.href} > {this.props.buttonTitle} </LinkButton>


            </div>
        );
    }
}
 
export default Carousel;