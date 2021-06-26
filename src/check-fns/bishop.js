let check = function (board, green, i, j) {
  let oldElement = board[green["i"]][green["j"]];
  let a = green.i;
  let b = green.j;
  let position = [];
  for (;;) {
    a = a - 1;
    b = b - 1;
    if (a < 0 || a >= 7 || b < 0 || b >= 7) {
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
    } else {
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

  let Check = false;
  for (let a = 0; a < position.length; a++) {
    if (i == position[a].i && j == position[a].j) {
      Check = true;
    }
  }
  if (Check == false) {
    return false;
  } else {
    return true;
  }
};

export default check;
