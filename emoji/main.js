let searched = document.querySelector(".search-input");
let result = document.querySelector(".results .wrapper");

window.addEventListener("load", displayResult(""));
function displayResult(searchQuery) {
    let filteredList = emojiList.filter(function (emote){
        if(emote.description.indexOf(searchQuery) != -1){
            // console.log(emote.description)
            return true;
        }
    });
    result.innerHTML = ""
    filteredList.forEach((e) => {
            let item = document.createElement("div");
            item.classList.add("item");
            item.innerText = e.emoji;
            result.appendChild(item);
    });
}

searched.addEventListener("keyup", (e)=>{
    let input = e.target.value;
    displayResult(input.toLowerCase());
})