let check = function (board, green, i, j) {
  let oldElement = board[green["i"]][green["j"]];
  let check = false;

  let positionwhiteLeft = {
    i: green.i + 1,
    j: green.j + 1,
  };
  let positionwhiteRight = {
    i: green.i + 1,
    j: green.j - 1,
  };
  let positionblackLeft = {
    i: green.i - 1,
    j: green.j + 1,
  };
  let positionblackRight = {
    i: green.i - 1,
    j: green.j - 1,
  };
  if (i == green.i) {
    check = false;
  }

  if (
    (oldElement.piece.color == "white" &&
      (i - green.i == 2 || i - green.i == 1) &&
      j == green.j) ||
    (((i == positionwhiteLeft.i && j == positionwhiteLeft.j) ||
      (i == positionwhiteRight.i && j == positionwhiteRight.j)) &&
      board[i][j].piece &&
      board[i][j].piece.color == "black")
  ) {
    check = true;
  }

  if (
    (oldElement.piece.color == "black" &&
      (green.i - i == 2 || green.i - i == 1) &&
      j == green.j) ||
    (((i == positionblackLeft.i && j == positionblackLeft.j) ||
      (i == positionblackRight.i && j == positionblackRight.j)) &&
      board[i][j].piece &&
      board[i][j].piece.color == "white")
  ) {
    check = true;
  }
  return check;
};

export default check;
