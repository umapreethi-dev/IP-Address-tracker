var mymap = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(mymap);

const api_key = "8ebb751f54f2448e9be56ab29e37323a";
const input = document.getElementById('search').value;

function handleSubmit(event){
    event.preventDefault();
    let url = `https://geo.ipify.org/api/v1?apiKey=at_kkLBQJlJJykyO2gzioAwSHQchqoH3&ipAddress=${input}`;
    fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })

    
}