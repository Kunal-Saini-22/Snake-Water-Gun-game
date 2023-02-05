let choices = ["snake" , "water" , "gun"];
let index = Math.floor((Math.random()*3));

let choice = choices[index];

let reload_page = ()=>{
    document.location.reload(true);
}

let r =  document.getElementById("result");

let respond = (val)=>{
    // console.log("you choosed : ",val);
// r.innerHTML = "You Choosed : " + val;

  if(choice === val)
  {
    // console.log("it's a draw , try one more time...");
    r.innerText = "It's a draw , try one more time...";
    setInterval(reload_page(),10000);
  }

switch(choice)
{
    case "snake" :    

    if(val == "water"){
    // console.log("You Lost !!");
    r.innerText = "You  Lost ! ";}
    else if(val == "gun"){
        r.innerText = "You win !!"; } 
    break; 

    case "water" :             
    
    if(val == "snake"){
        r.innerText = "You win !!";}
    else if(val == "gun"){
        r.innerText = "You  Lost ! ";}
    break;
    
    case "gun":

    if(val == "snake"){
        r.innerText = "You  Lost ! ";}
    else if(val == "water"){
        r.innerText= "You win !!";}
    break;
}

// console.log("computer choosed : " , choice);

}


