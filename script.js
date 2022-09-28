var stories;


stories = ['Africa of proud warriors in ancestral Savannahs', 'Africa of whom my grandmother sings', 'On the banks of the distant river', 'I have never known you', 'But your blood flows in my veins', 'Your beautiful black blood that irrigates the fields', 'The blood of your sweat', 'The sweat of your work', 'The work of your slavery', 'Africa, tell me Africa', 'Is this your back that is unbent', 'This back that never breaks under the weight of humiliation', 'This back trembling with red scars', 'And saying no to the whip under the midday sun?', 'But a grave voice answers me', 'Impetuous child that tree, young and strong', 'That tree over there', 'Splendidly alone amidst white and faded flowers', 'That is your Africa springing up anew', 'springing up patiently, obstinately', 'Whose fruit bit by bit acquires', 'The bitter taste of liberty.'];

'Africa my Africa';


document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  if (!!stories.length) {
    let new_ol = document.createElement('ol');
    new_ol.innerText = stories.shift();
    new_ol.style.color = '#cc33cc';

    element_list.appendChild(new_ol);
  }

});

document.getElementById('speak').addEventListener('click', (event) => {
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(stories.shift()));

});

document.getElementById('restart').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list');
  element_list2.replaceChildren();

});

var images;


images = ['https://images.pexels.com/photos/3049880/pexels-photo-3049880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'http://static1.squarespace.com/static/533b44d9e4b0ac2733685dc4/5342fa43e4b025cb9b0dac2b/58e5c9449de4bb38c9778ae9/1588093954514/lamukenya.jpeg?format=1500w', 'https://cdn.pixabay.com/photo/2020/02/02/09/13/boat-4812434_1280.jpg', 'https://images.unsplash.com/photo-1553775927-a071d5a6a39a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1687&q=80', 'https://images.pexels.com/photos/4152126/pexels-photo-4152126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://cdn.pixabay.com/photo/2020/05/04/09/09/giraffe-5128394_1280.jpg', 'https://images.pexels.com/photos/4017036/pexels-photo-4017036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/3316259/pexels-photo-3316259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/5409298/pexels-photo-5409298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'];
let element_carousel = document.getElementById('carousel');
element_carousel.setAttribute("src", images[0]);


document.getElementById('previous').addEventListener('click', (event) => {
  let element_carousel2 = document.getElementById('carousel');
  images.unshift(images.pop());
  element_carousel2.setAttribute("src", images[0]);

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_carousel3 = document.getElementById('carousel');
  images.push(images.shift());
  element_carousel3.setAttribute("src", images[0]);

});


var todo;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


todo = [];


document.getElementById('btn-todo').addEventListener('click', (event) => {
  todo.unshift(getNumberOrString(document.getElementById('text').value));
  let element_list_todo = document.getElementById('list-todo');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('text').value);

  element_list_todo.appendChild(new_li);

});

document.getElementById('list-todo').addEventListener('click', (event) => {
  event.target.replaceChildren();

});
