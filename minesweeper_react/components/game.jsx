import React from "react";
import Tile from "./tile";


class Game extends React.Component {
    constructor (props) {

        super(props);
        const board = new Minesweeper.board();

        this.state = { board: board };
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame () {

    }



    render () {

        // const currentBoard = this.state.board.map(
        //     (subArr) => {
        //         subArr.map(
        //             (ele, idx) => {
        //                 return (
        //                     // <li key={idx}>{ele}</li>
        //                     <Tile />
        //                 );
        //             }
        //         );
        //     }

        // );


        return (
            <div>
                            <Tile />
                
            </div>
        );


    }
}

export default Game;