import React from 'react'
import Portrait from '../components/Portrait/Portrait';
import TextCapsule from '../components/TextCapsule/TextCapsule';
import VerticalLine from '../components/VerticalLine/VerticalLine';
import styles from './App.module.css';


class App extends React.Component{


  render(){
    return (
      <div className={styles.main}>
        <div className={styles.row}>
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
        </div>
      </div>
    );
  }

}

export default App;
