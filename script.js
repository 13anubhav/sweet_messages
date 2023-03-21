

function run(){
    const jokeUrl = 'https://ajith-messages.p.rapidapi.com/getMsgs?category=Sweet';
  //  https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes

const jokeElement = document.getElementById('joke');
const getJokeButton = document.getElementById('get-joke-btn');

getJokeButton.addEventListener('click', () => {
  fetch(jokeUrl, {
    headers: {
      'x-rapidapi-host': 'ajith-messages.p.rapidapi.com',
      'x-rapidapi-key': 'c3e7e0f9a2msh9541025fef72972p19b90ejsn2b4a44807bbe'
    }
  })
  .then(response => response.json())
//   .then(data => {
//     jokeElement.innerText = data.joke;

//   })

  .then(response => {
        console.log(response)
    const textDiv = document.getElementById('text');
    const p = document.createElement('P');
    //const pText =document.createTextNode("Hello 2");
     const pText =document.createTextNode(response.Message);
    textDiv.appendChild(p)
    p.appendChild(pText);

    
    // const textDiv1 = document.getElementById('input_field1');
    // const p2 = document.createElement('P2');
    // const pText2 =document.createTextNode(response[0].joke);
    // textDiv1.appendChild(p)
    // p2.appendChild(pText);


    })

  .catch(error => {
    console.log(error);
  });
});
}

//remove();
run();

function remove() {
    document.getElementById("text").innerHTML = "";
}
remove();
const myTimeout = setTimeout(remove(), 5000);
