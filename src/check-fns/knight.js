
let check = function (board, green, i, j) {
  
  let obj = {
    i: green.i + 2,
    j: green.j + 1,
  };
  let obj1 = {
    i: green.i + 2,
    j: green.j - 1,
  };
  let obj2 = {
    i: green.i + 1,
    j: green.j + 2,
  };
  let obj3 = {
    i: green.i - 1,
    j: green.j + 2,
  };
  let obj4 = {
    i: green.i - 2,
    j: green.j + 1,
  };
  let obj5 = {
    i: green.i - 2,
    j: green.j - 1,
  };
  let obj6 = {
    i: green.i - 1,
    j: green.j - 2,
  };
  let obj7 = {
    i: green.i + 1,
    j: green.j - 2,
  };

  let position = [obj, obj1, obj2, obj3, obj4, obj5, obj6, obj7];
  let r=[]
  let check = false;
  for (let a = 0; a < position.length; a++) {
    if (i == position[a].i && j == position[a].j) {
      check = true;
    }
  }
  let oldElement = board[green.i][green.j];
  if(board[i][j].piece && board[i][j].piece.color == oldElement.piece.color){
    check = false;
  }
  return check ;
};


export default check;
