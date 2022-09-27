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

function getWords(type) {
  // Return words of a given type, or all words if type is 'WORD'
  let words = [
    {type: 'ADJECTIVE', value: 'big'},
    {type: 'ADJECTIVE', value: 'purple'},
    {type: 'ADJECTIVE', value: 'new'},
    {type: 'ADJECTIVE', value: 'interesting'},
    {type: 'ADJECTIVE', value: 'curious'},
    {type: 'ADJECTIVE', value: 'happy'},
    {type: 'ADJECTIVE', value: 'busy'},
    {type: 'ADJECTIVE', value: 'tiny'},
    {type: 'NOUN', value: 'umbrella'},
    {type: 'NOUN', value: 'knee'},
    {type: 'NOUN', value: 'banana'},
    {type: 'NOUN', value: 'platypus'},
    {type: 'NOUN', value: 'cat'},
    {type: 'NOUN', value: 'mouse'},
    {type: 'NOUN', value: 'house'},
    {type: 'VERB', value: 'impressed'},
    {type: 'VERB', value: 'honoured'},
    {type: 'VERB', value: 'saw'},
    {type: 'VERB', value: 'ate'},
    {type: 'VERB', value: 'surprised'},
    {type: 'VERB', value: 'annoyed'},
    {type: 'VERB', value: 'touched'},
    {type: 'VERB', value: 'understood'},
    {type: 'VERB', value: 'taught'},
  ];
  return words.filter(word => type === 'WORD' || word.type === type).map(word => word.value);
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


let element_adjective = document.getElementById('adjective');
element_adjective.innerText = '"big"';
let element_noun1 = document.getElementById('noun1');
element_noun1.innerText = randomMember(getWords('NOUN'));
let element_verb = document.getElementById('verb');
element_verb.innerText = randomMember(getWords('VERB'));
let element_noun2 = document.getElementById('noun2');
element_noun2.innerText = randomMember(getWords('NOUN'));

