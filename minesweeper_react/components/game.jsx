import React from "react";



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
        return (
            <div>
                
            </div>
        );
    }
}