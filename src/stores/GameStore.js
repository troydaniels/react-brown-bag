import { configure, observable, action } from 'mobx';

configure({
    enforceActions: 'always',
});

class GameStore {
    @observable nextTurn = "X";

    @observable finished = false;

    board = new Array(9);

    @action
    resetStore = () => {
        this.nextTurn = "X";
        this.finished = false;
    };

    @action
    makeChoice = (position, chosenBy) => {
        this.board[position] = chosenBy;
    };

    @action
    checkIsWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                return this.board[a];
            }
        }
        return null;
    };

    @action
    progressTurn = () => {
        this.nextTurn = this.nextTurn === "X" ? "O" : "X";
    }

}

const gameStore = new GameStore();
export default  gameStore;
