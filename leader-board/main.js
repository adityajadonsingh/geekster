let inp_fname = document.querySelector("#fName");
let inp_lname = document.querySelector("#lName");
let inp_country = document.querySelector("#country");
let inp_score = document.querySelector("#score");
let submit = document.querySelector("#submit");
let scoreContainer = document.querySelector("tbody");
let data = [];

submit.addEventListener("click", function (e) {
    let valid = true;
    if (inp_fname.value.trim() === "") {
        valid = false;
    }

    if (inp_lname.value.trim() === "") {
        valid = false;
    }

    if (inp_country.value === "") {
        valid = false;
    }

    if (inp_score.value.trim() === "" || isNaN(inp_score.value) || inp_score.value < 0) {
        valid = false;
    }

    if (!valid) {
        alert("Please fill all the fields");
    } else {
        let person = new Person(inp_fname.value.trim(), inp_lname.value.trim(), inp_country.value, inp_score.value.trim());
        data.push(person);
        data.sort(function(a, b) {
            return b.score - a.score;
        });
        scoreContainer.innerHTML = "";
        data.forEach(function(person, index) {
            scoreContainer.innerHTML += generateRow(person.firstName, person.lastName, person.country, person.score, index + 1);
        });
        

    }

    console.log(data)

});




function generateRow(fname, lname, country, score, rank) {
    return `
        <tr>
                        <td class="rank">${rank}</td>
                        <td class="name capitalize">${fname} ${lname}</td>
                        <td class="country capitalize">${country}</td>
                        <td class="score">${score}</td>
                        <td class="remove"><i class="bi bi-trash-fill"></i></td>
                        <td class="dec s-ctrl">-5</td>
                        <td class="inc s-ctrl">+5</td>
                      </tr> 
    `;
}

function Person(firstName, lastName, country, score) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.score = score;
}

 