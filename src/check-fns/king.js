let check=function(board,green,i,j){
    if (i - green.i > 1 || green.i - i > 1 || green.j-j > 1 || j - green.j > 1) {
        return false;
      }else{
          return true;
      }
}

export default check;