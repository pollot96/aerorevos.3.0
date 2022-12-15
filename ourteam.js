
//============================================================NAVBAR===================================================================
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
  //============================================================END NAVBAR===================================================================
//   fetch('https://jsonplaceholder.typicode.com/photos/1')
//   .then(response => response.json())
//   .then(data => console.log(data.url))
  
// //   const myobj = JSON.parse(json);
// // console.log(myobj.url);
//  console.log(document.getElementById("hello").src);
   
// //    console.log(json.url);


// fetch('https://jsonplaceholder.typicode.com/photos/1')
// .then( res => res.json())
// .then( data => console.log(data));
// const img = document.getElementById("hello");
//   let a=Math.floor((Math.random()*5000)+1);
// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(res =>  res.json())
// .then(data => 
//   img.src = data[a].url );

 

for(let i=0; i<5;i++){
 const title = document.getElementsByClassName("howard")[i];
  const img = document.getElementsByClassName("hello")[i];
fetch('https://jsonplaceholder.typicode.com/photos',{ method: 'GET' })
.then(res =>  res.json())
.then(data => {
  let _data = data.splice(30, 10) 
  img.src = data[i+1].url
  title.innerHTML = data[i+1].title
}
   ).catch(err => console.log(err));

  

}

