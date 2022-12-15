
//==================================================================NAVBAR================================================================


  function mobilbutton(){
    if(document.getElementById("menu-slide").style.width=="0px"){
      document.getElementById("menu-slide").style.width="250px";
    }else{
      document.getElementById("menu-slide").style.width="0px";
    }
  }




var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
   
  } else {
    document.getElementById("navbar").style.top = "-90px";
  
  }
  prevScrollpos = currentScrollPos;
}

function responsiveness() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += "responsive";
    } else {
      x.className = "topnav";
    }
  }

//==================================================================SIDER================================================================

let arrowIconLeft = '<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC \'-//W3C//DTD SVG 1.1//EN\'  \'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\'><svg height="50px" id="Layer_1" style="enable-background:new 0 0 50 50;" version="1.1" viewBox="0 0 512 512" width="50px" color="#fff" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "/></svg>';

let slides = document.querySelectorAll('.slide-ana div');
let slideSayisi = slides.length;


let prev = document.getElementById('prev');
let next = document.getElementById('next');
prev.innerHTML = arrowIconLeft;
next.innerHTML = arrowIconLeft;
next.querySelector('svg').style.transform = 'rotate(180deg)';


for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform = "translateX("+100*(index)+"%)";
}
let loop = 0 + 1000*slideSayisi;

function goNext(){
    loop++;
            for (let index = 0; index < slides.length; index++) {
                const element = slides[index];
                element.style.transform = "translateX("+100*(index-loop%slideSayisi)+"%)";
            }
}

function goPrev(){
    loop--;
            for (let index = 0; index < slides.length; index++) {
                const element = slides[index];
                element.style.transform = "translateX("+100*(index-loop%slideSayisi)+"%)";
            }
}

next.addEventListener('click',goNext);
prev.addEventListener('click',goPrev);
document.addEventListener('keydown',function(e){
    if(e.code === 'ArrowRight'){
        goNext();
    }else if(e.code === 'ArrowLeft'){
        goPrev();
    }
});

setInterval(goNext, 5000  );


//==========================================================FORM + JSON===================================================================
// function Model (){
//   this.array = ['-','Vinil', 'CD', 'Digital'];
//   localStorage.setItem('merch',JSON.stringify(this.array));
   
//   this.push = function(value){
//     this.array.push(value);
//     this.save();
//     return true;
//   }
  
//   this.pop = function(value){
//     var index = this.array.indexOf(value);
//     if (index > -1){
//       this.array.splice(index, 1);
//       this.save();
//       return true
//     }
//     return null;
//   } 
  
//   this.get = function(){
//     return JSON.parse(localStorage.getItem('merch'));
//   }
  
//   this.set = function(array){
//     this.array = array;
//   }
  
//   this.show = function(){
//     console.log("Local array: " + this.array);
//   }
  
//   this.save = function(){
//     localStorage.setItem('merch',JSON.stringify(this.array));
//   }
// }

// function View (){
//   this.parent = document.getElementById('manager');
//   this.button = document.getElementById('btn-manager');
  
//   this.generator = function( tag_name , properties ){
//     var tag = document.createElement(tag_name);
//     return properties(tag);
//   }
  
//   this.remove = function(){
//     console.log("hola");
//   }
// }
// ////////////////////////////////////////////////////
// var view = new View();
// var model = new Model();  

// view.button.addEventListener("click",add); 

// function add(){
//   var div = view.generator('div', function(node){
//     node.setAttribute('id','item-container');  
//     return node
//   });
  
//   var select = view.generator('select', function(parent){    
//     var item;
//     for (item in model.get()){
//       parent.appendChild(
//         view.generator('option', function(child){
//           child.setAttribute('value',model.get()[item]);
//           //child.setAttribute('id',"opt" + item);
//           child.innerHTML = model.get()[item];
//           return child
//           }));
//     }
//     parent.setAttribute('id', 'select');
//     parent.classList.add('select');
//     return parent
//   });
  
//   var number = view.generator('input', function(child){
//     child.setAttribute('id','number');
//     child.setAttribute('type','number');
//     child.setAttribute('min','0');
//     child.classList.add('class','manager');
//     return child
//   });
  
//   var button = view.generator('button', function(child){
//     child.setAttribute('id','value');
//     child.setAttribute('type','button');
//     child.classList.add('class','button');
//     child.innerHTML = "-";
//     child.classList.add('class','button');
//     child.classList.add('class','manager');
//     child.addEventListener("click", function(){
//       div.parentNode.removeChild(div);    
//     });
//     return child
//   });
    
//   div.appendChild(select);
//   div.appendChild(number);
//   div.appendChild(button);
//   view.parent.appendChild(div);
// }

// function validateForm() {
//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }else {
//     document.getElementById("user-json").innerHTML=x;
//   }
// }

function mobilbuttonjson(){
  if(document.getElementById("json-form").style.width=="0px"){
    document.getElementById("json-form").style.width="350px";
  }else{
    document.getElementById("json-form").style.width="0px";
  }
}
// function respjson(){
//   if(document.getElementById("json-show-up").style.width=="0px"){
//     document.getElementById("json-form").style.width="450px";
//   }
// }
// setInterval(respjson , 1000 );


function jsonshow(){
  
  let myobj=[{name:"", email:"", message:""}];
  let i=0;
myobj[i].name=document.getElementById("album").value;
myobj[i].email=document.getElementById("artist").value;
myobj[i].message=document.getElementById("textarea").value;
const myJSON = JSON.stringify(myobj[i]);
document.getElementById("user-json").innerHTML = myJSON;
//  return (myJSON,myobj);
//document.getElementById("user-json").innerHTML = myobj.name;
// let text = localStorage.getItem("album");
// let obj = JSON.parse(text);

//  document.getElementById("user-json").innerHTML=obj.name;
 
// document.getElementById("email-json").innerHTML=myobj.email;
// document.getElementById("message-json").innerHTML=myobj.message;
// if(document.getElementById("album").value==null){
//   document.getElementById("json-aera").style.width="0px";

// }
}

setInterval(jsonshow, 200 );

function writejson(){
  let i;
  let myobjjson=[{id:"",name:"", email:"", message:""}];
  
  for(i=0;i<myobjjson.length;i++){
    myobjjson[i].id=i;
    myobjjson[i].name=document.getElementById("album").value;
    myobjjson[i].email=document.getElementById("artist").value;
    myobjjson[i].message=document.getElementById("textarea").value;
  }
  
const myJSON = JSON.stringify(myobjjson);

// var fs = require('fs');
// fs.writeFile('test.json', myJSON, 'utf8', callback);



// fetch('test.json',{ method:'POST',body:JSON.stringify(myobjjson),})
console.log(myJSON);

// File.writeFile("test.json", myJSON, err=>{
//   if(err){
//     console.log("Error writing file" ,err)
//   } else {
//     console.log('JSON data is written to the file successfully')
//   }
//  })
}


//--------------------------------COLOR-----------------------------------------------------------

function lightwhite(){
 

  document.getElementById("navbar").style.backgroundColor="white";
  document.getElementById("logo").src="images/logolight.png";
  document.getElementById("logo").style.height="80px";
  document.getElementById("light").style.color="black";
  document.getElementById("lightone").style.color="black";
  document.getElementById("lighttwo").style.color="black";
  document.getElementById("lightthree").style.color="black";
  document.getElementById("lightfour").style.color="black";
  document.getElementById("lightfive").style.color="black";
  document.getElementById("lightsix").style.color="black";
  document.getElementById("lightseven").style.color="black";
  document.getElementById("lighteight").style.color="black";
  document.getElementById("lightnine").style.color="black";
  document.getElementById("lightten").style.color="black";
  document.getElementById("dropdown").style.backgroundColor="white";
  document.getElementById("dropdowntwo").style.backgroundColor="white";
  document.getElementById("lightsix").style.backgroundColor="white";
  document.getElementById("lighttwo").style.backgroundColor="white";
  document.getElementById("lightthree").style.backgroundColor="white";
  document.getElementById("lightfour").style.backgroundColor="white";
  document.getElementById("lightfive").style.backgroundColor="white";
  document.getElementById("lightnine").style.backgroundColor="white";
  document.getElementById("lightten").style.backgroundColor="white";
  document.getElementById("lighter").style.color="black";
  document.getElementById("lighterone").style.color="black";
  document.getElementById("lightertwo").style.color="black";
  document.getElementById("lighterthree").style.color="black";
  document.getElementById("lighterfour").style.color="black";
  document.getElementById("lighterfive").style.color="black";
  document.getElementById("lightersix").style.color="black";
  document.getElementById("lighterseven").style.color="black";
  document.getElementById("lightereight").style.color="black";
  document.getElementById("lighternine").style.color="black";
  document.getElementById("menu-slide").style.backgroundColor="white";
 document.getElementsByClassName("json-mobile")[0].style.backgroundColor="white";
document.getElementsByClassName("low-footer-div")[0].style.backgroundColor = "white";
document.getElementsByClassName("fa-sun")[0].style.color = "black";
document.getElementsByClassName("fa-moon")[0].style.color = "black";


}

function lightdark(){
  document.getElementById("navbar").style.backgroundColor="black";
  document.getElementById("light").style.color="white";
  document.getElementById("logo").src="images/logo-two.gif";
  document.getElementById("logo").style.height="80px";
  document.getElementById("light").style.color="white";
  document.getElementById("lightone").style.color="white";
  document.getElementById("lighttwo").style.color="white";
  document.getElementById("lightthree").style.color="white";
  document.getElementById("lightfour").style.color="white";
  document.getElementById("lightfive").style.color="white";
  document.getElementById("lightsix").style.color="white";
  document.getElementById("lightseven").style.color="white";
  document.getElementById("lighteight").style.color="white";
  document.getElementById("lightnine").style.color="white";
  document.getElementById("lightten").style.color="white";
  document.getElementById("dropdown").style.backgroundColor="#5f5f5f";
  document.getElementById("dropdowntwo").style.backgroundColor="#5f5f5f";
  document.getElementById("lightsix").style.backgroundColor="#5f5f5f";
  document.getElementById("lighttwo").style.backgroundColor="#5f5f5f";
  document.getElementById("lightthree").style.backgroundColor="#5f5f5f";
  document.getElementById("lightfour").style.backgroundColor="#5f5f5f";
  document.getElementById("lightfive").style.backgroundColor="#5f5f5f";
  document.getElementById("lightnine").style.backgroundColor="#5f5f5f";
  document.getElementById("lightten").style.backgroundColor="#5f5f5f";
  document.getElementById("lighter").style.color="white";
  document.getElementById("lighterone").style.color="white";
  document.getElementById("lightertwo").style.color="white";
  document.getElementById("lighterthree").style.color="white";
  document.getElementById("lighterfour").style.color="white";
  document.getElementById("lighterfive").style.color="white";
  document.getElementById("lightersix").style.color="white";
  document.getElementById("lighterseven").style.color="white";
  document.getElementById("lightereight").style.color="white";
  document.getElementById("lighternine").style.color="white";
  document.getElementById("menu-slide").style.backgroundColor="rgba(0, 0, 0, 0.7)";
  document.getElementsByClassName("low-footer-div")[0].style.backgroundColor = "#222222";
  document.getElementsByClassName("fa-sun")[0].style.color = "white";
  document.getElementsByClassName("fa-moon")[0].style.color = "black";
}


