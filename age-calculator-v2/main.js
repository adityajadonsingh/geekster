let dobInput = document.querySelector("#dob");
let dispayYear = document.querySelector(".year");
let dispayMonth = document.querySelector(".months");
let dispayDays = document.querySelector(".days");

dobInput.max = new Date().toISOString().split("T")[0];

dobInput.addEventListener('change', calculateAge);

function calculateAge() {
    let birthDate = new Date(dobInput.value);
    let bDate = birthDate.getDate();
    let bMonth = birthDate.getMonth() + 1;
    let bYear = birthDate.getFullYear();

    let today = new Date();
    let todayDate = today.getDate();
    let todayMonth = today.getMonth() + 1;
    let todayYear = today.getFullYear();

    let resultDate, resultMonth;
    let resultYear = todayYear - bYear;

    if (todayMonth >= bMonth) {
        resultMonth = todayMonth - bMonth;
    } else {
        resultYear--;
        resultMonth = 12 + todayMonth - bMonth;
    }

    if (todayDate >= bDate) {
        resultDate = todayDate - bDate;
    } else {
        resultMonth--;
        resultDate = getDaysInMonth(todayYear, todayMonth - 1) + todayDate - bDate;
    }

    if (resultMonth < 0) {
        resultMonth = 11;
        resultYear--;
    }

    dispayYear.innerHTML = resultYear;
    dispayMonth.innerHTML = resultMonth;
    dispayDays.innerHTML = resultDate;
}

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
function reset() {
    dobInput.value = '';
    dispayYear.innerHTML = '-';
    dispayMonth.innerHTML = '-';
    dispayDays.innerHTML = '-';
}