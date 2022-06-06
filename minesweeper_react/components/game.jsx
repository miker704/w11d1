import React from "react";
import Tile from "./tile";
import Board from "./board"
import * as Minesweeper from "../minesweeper"
// import {Board} from "../minesweeper"



class Game extends React.Component {
    constructor (props) {

        super(props);
        // debugger
        // const board = new Minesweeper.Board.board(10,2);
        const board = new Minesweeper.Board(10,2);  //Board(10,2)

        this.state = { board: board };
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame () {

    }



    render () {


        return (
            <div>
                <Board board ={this.state.board}/>
            </div>
        );


    }
}

export default Game;