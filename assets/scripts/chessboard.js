let board = "";
let boardSize = 8;

for (let height = 0; height < boardSize; height++) 
{
  for (let width = 0; width < boardSize; width++) 
  {
    if((height + width) % 2 === 0)
    {
      board += " ";
    } else
    {
      board += "#";
    }
  }

  board += "\n";
}

console.log(board);
