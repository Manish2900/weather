**Project Overview**<br />
This repository contains a simple weather application built using HTML, CSS, and JavaScript. The app allows users to enter a city name and fetch real-time weather data, including temperature, humidity, and weather conditions, using the OpenWeatherMap API.

**Files in the Repository**<br />
**weather.html:** The main HTML file that structures the weather app.<br />
**style.css:** The CSS file that styles the app, including the form, buttons, and weather card.<br />
**weather.js:** The JavaScript file that handles fetching weather data from the API and dynamically updating the UI.<br />

**Features**<br />
**City Input:** Users can enter a city name to fetch weather data.<br />
**Weather Data Display:** Displays the following information:
*City name
Temperature in Celsius,
Humidity percentage,
Weather description,
Weather emoji based on conditions,*<br />
**Error Handling:** Displays an error message if the city is not found or if the input is empty.

**How to Use**<br />
Clone the repository to your local machine.
Open the **weather.html** file in your browser.
Enter a city name in the input field and click "Get Weather."
The app will display the weather information for the entered city.

**Dependencies**<br />
**OpenWeatherMap API:** The app uses the OpenWeatherMap API to fetch weather data. You will need an API key to use the app. Replace the apiKey variable in weather.js with your own API key.

**Code Structure**

**HTML (weather.html):**

Contains a form for city input and a button to submit the request.
Includes a div element to display the weather card.
Links to style.css for styling and weather.js for functionality.

**CSS (style.css):**

Styles the body, form, input field, button, and weather card.
Uses flexbox for layout alignment.
Includes hover effects for the button.

**JavaScript (weather.js):**

Handles form submission and fetches weather data from the API.
Dynamically updates the UI with weather information.
Includes error handling for invalid inputs or API errors.
Uses a function to map weather condition IDs to emojis.
API Key
Replace the apiKey variable in weather.js with your own OpenWeatherMap API key. You can obtain a free API key by signing up at OpenWeatherMap.

***Future Improvements***<br />
Add support for fetching weather data based on the user's current location.
Implement a 5-day weather forecast.
Add unit conversion (e.g., Celsius to Fahrenheit).
Improve the UI with animations and additional styling.

**License**<br />
This project is open-source and available under the MIT License. Feel free to modify and distribute it as needed.

Contact<br />
For any questions or suggestions, feel free to reach out to the repository owner.

Enjoy using the Weather App! 🌤️
