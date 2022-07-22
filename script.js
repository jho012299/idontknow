const enterButton = document.getElementById("enter");
const pickButton = document.getElementById("pick");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const h3 = document.querySelector("h3");

const places = [];

function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    places.push(input.value);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    li.append(" ");
    li.append(deleteButton);
    deleteButton.dataset.value = input.value; // stores item in button to delete later

    deleteButton.addEventListener("click", () => {
        let index = places.indexOf(deleteButton.dataset.value); // removes item from array
        places.splice(index, 1);
        li.parentNode.removeChild(li); // removes from unordered list
    })

    input.value = "";
}

enterButton.addEventListener("click", () => {
    if (input.value.length> 0) { // must have text to enter item
        createListElement();
    }
    console.log(places);
}) 

pickButton.addEventListener("click", () => {
    if (places.length > 0) {
        let place = places[Math.floor(Math.random() * places.length)]; // randomly picks element in array
        h3.textContent = "We picked " + place + " for you!"
    }
})

// Ken's way
// I did this and it works.
// const enterButton = document.getElementById("enter");
// const pickButton = document.getElementById("pick");
// const input = document.getElementById("userinput");
// const ul = document.querySelector("ul");
// const h3 = document.querySelector("h3");

// let places = [];

// function createListElement() {
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);

//     let deleteButton = document.createElement("button");
//     deleteButton.innerHTML = "Delete";
//     li.append(" ");
//     li.append(deleteButton);

//     deleteButton.addEventListener("click", (e) => {
//         li.parentNode.removeChild(li);
//     })

//     input.value = "";
// }

// enterButton.addEventListener("click", () => {
//     if (input.value.length> 0) {
//         createListElement();
//     }
//     console.log(places);
// }) 

// pickButton.addEventListener("click", () => {
//   places = Array.from(ul.querySelectorAll('li'));
//   if (places.length === 0) return;

//   let place = places[Math.floor(Math.random() * places.length)].innerText;
//   h3.textContent = "We picked " + place + " for you!"

// })