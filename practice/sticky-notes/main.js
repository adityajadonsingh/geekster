let getNote = document.querySelector(".inner textarea");
let addNote = document.querySelector("#addNote");
let getColor = document.querySelector("#getColor");
let notes = document.querySelector(".notes");

addNote.addEventListener("click", addNotes);

function addNotes(){
    if(getNote.value === ""){
        alert("Please Write Note !!!");
        return;
    }
    let added = note(getNote.value, getColor.value);
    getNote.value = "";
    notes.appendChild(added);
    
}

function note(text, bgColor){
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = `<div class="note" style="background-color: ${bgColor}">
                <div class="close absolute">X</div>
                <p>${text}</p>
            </div>`;
    return tempDiv.firstChild;
}

notes.addEventListener("click", (e)=>{
    if(e.target.textContent === "X"){
        e.target.parentElement.style.display = "none";
    }
})