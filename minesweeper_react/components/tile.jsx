import React from "react";



class Tile extends React.Component {

    constructor(props){

        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(e){
        // let flagged = e. ? true : false; ????
        this.props.updateGame(this.props.tile,flagged);
    }

    render(){
        const tile = this.props.tile;
        //if the tile is revealed check to see if was flagged bombed or 
        // revealed (shows number)
        if(tile.explored===true){
            //
            if(tile.bombed === true){

            }
            else {

                surroundingBombCount = tile.adjacentBombCount();
                // if bombcount > 1  do something ?? ? ? /
            }


        }
        else if(tile.flagged === true){

        }





        return (

            <div className="">onClick={this.handleClick}</div>
        )
    }

}

export default Tile;
