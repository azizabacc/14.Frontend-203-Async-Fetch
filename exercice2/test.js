const { LocalStorage } = require('node-localstorage');

const localStorage = new LocalStorage('./localStorage');
let stored =[];
const myObject = {
  name: 'john doe',
  age: 32,
  gender: 'male',
  profession: 'optician'
};

const myObject2 = {
    name: 'john doe',
    age: 32,
    gender: 'male',
    profession: 'optician'
  };
stored.push(myObject)
localStorage.setItem('stored', JSON.stringify(stored));

