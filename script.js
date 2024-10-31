let commentSection = document.querySelector(".comment");
let commentBtn = document.querySelector(".comments");

let display=true;
commentBtn.addEventListener("click",function () {
   if(display == true){
    commentSection.style.display="block";
    commentSection.style=` display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;`;
    display=false;
   }else{
    display=true;
    commentSection.style.display="none";
   }
})
