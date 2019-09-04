import React from 'react';
import {observer} from 'mobx-react';
import '../styles/Square.css';
import gameStore from "../stores/GameStore";

@observer
class Square extends React.Component {
    constructor(props){
        super(props);
        const {position} = this.props;
        this.state = {
            position,
            ownedBy: undefined,
        };
    }

    handleClick = () => {
        const { ownedBy, position } = this.state;
        const {nextTurn: chosenBy} = gameStore;

        if(!ownedBy) {
            this.setState({ownedBy:chosenBy});
            gameStore.makeChoice(position, chosenBy)
            gameStore.progressTurn();
        }
    };

    render() {
        const {ownedBy} = this.state;
        return (
            <div className="square" onClick={()=>this.handleClick()}>
                <div className="owner">
                    {ownedBy}
                </div>
            </div>
        );
    }
}

export default Square;
