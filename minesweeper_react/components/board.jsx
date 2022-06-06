import React from "react";
import Game from "./game";




class Board extends React.Component {

    constructor(props){
        super(props);


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
