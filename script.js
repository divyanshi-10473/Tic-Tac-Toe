box=document.querySelectorAll(".box");
resetbtn=document.querySelector(".reset");
startbtn=document.createElement("button");
startbtn.innerHTML="New Game";
let count=0;
let winnerPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let turn=true;
box.forEach(e => {
    e.addEventListener('click',()=>{
        if(turn){
            e.innerText="X";
            turn=false;
            e.style.color = "#FFE6E6"
          
        }
        else{
            e.innerText="O";
            turn=true;
            e.style.color = "#E1AFD1"
        }
        
        e.disabled="true";
        count++;
        let iswinner=winner();
        if( count===9 && !iswinner){
               
            div=document.createElement("div");
            div.innerHTML=`Match was draw`
             win.append(div);
             win.append(startbtn);
        }
    })
});

win=document.querySelector(".win");

const winner=()=>{



    winnerPattern.forEach(e => {
        
        let pos0=e[0];
        let pos1=e[1];
        let pos2=e[2];
        d1=box[pos0].innerText;
        d2=box[pos1].innerText;
        d3=box[pos2].innerText;
    
        if(d1!="" && d2!="" && d3!=""){
            if(d1===d2 && d2===d3 ){
                div=document.createElement("div");
                div.innerHTML=`🎉Congratulation🎉 <br>Player ${d1} is winner`
                 win.append(div);
                 win.append(startbtn);
                box.forEach(e=>{
                    e.disabled=true;
                    count=0;
                   return true;
                })
            }
           return false; 
      }
        
     

    });
}




resetbtn.addEventListener('click',()=>{
    win.innerHTML="";
     box.forEach(e=>{
        e.innerText="";
        e.disabled=false;   
        count=0; 
     })
 })

startbtn.addEventListener('click',()=>{
    win.innerHTML="";
     box.forEach(e=>{
        e.innerText="";
        e.disabled=false;  
        count=0; 
      
     })
    
 })

