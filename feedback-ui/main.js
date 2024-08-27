let btn = document.querySelector("#btn");
let items = document.querySelectorAll(".item");
let feedbackShow = document.querySelector(".submited");


let feedback;

items.forEach((item)=>{
    item.addEventListener("click", (e)=>{
        e.stopPropagation();
        removeClass();
        item.classList.add("selected");
        feedback = e.target.parentNode.innerText;
    });
});

btn.addEventListener("click", ()=>{
    if(feedback != undefined){
        document.querySelector(".starting").style.display = "none";
        btn.style.display = "none";
        showFeedback();
    }
});

function showFeedback(){
    feedbackShow.style.display = "block";
    feedbackShow.innerHTML += `<h2 class="text-3xl font-bold">Thank You !!</h2>
                    <div class="feed my-4 text-xl"><strong>Feedback : ${feedback}</strong></div>
                    <p>We'll use your feedback to improve our customer support.</p>`;
}

let removeClass = () =>{
    items.forEach((item)=>{
        item.classList.remove("selected");
    })
};