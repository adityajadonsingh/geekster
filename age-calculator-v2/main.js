let dobInput = document.querySelector(".dob input");
let dispayYear = document.querySelector(".year");
let dispayMonth = document.querySelector(".months");
let dispayDays = document.querySelector(".days");

function showGap(){}

let today = new Date();
let todayDate = today.getDate();
let todayMonth = today.getMonth() + 1;
let todayYear = today.getFullYear();
let allMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
dobInput.addEventListener("change", function () {
    const dob = new Date(dobInput.value);
    const dobDate = dob.getDate();
    const dobMonth = dob.getMonth() + 1;
    const dobYear = dob.getFullYear();
    
    if((dobYear > todayYear) || (dobMonth > todayMonth && dobYear >= todayYear) || (dobDate > todayDate && dobMonth >= todayMonth && dobYear >= todayYear)){

    }

    let dates = 0;
    let month = 0;
    if(dobDate <= todayDate){
        dates = Math.abs(dobDate - todayDate);
        console.log(dates)
    }else{
        dates = Math.abs(dobDate - todayDate);
        console.log(dates)
    }
    // console.log(dobDate, dobMonth, dobYear)
});

