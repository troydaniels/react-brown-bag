import React from 'react';
import {observer} from 'mobx-react';
import Board from './Board';
import gameStore from '../stores/GameStore';

@observer
class Game extends React.Component {
    render() {
        const {nextTurn} = gameStore;
        const winner = gameStore.checkIsWinner();
        return (
            <div className="game">
                <div className="status">
                {!winner && (
                    <>
                        Next turn: {nextTurn}
                    </>
                )}
                {winner && (
                    <>
                        Winner: {winner}
                    </>
                )}
                </div>
                <div className="game-board">
                    <Board/>
                </div>
            </div>
        );
    }
}

export default Game;
