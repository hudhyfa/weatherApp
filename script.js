const inputBox = document.getElementById('inputBox');
const searchBtn = document.getElementById('searchBtn');
const weatherImg = document.getElementById('weatherImg');
const temp = document.getElementById('temp');
const desc = document.getElementById('desc');
const main = document.getElementById('main');
const notFound = document.querySelector('nfp');
const weatherType = document.querySelector('weather-type');

async function checkWeather(city){
    // for showing the loading gif
    // document.querySelectorAll('weather-type').innerHTML = 
    // `<div><img src="https://assets.website-files.com/638021e4f4842c694326e581/6384b9164b9f1e474c544095_loading.gif"></div>`;
    // url to the api
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f40d3119bd930e1aa3c022ae7a213af1`
    // function to fetch the api
    const weatherData =await fetch(`${url}`).then( response=>response.json());
    console.log(weatherData);
    if(weatherData.cod === `404`){
        window.location.href="./error.html"
        console.log(error);
    }
   
    temp.innerHTML=`${Math.round(weatherData.main.temp - 273.15)}&degc`
    main.innerHTML=`${weatherData.weather[0].main}`
    desc.innerHTML=`${weatherData.weather[0].description}`
    switch(weatherData.weather[0].main){
        case 'Clouds':
            weatherImg.src="https://previews.123rf.com/images/captainvector/captainvector2208/captainvector220819354/189790867-pixel-art-clouds.jpg";
            break;
        case 'Clear':
            weatherImg.src ="https://previews.123rf.com/images/captainvector/captainvector1705/captainvector170511229/79152647-sun.jpg";
            break;
        case 'Rain':
            weatherImg.src ="https://previews.123rf.com/images/yupiramos/yupiramos1801/yupiramos180111876/93596314-pixelated-cloud-rain-thunderbolt-storm-weather-vector-illustration.jpg";
            break;
        case 'Mist':
            weatherImg.src ="https://previews.123rf.com/images/popaukropa/popaukropa1812/popaukropa181200114/114172383-snowflake-pixel-art-icon-snow-8bit.jpg";
            break;
        case 'Haze':
            weatherImg.src ="https://previews.123rf.com/images/saphatthachat/saphatthachat1810/saphatthachat181000086/110829152-vector-pixel-art-graphic-effect-isolated-cartoon.jpg";
            break;

    }
}

searchBtn.addEventListener('click', () =>{
    checkWeather(inputBox.value);
})