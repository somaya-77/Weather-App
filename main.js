// 
const apiKey = "c3c2b8ee9ccc7c0cf36b5c882ab1e4ff";

const searchInput = document.querySelector(".search input");

const image = document.querySelector(".icon");

async function getWeather(cityName){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
    if(response.status > 299 || searchInput.value == '') {
        document.querySelector(".error").style.display = "block";
    }else{
        document.querySelector(".error").style.display = "none";
    }
    let data = await response.json();
    // put data for document
    document.querySelector(".dgreeTemp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    // check weather status

    switch (data.weather[0].main) {
        case "Clouds":
            image.scr = "images/clouds.png";
            break;
        case "Clear":
            image.scr = "images/clear.png";
            break;
        case "Rain":
            image.scr = "images/rain.png";
            break;
        case "Drizzle":
            image.scr = "images/drizzle.png";
            break;
        case "Mist":
            image.scr = "images/mist.png";
            break;
    }

    console.log(data)
    searchInput.value = '';
}

// start search by click
document.querySelector(".search button").addEventListener("click", () => {
    getWeather(searchInput.value)
})
