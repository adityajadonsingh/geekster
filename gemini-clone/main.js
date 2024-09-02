import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyDdDQJVHryly_7OPpyWPBvRxQ52YI21ms8";
const genAI = new GoogleGenerativeAI(API_KEY);
let searched = document.querySelector("#search-field");
let searchBtn = document.querySelector("#search-btn");
let searchedDiv = document.querySelector(".searched");

searchBtn.addEventListener("click", generateResponse);

async function generateResponse() {
    let searching = searched.value;
    if (!searching) {
        alert("Please enter a prompt.");
        return;
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
        const result = await model.generateContent(searching);
        const response = await result.response;
        const text = await response.text();
        const htmlContent = marked.parse(text);
        searchedDiv.innerHTML = htmlContent;
        searchedDiv.classList.remove("hidden");
    } catch (error) {
        console.error("Error generating response:", error);
        searchedDiv.innerHTML = "<p>There was an error generating the response. Please try again.</p>";
    }
}
