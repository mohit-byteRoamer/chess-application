let check = function (board, green, i, j) {
  let oldElement = board[green["i"]][green["j"]];
  let a = green.i;
  let b = green.j;
  let position = [];

  for (;;) {
    a = a + 1;
    b = b - 1;
    if (a < 0 || a > 7 || b < 0 || b > 7) {
      break;
    }
    if (!board[a][b].piece) {
      position.push({
        i: a,
        j: b,
      });
    } else if (oldElement.piece.color !== board[a][b].piece.color) {
      position.push({
        i: a,
        j: b,
      });
      break;
    } else {
      break;
    }
  }

  a = green.i;
  b = green.j;
  for (;;) {
    a = a + 1;
    b = b + 1;
    if (a < 0 || a > 7 || b < 0 || b > 7) {
      break;
    }
    if (!board[a][b].piece) {
      position.push({
        i: a,
        j: b,
      });
    } else if (oldElement.piece.color !== board[a][b].piece.color) {
      position.push({
        i: a,
        j: b,
      });
      break;
    }
    else {
      break;
    }
  }

  a = green.i;
  b = green.j;
  for (;;) {
    a = a - 1;
    b = b + 1;
    if (a < 0 || a > 7 || b < 0 || b > 7) {
      break;
    }
    if (!board[a][b].piece) {
      position.push({
        i: a,
        j: b,
      });
    } 
    else if (oldElement.piece.color !== board[a][b].piece.color) {
      position.push({
        i: a,
        j: b,
      });
      break;
    }
    else {
      break;
    }
  }

  a = green.i;
  b = green.j;
  for (;;) {
    a = a - 1;
    b = b - 1;
    if (a < 0 || a > 7 || b < 0 || b > 7) {
      break;
    }
    if (!board[a][b].piece) {
      position.push({
        i: a,
        j: b,
      });
    }
    else if (oldElement.piece.color !== board[a][b].piece.color) {
      position.push({
        i: a,
        j: b,
      });
      break;
    }
    else {
      break;
    }
  }

  for (let a = green.i + 1; a <=7; a++) {
    if (!board[a][green.j].piece) {
      position.push({
        i: a,
        j: green.j,
      });
    }
    else if (oldElement.piece.color !== board[a][green.j].piece.color) {
      position.push({
        i: a,
        j: green.j,
      });
      break;
    }
    else {
      break;
    }
  }

  for (let a = green.i - 1; a >= 0; a--) {
    if (!board[a][green.j].piece) {
      position.push({
        i: a,
        j: green.j,
      });
    }
    else if (oldElement.piece.color !== board[a][green.j].piece.color) {
      position.push({
        i: a,
        j: green.j,
      });
      break;
    }
    else {
      break;
    }
  }

  for (let a = green.j + 1; a <= 7; a++) {
    if (!board[green.i][a].piece) {
      position.push({
        i: green.i,
        j: a,
      });
    }
    else if (oldElement.piece.color !== board[green.i][a].piece.color) {
      position.push({
        i: green.i,
        j: a,
      });
      break;
    }
    else {
      break;
    }
  }

  for (let a = green.j - 1; a >=0; a--) {
    if (!board[green.i][a].piece) {
      position.push({
        i: green.i,
        j: a,
      });
    }
    else if (oldElement.piece.color !== board[green.i][a].piece.color) {
      position.push({
        i: green.i,
        j: a,
      });
      break;
    }
    else {
      break;
    }
  }

  let check = false;
  for (let c = 0; c < position.length; c++) {
    if (i == position[c].i && j == position[c].j) {
      check = true;
    }
  }
  return check;
};

export default check;
