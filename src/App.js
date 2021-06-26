import React from "react";
import "./App.css";
import Chessboard from "./Chessboard";
import knightCheckFunction from "./check-fns/knight";
import rookCheckFunction from "./check-fns/rook";
import bishopCheckFunction from "./check-fns/bishop";
import queenrookCheckFunction from "./check-fns/queen";
import kingCheckFunction from "./check-fns/king";
import pawnCheckFunction from "./check-fns/pawn";
import lodash, { compact } from "lodash";

// let result =lodash.cloneDeep(board)

let board = [
  [
    {
      piece: {
        name: "Rook",
        color: "white",
        img: "https://static.thenounproject.com/png/1314865-200.png",
      },
    },
    {
      piece: {
        name: "Knight",
        color: "white",
        img: "https://static.thenounproject.com/png/636229-200.png",
      },
    },
    {
      piece: {
        name: "Bishop",
        color: "white",
        img: "https://static.thenounproject.com/png/1335724-200.png",
      },
    },
    {
      piece: {
        name: "Queen",
        color: "white",
        img: "https://static.thenounproject.com/png/1335715-200.png",
      },
    },
    {
      piece: {
        name: "King",
        color: "white",
        img: "https://static.thenounproject.com/png/1335720-200.png",
      },
    },
    {
      piece: {
        name: "Bishop",
        color: "white",
        img: "https://static.thenounproject.com/png/1335724-200.png",
      },
    },
    {
      piece: {
        name: "Knight",
        color: "white",
        img: "https://static.thenounproject.com/png/636229-200.png",
      },
    },
    {
      piece: {
        name: "Rook",
        color: "white",
        img: "https://static.thenounproject.com/png/1314865-200.png",
      },
    },
  ],
  [
    {
      piece: {
        name: "Pawn",
        color: "white",
        img: "https://static.thenounproject.com/png/1335718-200.png",
      },
    },
    {
      piece: {
        name: "Pawn",
        color: "white",
        img: "https://static.thenounproject.com/png/1335718-200.png",
      },
    },
    {
      piece: {
        name: "Pawn",
        color: "white",
        img: "https://static.thenounproject.com/png/1335718-200.png",
      },
    },
    {
      piece: {
        name: "Pawn",
        color: "white",
        img: "https://static.thenounproject.com/png/1335718-200.png",
      },
    },
    {
      piece: {
        name: "Pawn",
        color: "white",
        img: "https://static.thenounproject.com/png/1335718-200.png",
      },
    },
    {
      piece: {
        name: "Pawn",
        color: "white",
        img: "https://static.thenounproject.com/png/1335718-200.png",
      },
    },
    {
      piece: {
        name: "Pawn",
        color: "white",
        img: "https://static.thenounproject.com/png/1335718-200.png",
      },
    },
    {
      piece: {
        name: "Pawn",
        color: "white",
        img: "https://static.thenounproject.com/png/1335718-200.png",
      },
    },
  ],
  [{}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}],
  [
    {
      piece: {
        name: "Pawn",
        color: "black",
        img: "https://static.thenounproject.com/png/1341516-200.png",
      },
    },
    {
      piece: {
        name: "Pawn",
        color: "black",
        img: "https://static.thenounproject.com/png/1341516-200.png",
      },
    },
    {
      piece: {
        name: "Pawn",
        color: "black",
        img: "https://static.thenounproject.com/png/1341516-200.png",
      },
    },
    {
      piece: {
        name: "Pawn",
        color: "black",
        img: "https://static.thenounproject.com/png/1341516-200.png",
      },
    },
    {
      piece: {
        name: "Pawn",
        color: "black",
        img: "https://static.thenounproject.com/png/1341516-200.png",
      },
    },
    {
      piece: {
        name: "Pawn",
        color: "black",
        img: "https://static.thenounproject.com/png/1341516-200.png",
      },
    },
    {
      piece: {
        name: "Pawn",
        color: "black",
        img: "https://static.thenounproject.com/png/1341516-200.png",
      },
    },
    {
      piece: {
        name: "Pawn",
        color: "black",
        img: "https://static.thenounproject.com/png/1341516-200.png",
      },
    },
  ],
  [
    {
      piece: {
        name: "Rook",
        color: "black",
        img: "https://static.thenounproject.com/png/1341517-200.png",
      },
    },
    {
      piece: {
        name: "Knight",
        color: "black",
        img: "https://static.thenounproject.com/png/1341508-200.png",
      },
    },
    {
      piece: {
        name: "Bishop",
        color: "black",
        img: "https://static.thenounproject.com/png/1341513-200.png",
      },
    },
    {
      piece: {
        name: "Queen",
        color: "black",
        img: "https://static.thenounproject.com/png/1341515-200.png",
      },
    },
    {
      piece: {
        name: "King",
        color: "black",
        img: "https://static.thenounproject.com/png/1341511-200.png",
      },
    },
    {
      piece: {
        name: "Bishop",
        color: "black",
        img: "https://static.thenounproject.com/png/1341513-200.png",
      },
    },
    {
      piece: {
        name: "Knight",
        color: "black",
        img: "https://static.thenounproject.com/png/1341508-200.png",
      },
    },
    {
      piece: {
        name: "Rook",
        color: "black",
        img: "https://static.thenounproject.com/png/1341517-200.png",
      },
    },
  ],
];

let funcMap = {
  Pawn: pawnCheckFunction,
  Bishop: bishopCheckFunction,
  Knight: knightCheckFunction,
  Queen: queenrookCheckFunction,
  King: kingCheckFunction,
  Rook: rookCheckFunction,
};
let colorcompare = "";
let history = [];
function App() {
  let [green, setGreen] = React.useState({});
  let [counter, setCounter] = React.useState(0);
  let onClick = function (i, j) {
    //i,j argeument khetho layi ne
    if (green.i !== undefined) {
      let oldElement = board[green["i"]][green["j"]];
      let newElement = board[i][j];
      if (oldElement == newElement) {
        setGreen({});
        return;
      }
      if (!oldElement.piece) {
        setGreen({});
        return;
      }
      let shouldMovefn = funcMap[oldElement.piece.name]; //aapa array hi wich hi kiyo pass kita
      let shouldMove = shouldMovefn(board, green, i, j);
      if (shouldMove == false) {
        return;
      }
      let result = lodash.cloneDeep(board);
      newElement.piece = oldElement.piece;///why
      history.push({
        a: result,
        b: colorcompare,
      });
      colorcompare = oldElement.piece.color;
      delete oldElement.piece;
      setGreen({});
    } else {
      if (board[i][j].piece && board[i][j].piece.color == colorcompare) {
        return;
      }
      setGreen({
        i: i,
        j: j,
      });
    }
  };

  let undoonClick = function () {
    if (history.length == 0) {
      return;
    }
    let last = history.pop();
    board = last.a;
    colorcompare = last.b;
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <Chessboard
        board={board}
        onClick={onClick}
        undoonClick={undoonClick}
        green={green}
      ></Chessboard>
    </div>
  );
}

export default App;
