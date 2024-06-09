// const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b7be0ccc96msha6679a285fed0f4p1f5c58jsn7a2501215d96',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// async function checkWeather() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

//checkWeather()
const text = document.querySelector('.card-text')


const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b7be0ccc96msha6679a285fed0f4p1f5c58jsn7a2501215d96',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    .then(response => response.json())
    .then((data) => {
        //console.log(data)
        document.getElementById('temp').innerHTML = `${data.temp}°C`
        document.getElementById('feels_like').innerHTML = `${data.feels_like}°C`
        document.getElementById('min_temp').innerHTML = `${data.min_temp}°C`
        document.getElementById('max_temp').innerHTML = `${data.max_temp}°C`
        document.getElementById('wind_speed').innerHTML = `${data.wind_speed} km/hrs`
    })
    
    .catch(err => console.log(err))
}

const search = document.getElementById('search')

search.addEventListener('click', (e) => {
    e.preventDefault()
    const city = document.getElementById('city').value
    //console.log(city)
    document.querySelector('#nameCity').innerHTML = `${city}`
    //console.log(e.target)
    getWeather(city)
})

getWeather('Karachi') // default value

