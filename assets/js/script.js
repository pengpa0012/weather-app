



const submitBtn = document.querySelector('input[type="submit"]')
const display = document.querySelector('.display')
let today = new Date();
let d = today.getDate();
let m = today.getMonth()+1;
let y = today.getFullYear();

submitBtn.addEventListener('click', () => {

    let input = document.querySelector('#input-text').value
    
    if(input == "") alert('Wrong City')

    const key = '1265e756bc9862d1ac8c698117290592'

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}`)
    .then(response => response.json())
    .then(response => display.innerHTML = `
    <div class="card p-2 p-md-5">
        <div class="d-flex align-items-center flex-column justify-content-between">
            <div class="text-center text-md-left">
                <h3 class="display-1">${response.name}</h3>
                <span class="fs-4 text-black-50">${m+'-'+d+'-'+y}</span>
            </div>
            <div class="text-center d-flex flex-column flex-md-row align-items-center py-3">
                <span class="fs-4 mr-1">Weather Today:</span>
                <img src="http://openweathermap.org/img/w/${response.weather[0].icon}.png" class="mx-1">
                <span class="fs-4">${response.weather[0].description}</span>
            </div>  
            <ul class="list-unstyled">
                <li class="fs-3">Temperature: ${response.main.temp.toFixed(1)} K</li>
                <li class="fs-3">Humidity: ${response.main.humidity} %</li>
                <li class="fs-3">Wind Speed: ${response.wind.speed} m/s</li>
                <li class="fs-3">Cloudiness: ${response.clouds.all} %</li>
            <ul>     
        </div>                                  
    </div>`)
    .catch(err => alert('Wrong City'))
})
