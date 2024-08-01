let changeBtn = document.querySelector(".change-btn");
let body = document.querySelector("body");
let btn = document.querySelector(".switch");
let heading = document.querySelector("h1");
let flag = 0;
changeBtn.addEventListener("click", function(){
    if(flag == 0){
        btn.classList.add('right-side');
        body.style.backgroundColor = "#000";
        heading.style.color = "#fff";
        flag = 1 - flag;
    }else{
        btn.classList.remove('right-side');
        body.style.backgroundColor = "#fff";
        heading.style.color = "#000";
        flag = 1 - flag;
    }
});

// console.log(changeBtn, body, heading)