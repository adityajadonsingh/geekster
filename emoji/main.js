let searched = document.querySelector(".search-input");
let result = document.querySelector(".results .wrapper");

window.addEventListener("load", displayResult);
function displayResult(searchQuery) {
    
    emojiList.forEach((e) => {
        let item = document.createElement("div");
        item.classList.add("item");
        item.innerText = e.emoji;
        result.appendChild(item);
    });
}

searched.addEventListener("keyup", (e)=>{
    let input = e.target.value;
    console.log(input)
    searchQuery(input);
})