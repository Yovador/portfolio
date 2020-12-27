import React from 'react'
import DefaultText from '../components/DefaultText/DefaultText';
import Dot from '../components/Dot/Dot';
import NavBar from '../components/NavBar/NavBar';
import Portrait from '../components/Portrait/Portrait';
import RightTextCapsule from '../components/RightTextCapsule/RightTextCapsule';
import Row from '../components/Row/Row';
import Separator from '../components/Separator/Separator';
import TextCapsule from '../components/TextCapsule/TextCapsule';
import VerticalLine from '../components/VerticalLine/VerticalLine';
import styles from './App.module.css';

class App extends React.Component{


  render(){
    return (
      <div className={styles.main}>
        <NavBar/>
        <Row marginOn={true}>
          <Portrait path={"./assets/images/portrait.jpg"} alt={"Portrait de Yoann Bouquey"} />
          <VerticalLine column= {7} align={'right'}/>
          <TextCapsule title="Yoann Bouquey" subtitle="Game Designer / Développeur Unity">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            <br/>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            <br/>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            <br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </TextCapsule>
        </Row>
        <Row marginOn={true}>
          <Separator/>
        </Row>
        <Row marginOn={true}>
          <RightTextCapsule 
            title= "Qualifications et compétences" 
            subtitle="Date de modification : Décembre 2020" 
            list= 
            {[
              "Étudiant en 2ème années d’un DUT Métiers du multimédia et de l’Internet",
              "Certifications OPQUAST (Qualité Web)",
              "Développement Unity / C#",
              "Développement web (React-Js)"
            ]}
          />
        </Row>
      </div>
    );
  }

}

export default App;
