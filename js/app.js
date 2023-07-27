const API_KEY = `59d941fa2f12135cb39a1f613b0875d0`
const form = document.querySelector("form");
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")



// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

const getWeather = async (city) =>{
    weather.innerHTML = `<h2>Loading.... </h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return showWeather(data)
}

const showWeather = (data)=>{
    if(data.cod == "404"){
        weather.innerHTML = `<h2>City Not Find</h2>`
        return
    }
    weather.innerHTML = 
    ` 
     <div>
        <img src="image/${data.weather[0].icon}.png" alt="" class="img"/>
     </div>
     <div>
        <h2> ${Math.round(data.main.temp)} <span>℃</span></h2>
        <h4>${data.weather[0].main} </h4>
     </div>
`
}

form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value)
        event.preventDefault()
    }
)