import React from "react";
import Game from "./game";
import Tile from "./tile";




class Board extends React.Component {

    constructor(props){
        super(props);

        this.renderTiles = this.renderTiles.bind(this);
        this.renderRows = this.renderRows.bind(this);

    }

    renderTiles(subArray,subidx){
        const array = this.props.board;
        return subArray.map (
            (tile, idx) => {
                return (<></>)
            }
        )


    }

    renderRows(){
        const currBoard = this.props.board;
        return  currBoard.grid.map(
            (subArray,subidx) => {
                return (
                    <div className="subArray" key={subidx}>
                        {this.renderTiles(subArray,subidx)}
                    </div>
                )
            }
        )
    }


render () {

    const currentBoard = this.props.board.grid.map(
        // (subArr) => {
        //     subArr.map(
        //         (ele, idx) => {
        //             return (
        //                 // <li key={idx}>{ele}</li>
        //                 // <Tile />
        //                 // <p>T</p>
        //             );
        //         }
        //     );
        // }

    );


    return (
        <div>
                        <p>T</p>
            
        </div>
    );


}
}



export default Board;
