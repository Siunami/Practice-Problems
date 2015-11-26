size = 8;
board = "";
for(var y = 0; y<size; y++){
  for(var x = 0; x<size; x++){
    if((x+y) % 2 == 0)
      board += " ";
    else if ((x+y) % 2 != 0)
      board += "#";
  }
  board += "\n";
}
console.log(board);

/*Chessboard pattern*/
