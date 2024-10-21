
let displayChart;
let compareArray = [];
const singleStock = document.querySelector("#single-stock .outer");

// API Fetching

const fetchData = async (symbol) => {
    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=O0QN2T6QXVBDEE7I`)
        const data = await response.json();
        const textLabel = Object.values(data["Meta Data"])[1];
        let labels = Object.keys(data["Time Series (Daily)"]);
        let dataLabel = Object.values(data["Time Series (Daily)"]).map(item => item["4. close"]);
        stockChartFunc(labels, dataLabel, textLabel);
        stockDetailFunc(data["Time Series (Daily)"], textLabel);
    }
    catch (err) {
        singleStock.innerHTML = `<h2>Error Occured</h2>`
        console.error(err);
    }

}

//Input Search

function searchFunc(event){
    event.preventDefault();
    const searchInput = document.querySelector("#search-query");
    if(searchInput.value){
        // console.log(searchInput.value.toUpperCase())
        fetchData(searchInput.value.toUpperCase());
    }
}

//Dropdown Search

const dropStock = document.querySelector("#topTen");
let searchQuery = "";
dropStock.addEventListener("click", (e) => {
    searchQuery = e.target.getAttribute("data-stock");
    // const textLabel = Object.values(jsonData["Meta Data"])[1];
    // let labels = Object.keys(jsonData["Time Series (Daily)"]);
    // let dataLabel = Object.values(jsonData["Time Series (Daily)"]).map(item => item["4. close"]);
    // stockChartFunc(labels, dataLabel, textLabel);
    // stockDetailFunc(jsonData["Time Series (Daily)"], textLabel);
    fetchData(searchQuery);
});


// Chart Js

function stockChartFunc(labels, rawData, textLabel) {
    const stockChart = document.getElementById('stock-chart');
    stockChart.classList.add("w-100");
    stockChart.classList.add("h-100");
    if (displayChart) {
        displayChart.destroy();
    }
    const data = {
        labels: labels,
        datasets: [{
            label: textLabel,
            data: rawData,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    displayChart = new Chart(stockChart, {
        type: 'line',
        data: data,
        options: {
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: false
                }
            }
        }
    });

    return displayChart;
}

//Stock Detail Section

function stockCompare(name, price, volume, change) {
    this.name = name;
    this.price = price;
    this.volume = volume;
    this.change = change;
}

function stockDetailFunc(data, textLabel){
    if(data){
        let latestDate = Object.values(data)[0];
        let lastDate = Object.values(data)[1];
        let price = latestDate["4. close"];
        let volume = latestDate["5. volume"];
        let change = (latestDate["4. close"] - lastDate["4. close"]).toFixed(2);
        let stockObj = new stockCompare(textLabel, price, volume, change);
        compareArray.push(stockObj);
        compareStockFunc();
        singleStock.innerHTML = stockDetailUi(price, volume, change, textLabel);
    }else{
        return singleStock.innerHTML = `<h2>Symbol Not Found</h2>`
    }
}

const compareStockTable = document.querySelector("#compare-stock");

function compareStockFunc(){
    compareStockTable.innerHTML = '';
    compareArray.forEach(item => {
        // console.log(item)
        compareStockTable.innerHTML += compareStockUi(item.name, item.price, item.change, item.volume);
    })
}

function compareStockUi(name, price, change, volume){
    return `
    <tr style="border: none; border-color: transparent;">
                                    <th scope="row">${name}</th>
                                    <td>$${price}</td>
                                    <td>${change}</td>
                                    <td>${volume}</td>
                                  </tr>
    `;
}



function stockDetailUi(price, volume, change, name){
    return `<div class="inner w-100">
                            <h2>(${name}) Stock Details</h2>
                        <div class="table-responsive mt-2">
                            <table class="table mb-0">
                                <thead>
                                  <tr>
                                    <th scope="col">Price</th>
                                    <th scope="col">Change</th>
                                    <th scope="col">Volue</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr style="border: none; border-color: transparent;">
                                    <th scope="row">$${price}</th>
                                    <td>${change}</td>
                                    <td>${volume}</td>
                                  </tr>
                                </tbody>
                              </table>
                        </div>
                        </div>`
}