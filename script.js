let apiKey = "2a3df843bb7f6d320e9c04bccc440de0"
let searchbar= document.querySelector("#searchbar")
let searchbutton=document.querySelector(".searchBtn")
let searchhistory=document.querySelector(".searchhistory")
let cityNameEl = document.querySelector(".cityName")

let day0temp=document.querySelector("#day0temp")
let day0wind=document.querySelector("#day0wind")
let day0humidity=document.querySelector("#day0humidity")
let day0img=document.querySelector("#day0img")

let day1temp=document.querySelector("#day1temp")
let day1wind=document.querySelector("#day1wind")
let day1humidity=document.querySelector("#day1humidity")
let day1img=document.querySelector("#day1img")

let day2temp=document.querySelector("#day2temp")
let day2wind=document.querySelector("#day2wind")
let day2humidity=document.querySelector("#day2humidity")
let day2img=document.querySelector("#day2img")

let day3temp=document.querySelector("#day3temp")
let day3wind=document.querySelector("#day3wind")
let day3humidity=document.querySelector("#day3humidity")
let day3img=document.querySelector("#day3img")

let day4temp=document.querySelector("#day4temp")
let day4wind=document.querySelector("#day4wind")
let day4humidity=document.querySelector("#day4humidity")
let day4img=document.querySelector("#day4img")

let day5temp=document.querySelector("#day5temp")
let day5wind=document.querySelector("#day5wind")
let day5humidity=document.querySelector("#day5humidity")
let day5img=document.querySelector("#day5img")


searchbutton.addEventListener("click",searchweather)

function searchweather() {
    cityNameEl.textContent=searchbar.value
    let li = document.createElement("li")
    li.textContent=searchbar.value
    searchhistory.appendChild(li)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchbar.value}&appid=${apiKey}&units=imperial`)
    .then(data=>data.json())
    .then(res=>{
        day0temp.textContent="Temp: "+res.main.temp+"°F"
        day0wind.textContent="Wind: "+res.wind.speed+"MPH"
        day0humidity.textContent="Humidity: "+res.main.humidity+"%"
        day0img.src= "https://openweathermap.org/img/wn/"+res.weather[0].icon+"@2x.png"

    })

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchbar.value}&appid=${apiKey}&units=imperial`)
    .then(data=>data.json())
    .then(res=>{
        console.log(res)
        day1temp.textContent="Temp: "+res.list[0].main.temp+"°F"
        day1wind.textContent="Wind: "+res.list[0].wind.speed+"MPH"
        day1humidity.textContent="Humidity: "+res.list[0].main.humidity+"%"
        day1img.src= "https://openweathermap.org/img/wn/"+res.list[0].weather[0].icon+"@2x.png"

        day2temp.textContent="Temp: "+res.list[8].main.temp+"°F"
        day2wind.textContent="Wind: "+res.list[8].wind.speed+"MPH"
        day2humidity.textContent="Humidity: "+res.list[8].main.humidity+"%"
        day2img.src= "https://openweathermap.org/img/wn/"+res.list[8].weather[0].icon+"@2x.png"

        day3temp.textContent="Temp: "+res.list[16].main.temp+"°F"
        day3wind.textContent="Wind: "+res.list[16].wind.speed+"MPH"
        day3humidity.textContent="Humidity: "+res.list[16].main.humidity+"%"
        day3img.src= "https://openweathermap.org/img/wn/"+res.list[16].weather[0].icon+"@2x.png"

        day4temp.textContent="Temp: "+res.list[24].main.temp+"°F"
        day4wind.textContent="Wind: "+res.list[24].wind.speed+"MPH"
        day4humidity.textContent="Humidity: "+res.list[24].main.humidity+"%"
        day4img.src= "https://openweathermap.org/img/wn/"+res.list[24].weather[0].icon+"@2x.png"

        day5temp.textContent="Temp: "+res.list[32].main.temp+"°F"
        day5wind.textContent="Wind: "+res.list[32].wind.speed+"MPH"
        day5humidity.textContent="Humidity: "+res.list[32].main.humidity+"%"
        day5img.src= "https://openweathermap.org/img/wn/"+res.list[32].weather[0].icon+"@2x.png"

    })

    }
