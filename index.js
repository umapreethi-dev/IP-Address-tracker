
//Intializing the Map
let lat = 41.78;
let lng = -81.147;
let mymap = new L.map("map");
mymap.setView(new L.LatLng(lat, lng), 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}", {
  foo: "bar",
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);

//Calling the IP Api and Updating the map
function handleSubmit(event) {
  const input = document.getElementById("search").value;
  console.log(input);
  event.preventDefault();
  let url = `https://geo.ipify.org/api/v1?apiKey=at_kkLBQJlJJykyO2gzioAwSHQchqoH3&ipAddress=${input}`;
  console.log(url);
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      document.getElementById("ipAddress").innerHTML = `${data.ip}`;
      document.getElementById("location").innerHTML = `${data.location.lat}`;
      document.getElementById("time").innerHTML =  "UTC" + `${data.location.timezone}`;
      document.getElementById("isp").innerHTML = `${data.as.name}`;
      lat = `${data.location.lat}`;
      lng = `${data.location.lng}`;
      ltn = `${data.location.city}` + "," + `${data.location.country}`;
      map(lat, lng, ltn);
    });
}

//function to update the map
function map(lat, lng, ltn) {
  mymap.setView(new L.LatLng(lat, lng), 13);
  let marker = L.marker([lat, lng]).addTo(mymap);
  let popup = L.popup().setLatLng([lat, lng]).setContent(ltn).openOn(mymap);
}
