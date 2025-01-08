const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityName");
const card = document.querySelector(".card");
const apiKey = "ac3bce2a369c75de4fbf9addca21769d";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();

    const city = cityInput.value;
    if(city){
        try{
            const weatherData = await getWeatherData(city);
            console.log(weatherData);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("please enter a city");
    }
})

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(weatherData){
    const {name: city, main: {temp, humidity}, weather: [{description, id}]} = weatherData;
    console.log(weatherData);

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp-273.15).toFixed(1)}°C`;
    humidDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id); 

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidDisplay.classList.add("humidDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(id){
    switch(true){
        case (id >= 200 && id <= 232):
            return "⛈️";
        case (id >= 300 && id <= 321):
            return "🌦️";
        case (id >= 500 && id <= 531):
            return "🌧️";
        case (id >= 600 && id <= 622):
            return "🌨️";
        case (id >= 701 && id <= 781):
            return "🌫️";
        case (id === 800):
            return "☀️";
        case (id >= 801 && id <= 804):
            return "☁️"
    }
}