let searchBox = document.getElementById("search")
searchBox.addEventListener("keypress", (event) => {
    if (event.keyCode == 13) {
        callApi(searchBox.value)
    }
})
function callApi(cityName) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=7e3f21edee540e6110af347b55eb1ab2`
    fetch(url)
        .then(res => res.json())
        .then(res => displayDate(res))
}

function displayDate(res) {
    console.log(res)

    let city = document.querySelector(".city")
    let dateField = document.querySelector(".date")
    let temp = document.querySelector(".temp")
    let weather = document.querySelector(".wether")
    let highLowTemp = document.querySelector(".hi-low")

    city.innerText = res.name + ", " + res.sys.country

    temp.innerText = Math.round(res.main.temp) + "°C"

    weather.innerText = res.weather[0].main
    highLowTemp.innerText = Math.round(res.main.temp_min) + "°C/" + Math.round(res.main.temp_max) + "°C"
    dateField.innerText = formDate()
}
function formDate() {
    let months = ["january", "February", "April", "May", "june", "july", "August", "September", "October", "Noverber", "December"]
    let days = ["Sunday", "Monday", "Thusday", "Wednesday", "Friday", "Saturday"]
    let todaysDate = new Date()
    let day = days[todaysDate.getDay()]
    let month = months[todaysDate.getMonth()]
    let year = todaysDate.getFullYear()
    let date = todaysDate.getDate()
    return `${day} ${date} ${month} ${year}`
}