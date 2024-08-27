let emojiContainer = document.querySelector(".emoji");
let search = document.querySelector("#getInput");

search.addEventListener("keyup", (e)=>{
    let searched = e.target.value;
    displayEmoji(searched);
});

document.addEventListener("load", displayEmoji());

function displayEmoji(searched){
    if(searched === undefined || searched === ""){
        emojiList.forEach((emote) => {
            emojiContainer.appendChild(createEmoji(emote.emoji));
        });
    }else{
        emojiContainer.innerHTML = "";
        let filtered = emojiList.filter((emote)=>{
            if(emote.description.search(searched) != -1){
                return true;
            }
        });
        filtered.forEach((emote) => {
            console.log(emote.description);
            let create = createEmoji(emote.emoji);
            emojiContainer.appendChild(create);
        });
    }
}


function createEmoji(emojii){
    let createEmote = document.createElement("div");
    createEmote.innerHTML = `<div class="item text-5xl">${emojii}</div>`;
    return createEmote.firstChild;
}
