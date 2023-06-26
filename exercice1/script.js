let button = document.querySelector('button');
let list = document.createElement("ul");
button.addEventListener("click", () =>{ console.log("hello");
fetch('becode.json')
.then(response => response.json())
.then(json => {
     for(let i=0 ; i<json.length ;i++) {
        let li = document.createElement('li');
        li.textContent = json[i];
        list.append(li);
     }

    document.body.append(list)
  console.log(json.length)

})
.catch(error => {
  console.log('There was an error!', error)
})
})