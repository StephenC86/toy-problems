let maxNum = 100;
let fizz = 3;
let buzz = 5;

for (let index = 1; index <= maxNum; index++) 
{
  let print = "";
  
  if(index % fizz === 0)
  {
    print += "Fizz";
  }
  
  if (index % buzz === 0)
  {
    print += "Buzz";
  }
  
  if ((index % fizz !== 0) && (index % buzz !== 0))
  {
    print += index;
  }

  console.log (print);
}