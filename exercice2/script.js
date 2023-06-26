let button = document.querySelector('button');
let input = document.querySelector('input');
let select = document.querySelector('select');

// create options country
fetch('./ISO3166-1alpha2.json')
  .then(response => response.json())
  .then(json => {
    for (let i = 0; i < Object.keys(json[0]).length; i++) {
      let country = document.createElement('option');
      country.innerText = Object.keys(json[0])[i];
      select.append(country);
      console.log('country');
    }
  })
  .catch(error => {
    console.log('There was an error!', error);
  });

// fetch data from api
const fetchName = name => fetch('https://api.agify.io/?name=' + name);
const fetchCountry = (name, iso) => fetch('https://api.agify.io?name=' + name + '&country_id=' + iso);

let stored = JSON.parse(localStorage.getItem('stored')) || [];

button.addEventListener("click", () => {
  fetchCountry(input.value, select.value)
    .then(response => response.json())
    .then(json => {
      stored.push(json);
      localStorage.setItem('stored', JSON.stringify(stored));
      console.log(localStorage);
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.textContent = json.name + " from " + json.country_id + " is " + json.age + " years old.";
      div.append(p);
      document.body.append(div);
    })
    .catch(error => {
      console.log('There was an error!', error);
    });
});
