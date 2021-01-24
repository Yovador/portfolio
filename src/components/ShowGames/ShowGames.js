import React from 'react';
import Carousel from '../Carousel/Carousel';
import Row from '../Row/Row';
import TextCapsule from '../TextCapsule/TextCapsule';
import VerticalLine from '../VerticalLine/VerticalLine';


class ShowGames extends React.Component {


    render() { 
        const divToShow = []
        this.props.games.forEach(game => {
            const pathArray = []
            game.pics.forEach(pic => {
                pathArray.push(pic)
            });
            divToShow.push(
                <Row marginOn = {true}>
                    <Carousel 
                    picArray= { pathArray } 
                    buttonTitle= { game.buttonTitle }
                    href= {game.url}
                    />
                    <VerticalLine column= {7} align={'right'}/>
                    <TextCapsule title={game.name} subtitle={game.type}>
                        {game.desc}
                    </TextCapsule>
                </Row>
                
            )
        });
        return (
            <div>
                {divToShow}
            </div>
        );
    }
}
 
export default ShowGames;