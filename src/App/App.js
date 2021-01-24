import React from 'react'
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';
import IconText from '../components/IconText/IconText';
import NavBar from '../components/NavBar/NavBar';
import Portrait from '../components/Portrait/Portrait';
import RightTextCapsule from '../components/RightTextCapsule/RightTextCapsule';
import Row from '../components/Row/Row';
import Separator from '../components/Separator/Separator';
import ShowGames from '../components/ShowGames/ShowGames';
import TextCapsule from '../components/TextCapsule/TextCapsule';
import VerticalLine from '../components/VerticalLine/VerticalLine';
import {whoami, games, portraitSelf} from '../Data/Data';
import styles from './App.module.css';


class App extends React.Component{


  render(){
    return (
      <div className={styles.main} id="me">
        <NavBar/>

        <Row marginOn={true} >
          <Portrait path={portraitSelf.path} alt={portraitSelf.alt} />
          <VerticalLine column= {7} align={'right'}/>
          <TextCapsule title="Yoann Bouquey" subtitle="Game Designer / Développeur Unity">
              {whoami}
          </TextCapsule>
        </Row>
        <Row marginOn={true}  id="quali">
          <Separator/>
        </Row>
        <Row marginOn={true}>
          <RightTextCapsule 
            title= "Qualifications et compétences" 
            subtitle="Date de modification : Janvier 2020" 
            list= 
            {[
              "Étudiant en 2ème années d’un DUT Métiers du multimédia et de l’Internet",
              "Certifications OPQUAST (Qualité Web)",
              "Développement Unity / C#",
              "Développement web (React-Js)",
              "Game Design et Level Design"
            ]}
          />
        </Row>

        <Row marginOn={true} id="crea">
          <Separator/>
        </Row>

        <Row marginOn={true} >
          <RightTextCapsule 
            title= "Mes Créations" 
          />
        </Row>

        <ShowGames games = {games}/>

        <Row marginOn={true}>
          <Separator/>
        </Row>

        <Row marginOn={true} id="contact">
          <RightTextCapsule 
            title= "Me contacter" 
          />
        </Row>

        <Row marginOn={true}>
          <IconText path="./assets/svg/mail.svg" title="Mail"> yoann.bouquey@mmibordeaux.com </IconText>
          <IconText path="./assets/svg/phone.svg" title="Téléphone"> 06 02 26 16 52 </IconText>
        </Row >

        <Footer/>

      </div>
    );
  }

}

export default App;
