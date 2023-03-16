let japan=document.getElementById('root');

function bigBowl(target,w,h,b,d){
  target.style.width=w;
  target.style.height=h;
  target.style.border=b;
  target.style.display=d;


}
 
 for(i=0;i<=5;i++){
let make =document.createElement("div"); 
   root.appendChild(make);
  }  

  
  bigBowl(root,"100vw","88vh","blue","");
  
    bigBowl(root.children[0],"500px","100px","5px solid black","flex");
    bigBowl(root.children[1],"500px","100px","5px solid black","flex");
    bigBowl(root.children[2],"500px","100px","5px solid black","flex");
    bigBowl(root.children[3],"500px","100px","5px solid black","flex");
    bigBowl(root.children[4],"500px","100px","5px solid black","flex");

    let firstcan=root.children[0];
    let secondcan=root.children[1];
    let thirdcan=root.children[2];
    let fourcan=root.children[3];
    let fivecan=root.children[4];

   for(i=0;i<=4;i++){
    let first=document.createElement("div");
    firstcan.appendChild(first);
    first.style.width="100px";
    first.style.height="100px";
    first.style.border="4px solid green";

    let second=document.createElement("div");
    secondcan.appendChild(second);
    second.style.width="100px";
    second.style.height="100px";
    second.style.border="4px solid green";
     
    let third=document.createElement("div");
    thirdcan.appendChild(third);
    third.style.width="100px";
    third.style.height="100px";
    third.style.border="4px solid green";

    let four=document.createElement("div");
    fourcan.appendChild(four);
    four.style.width="100px";
    four.style.height="100px";
    four.style.border="4px solid green";

    let five=document.createElement("div");
    fivecan.appendChild(five);
    five.style.width="100px";
    five.style.height="100px";
    five.style.border="4px solid green";

   }
