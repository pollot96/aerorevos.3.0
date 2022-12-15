// // let arrowIconLeft = '<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC \'-//W3C//DTD SVG 1.1//EN\'  \'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\'><svg height="50px" id="Layer_1" style="enable-background:new 0 0 50 50;" version="1.1" viewBox="0 0 512 512" width="50px" color="#fff" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "/></svg>';

// // let slides = document.querySelectorAll('.slide-ana div');
// // let slideSayisi = slides.length;


// // let prev = document.getElementById('prev');
// // let next = document.getElementById('next');
// // prev.innerHTML = arrowIconLeft;
// // next.innerHTML = arrowIconLeft;
// // next.querySelector('svg').style.transform = 'rotate(180deg)';


// // for (let index = 0; index < slides.length; index++) {
// //     const element = slides[index];
// //     element.style.transform = "translateX("+100*(index)+"%)";
// // }
// // let loop = 0 + 1000*slideSayisi;

// // function goNext(){
// //     loop++;
// //             for (let index = 0; index < slides.length; index++) {
// //                 const element = slides[index];
// //                 element.style.transform = "translateX("+100*(index-loop%slideSayisi)+"%)";
// //             }
// // }

// // function goPrev(){
// //     loop--;
// //             for (let index = 0; index < slides.length; index++) {
// //                 const element = slides[index];
// //                 element.style.transform = "translateX("+100*(index-loop%slideSayisi)+"%)";
// //             }
// // }

// // next.addEventListener('click',goNext);
// // prev.addEventListener('click',goPrev);
// // document.addEventListener('keydown',function(e){
// //     if(e.code === 'ArrowRight'){
// //         goNext();
// //     }else if(e.code === 'ArrowLeft'){
// //         goPrev();
// //     }
// // });

// function Model (){
//     this.array = ['-','Vinil', 'CD', 'Digital'];
//     localStorage.setItem('merch',JSON.stringify(this.array));
     
//     this.push = function(value){
//       this.array.push(value);
//       this.save();
//       return true;
//     }
    
//     this.pop = function(value){
//       var index = this.array.indexOf(value);
//       if (index > -1){
//         this.array.splice(index, 1);
//         this.save();
//         return true
//       }
//       return null;
//     } 
    
//     this.get = function(){
//       return JSON.parse(localStorage.getItem('merch'));
//     }
    
//     this.set = function(array){
//       this.array = array;
//     }
    
//     this.show = function(){
//       console.log("Local array: " + this.array);
//     }
    
//     this.save = function(){
//       localStorage.setItem('merch',JSON.stringify(this.array));
//     }
//   }
  
//   function View (){
//     this.parent = document.getElementById('manager');
//     this.button = document.getElementById('btn-manager');
    
//     this.generator = function( tag_name , properties ){
//       var tag = document.createElement(tag_name);
//       return properties(tag);
//     }
    
//     this.remove = function(){
//       console.log("hola");
//     }
//   }
//   ////////////////////////////////////////////////////
//   var view = new View();
//   var model = new Model();  
  
//   view.button.addEventListener("click",add); 
  
//   function add(){
//     var div = view.generator('div', function(node){
//       node.setAttribute('id','item-container');  
//       return node
//     });
    
//     var select = view.generator('select', function(parent){    
//       var item;
//       for (item in model.get()){
//         parent.appendChild(
//           view.generator('option', function(child){
//             child.setAttribute('value',model.get()[item]);
//             //child.setAttribute('id',"opt" + item);
//             child.innerHTML = model.get()[item];
//             return child
//             }));
//       }
//       parent.setAttribute('id', 'select');
//       parent.classList.add('select');
//       return parent
//     });
    
//     var number = view.generator('input', function(child){
//       child.setAttribute('id','number');
//       child.setAttribute('type','number');
//       child.setAttribute('min','0');
//       child.classList.add('class','manager');
//       return child
//     });
    
//     var button = view.generator('button', function(child){
//       child.setAttribute('id','value');
//       child.setAttribute('type','button');
//       child.classList.add('class','button');
//       child.innerHTML = "-";
//       child.classList.add('class','button');
//       child.classList.add('class','manager');
//       child.addEventListener("click", function(){
//         div.parentNode.removeChild(div);    
//       });
//       return child
//     });
      
//     div.appendChild(select);
//     div.appendChild(number);
//     div.appendChild(button);
//     view.parent.appendChild(div);
//   }
  // function jsontimer(){
  //   document.getElementById("user-json").value.innerHTML=document.getElementById("album").value;
  //   document.getElementById("email-json").innerHTML=document.getElementById("artist").value;
  //   document.getElementById("message-json").innerHTML=document.getElementById("textaera");
  // }
  
  // setInterval(jsontimer(), 500);
  function mobilbutton(){
    if(document.getElementById("menu-slide").style.width=="0px"){
      document.getElementById("menu-slide").style.width="250px";
    }else{
      document.getElementById("menu-slide").style.width="0px";
    }
  }
  function hidemenu(){
    if(document.getElementById("mobile-button").style.width=="0px"){
      document.getElementById("menu-slide").style.width="0px";
    }
  }
  setInterval(hidemenu,500)
  