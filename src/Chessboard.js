import React from "react"
let Chessboard = function (props) {
    return (
        <div className="board">
            <button className="undo" onClick={props.undoonClick}>Undo</button>
            <div className="content">
                {props.board.map((array, index) => {
                    return (
                        <div className="row">
                            {array.map((array1, index1) => {
                                if (index % 2 == 0 && index1 % 2 == 0 || index % 2 == 1 && index1 % 2 == 1) {
                                    return (<div className={props.green.i==index && props.green.j==index1  ? "green":"white"} onClick={() => props.onClick(index, index1)}><img className="image" src={array1.piece && array1.piece.img} /></div>)
                                } else {
                                    return (<div className={props.green.i==index && props.green.j==index1  ? "green":"black"} onClick={() => props.onClick(index, index1)}><img className="image" src={array1.piece && array1.piece.img} /></div>)
                                }
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Chessboard;