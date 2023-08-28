const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`

//const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

//const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const form = document.querySelector('form');
const search = document.querySelector('#search')
const weather = document.querySelector('#weather');
const getWeather = async (city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);

    const data = await response.json();
   
    return showWeather(data)
}
const showWeather=(data)=>{
weather.innerHTML = `<div style="font-family : monospace;">
<h4>${data.name}</h4>
<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""/>

<h2>${data.main.temp}℃</h2>
<p>${data.weather[0].main}</p>
<p>${data.weather[0].description}</p>
<p style="background-color : red; padding : 5px 3px; margin : 10px 0px;">Feels Like :${data.main.feels_like} ℃</p>
<p>Wind Speed  :${data.wind.speed} </p>
</div>`
}
form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value)
        event.preventDefault();
    }
)
