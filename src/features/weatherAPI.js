import axios from 'axios';

export async function fetchWeather(cities) {
    return fetch('http://api.openweathermap.org/data/2.5/group?id='+ cities +'&appid=984583d3bc8a484bbaa699e0ac1d37e8&units=metric')
    .then(response => response.json);
}
// export async function fetchWeather(cities) {
//     await axios.get('http://api.openweathermap.org/data/2.5/group?id='+ cities +'&appid=984583d3bc8a484bbaa699e0ac1d37e8&units=metric')
//             .then(response => {return response.data})
//             .catch(error => console.log(error))
// }