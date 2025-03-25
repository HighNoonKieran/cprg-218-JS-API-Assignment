fetch("https://v2.jokeapi.dev/joke/any?safe-mode") //Makes a joke on boot up screen
.then(response => response.json())
.then(data => {
    console.log(data);
    jokeCode.textContent = data.joke || data.setup + data.delivery;
})

document.getElementById("programming").addEventListener ('click', function() {
    fetch("https://v2.jokeapi.dev/joke/programming?safe-mode") //Programming joke
.then(response => response.json())
.then(data => {
    console.log(data);
    title.textContent = "A Random Programming Joke";
    jokeCode.textContent = data.joke || data.setup + " ... " +  data.delivery;
});
});

document.getElementById("christmas").addEventListener ('click', function() {
    fetch("https://v2.jokeapi.dev/joke/Christmas?safe-mode") //christmas joke
.then(response => response.json())
.then(data => {
    console.log(data);
    title.textContent = "A Random Christmas Joke";
    jokeCode.textContent = data.joke || data.setup + " ... " +  data.delivery;
});
});

document.getElementById("spooky").addEventListener ('click', function() {
    fetch("https://v2.jokeapi.dev/joke/spooky?safe-mode") //halloween joke
.then(response => response.json())
.then(data => {
    console.log(data);
    title.textContent = "A Random Spooky Joke";
    jokeCode.textContent = data.joke || data.setup + " ... " + data.delivery;
});
});

document.getElementById("pun").addEventListener ('click', function() {
    fetch("https://v2.jokeapi.dev/joke/pun?safe-mode") //pun
.then(response => response.json())
.then(data => {
    console.log(data);
    title.textContent = "A Random Pun";
    jokeCode.textContent = data.joke || data.setup + " ... " +  data.delivery;
});
});

document.getElementById("misc").addEventListener ('click', function() {
    fetch("https://v2.jokeapi.dev/joke/misc?safe-mode") //misc joke
.then(response => response.json())
.then(data => {
    console.log(data);
    title.textContent = "A Random Misc Joke";
    jokeCode.textContent = data.joke || data.setup + " ... " +  data.delivery;
});
});









