const API_URL = "https://openapi.programming-hero.com/api/phones?search=";

async function fetchPhones(query) {
    try {
        const response = await fetch(`${API_URL}${query}`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayPhones(phones) {
    const deck = document.querySelector(".deck");
    deck.innerHTML = "";

    phones.forEach(phone => {
        const phoneCard = `
            <div class="lg:w-1/3 md:w-1/2 w-full">
                <div class="card">
                    <div class="img-box flex justify-center">
                        <img src="${phone.image}" alt="${phone.phone_name}">
                    </div>
                    <div class="content text-center mt-5">
                        <div class="title mb-3">${phone.phone_name}</div>
                        <p class="description">There are many variations of passages of available, but the majority have suffered</p>
                        <div class="btn mt-5">
                            <button class="uppercase" onclick="openPopup('${phone.slug}')">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        deck.innerHTML += phoneCard;
    });
}

async function openPopup(phoneSlug) {
    
    const response = await fetch(`https://openapi.programming-hero.com/api/phone/${phoneSlug}`);
    const phoneDetails = await response.json();

    if (phoneDetails.data) {
        document.querySelector(".popup-modal .phone-name").innerText = phoneDetails.data.name;
        document.querySelector(".popup-modal .phone-brand").innerText = `Brand: ${phoneDetails.data.brand}`;
        let phoneDes = phoneDetails.data.mainFeatures;
        let string="";
        for (const key in phoneDes) {
            string = string+`${key}: ${phoneDes[key]} \n`;
        }
        document.querySelector(".popup-modal .phone-des").innerText = string || "No description available.";
        document.querySelector(".popup-modal img").src = phoneDetails.data.image;
        document.querySelector(".popup-modal").classList.remove("hidden");
        document.querySelector(".popup-modal").classList.add("fixed");
    }
}

function closePopup() {
    document.querySelector(".popup-modal").classList.remove("fixed");
    document.querySelector(".popup-modal").classList.add("hidden");
}

document.querySelector(".input .btn button").addEventListener("click", async () => {
    const query = document.querySelector(".input input").value;
    if (query) {
        const phones = await fetchPhones(query);
        displayPhones(phones);
    }
});

document.querySelector(".popup-modal .btn button").addEventListener("click", closePopup);

window.addEventListener("load", async () => {
    const phones = await fetchPhones("iphone"); 
    displayPhones(phones);
});