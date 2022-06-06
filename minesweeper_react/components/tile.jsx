import React from "react";



class Tile extends React.Component {

    constructor (props) {

        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick (e) {
        let flagged = e.altKey ? true : false;
        console.log("alt pressed");
        this.props.updateGame(this.props.tile, flagged);
    }

    render () {
        const tile = this.props.tile;
        //if the tile is revealed check to see if was flagged bombed or 
        // revealed (shows number)
        // if(tile.explored===true && tile.bombed === true){
        //     //
        //     if(tile.bombed === true){
            //     }
            //     else {
                
                //     }
                
                
                
                // }
                // else if(tile.flagged === true){
                    
                    // }
                    
                    if (tile.flagged === true) {
                        return (
                            
                            <div className="flagged tile" onClick={this.handleClick}>flagged</div>
                            );
                            
                        }
                        else if(tile.explored ===true && tile.bombed ===false){
                            let surroundingBombCount = tile.adjacentBombCount();

                            return (
                                
                               
                                <div className="explored tile"onClick={this.handleClick}>{surroundingBombCount>1?surroundingBombCount:""}</div>
                                                                            
                                            
                                )
                                
                            }
                            else if(tile.explored && tile.bombed){
                                return (
                            
                                                <div className="bombed tile"onClick={this.handleClick}></div>
                                            )
                                    
                                }
                                
                                else {
                                    
                                    return (
                                        
                                        <div className="tile" onClick={this.handleClick}></div>
                                        );
                                    }
                }
                
            }
            
            export default Tile;
            