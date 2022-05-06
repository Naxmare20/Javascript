// // let id1 = document.getElementById("section1");
// // let classes = document.getElementsByClassName("lesDiv");
// // let span = document.getElementsByTagName("span");
// let articles = document.querySelectorAll("exo");
// // let para = document.querySelectorAll('p');
 let google = document.getElementById("google");

// // for(let i = 0; i < para.length; i++){
// // para[i].onclick = function(){
// //     para[i].style.color = 'blue';
// // }
// // }

// // console.log(para);
// // console.log(id1);
// //  id1.onclick = function () {
// //  alert(id1.innerHTML);
// // };

// //  span[0].onclick = function () {
// //    alert(span[0].innerHTML);
// //  };

// // for (let i = 0; i < classes.length; i++) {
// //   classes[i].onclick = function () {
// //     alert(classes[i].innerHTML);
// //   }
// // }

// //   console.log(articles);


 let tespP = document.querySlectorAll('.exo');
 let rP = 0;
 let gP = 255;
 let bP = 0;

 for(let i = 0; i < tespP.length; i++) {
     tespP[i].onclick = function(){
       rP += 10;
        gP -= 5;
         bP += 12;
         this.style.color = '('+ rP +','+ gP +','+ bP +')';
     }
 }

google.href = "https://www.youtube.com/watch?v=ImWJBUYNZFI";
