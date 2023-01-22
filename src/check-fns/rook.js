let check = function (board, green, i, j) {
  let position = [];
  let oldElement = board[green["i"]][green["j"]];
  for (let a = green.i - 1; a >= 0; a--) {
    if (!board[a][green.j].piece) {
      position.push({
        i: a,
        j: green.j,
      });
    } else if (oldElement.piece.color !== board[a][green.j].piece.color) {
      position.push({
        i: a,
        j: green.j,
      });
      break;
    } else {
      break;
    }
  }
  for (let a = green.i + 1; a <= 7; a++) {
    if (!board[a][green.j].piece) {
      position.push({
        i: a,
        j: green.j,
      });
    } else if (oldElement.piece.color !== board[a][green.j].piece.color) {
      position.push({
        i: a,
        j: green.j,
      });
      break;
    } else {
      break;
    }
  }

  for (let a = green.j - 1; a >= 0; a--) {
    if (!board[green.i][a].piece) {
      position.push({
        i: green.i,
        j: a,
      });
    } else if (oldElement.piece.color !== board[green.i][a]) {
      position.push({
        i: green.i,
        j: a,
      });
      break;
    } else {
      break;
    }
  }

  for (let a = green.j + 1; a <= 7; a++) {
    if (!board[green.i][a].piece) {
      position.push({
        i: green.i,
        j: a,
      });
    } else if (oldElement.piece.color !== board[green.i][a]) {
      position.push({
        i: green.i,
        j: a,
      });
      break;
    } else {
      break;
    }
  }
  let check = false;
  for (let a = 0; a < position.length; a++) {
    if (i == position[a].i && j == position[a].j) {
      check = true;
    }
  }
  return check;
};
export default check;
