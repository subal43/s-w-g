let y="yes"
while(y=="yes")
  {
let num=prompt("Enter s,w or g")
let cpui=Math.floor(Math.random()*3)
let cpu=["s","w","g"][cpui]
console.log("you choose :"+num)
console.log("computer choose :"+cpu)
if(num==cpu)
{
  console.log("it's a tie")
}
else if(num=="s" && cpu=="w" || num=="w" && cpu=="g" || num=="g" && cpu=="s")
{
  console.log("you win")
}
else
{
  console.log("you lose")
}
y=prompt("do you want to play again? ") 
  }

    

