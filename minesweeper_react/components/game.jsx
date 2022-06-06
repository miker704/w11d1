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
        const board = new Minesweeper.Board(10,10);  //Board(10,2)

        this.state = { board: board };
        this.updateGame = this.updateGame.bind(this);
        this.restartgame = this.restartgame.bind(this);
    }

    updateGame (tile, flagged) {
        if(flagged === true){
            tile.toggleFlag();
        }
        else{
            tile.explore();
        }
        this.setState({ board: this.state.board });
    }

    restartgame(){
        const board = new Minesweeper.Board(10,10);
        this.setState({board:board});
    }

    render () {


        if(this.state.board.won()){
            alert("won");
            this.restartgame();
            // $(document).ready(function(){

            //     window.showModal = function(){
            //       $(".modal").addClass("is-active");
            //     }
            
            //     window.hideModal = function(){
            //       $(".modal").removeClass("is-active");
            //     }
            
            //   });
        }
        else if(this.state.board.lost()){
        alert("lost");
            this.restartgame();
            // $(document).ready(function(){

            //     window.showModal = function(){
            //       $(".modal").addClass("is-active");
            //     }
            
            //     window.hideModal = function(){
            //       $(".modal").removeClass("is-active");
            //     }
            
            
            //   });
        
        }


        return (
            <div>
                    <div className="modal">



                    </div>
                <Board board ={this.state.board} updateGame={this.updateGame}/>
                <button onClick={this.restartgame}>restartGame</button>
            </div>
        );


    }
}

export default Game;