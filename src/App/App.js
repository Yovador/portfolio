import React from 'react'
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';
import IconText from '../components/IconText/IconText';
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
      <div className={styles.main} id="me">
        <NavBar/>

        <Row marginOn={true} >
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
        <Row marginOn={true}  id="quali">
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

        <Row marginOn={true} id="crea">
          <Separator/>
        </Row>

        <Row marginOn={true} >
          <RightTextCapsule 
            title= "Mes Créations" 
          />
        </Row>

        <Row marginOn={true}>
          <Carousel 
            pathArray={["https://cdn.discordapp.com/attachments/635898689721991169/790598043149008906/unknown.png", "https://cdn.discordapp.com/attachments/635898689721991169/790597955824254976/unknown.png", "https://cdn.discordapp.com/attachments/635898689721991169/790598172023586836/unknown.png", "https://site.groupe-psa.com/content/uploads/sites/9/2016/12/white-background-2.jpg" ]} 
            buttonTitle="Lien de la Page itch.io"
            href="https://yovadorgmailcom.itch.io/masuku"
          />
          <VerticalLine column= {7} align={'right'}/>
          <TextCapsule title="Masuku" subtitle="Jeux / Projet Étudiant">
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
