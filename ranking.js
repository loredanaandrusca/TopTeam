
var avr1,avr2;
function average(a,b,c){
   return ((a+b+c)/3);   
}

function averageTeam1(){ 	
   var a = +document.getElementById("scoreInput1").value;
   var b = +document.getElementById("scoreInput2").value;    
   var c = +document.getElementById("scoreInput3").value;   	
   avr1=average(a,b,c);	
}
function averageTeam2(){
   var a = +document.getElementById("scoreInput11").value;
   var b = +document.getElementById("scoreInput22").value;    
   var c = +document.getElementById("scoreInput33").value;   	
   avr2=average(a,b,c);
}
function addElement(teamName){ 
    var newDiv= document.createElement("div");
    var newContent=document.createTextNode(teamName);
    newDiv.appendChild(newContent);
    newDiv.classList.add("teamN");
    var currentDiv = document.getElementById("result");
    currentDiv.appendChild(newDiv);
    }
 

document.getElementById("averageButton").onclick = function result(){
averageTeam1();
averageTeam2();
if(avr1>avr2){
    addElement("The Floiterstr")
} else if(avr1<avr2){
    addElement("The Stroerstr");
} else if(avr1==avr2){
    addElement("Equality")
}else{
    addElement("try again")
}
document.getElementById('averageButton').classList.add('hide');
}

result();


