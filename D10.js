// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20;
console.log(sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: "Riccardo",
  surname: "Ronca",
  age: 26,
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["java script"];

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("HTML");
me.skills.push("CSS");

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.*/

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
let result = dice();
console.log(result);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}
let n = whoIsBigger(10, 21);
console.log(n);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]*/

function splitMe(string) {
  return string.split("");
}
const frase = "";
const stringArray = splitMe(frase);
console.log(stringArray);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(str, isFirst) {
  if (isFirst) {
    return str.slice(1);
  } else {
    return str.slice(0, -1);
  }
}
const inputString = "ciao";
const removeFirst = false;
const r = deleteOne(inputString, removeFirst);
console.log(r);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: ("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetter(str) {
  let cia = "";
  for (let i = 0; i < str.length; i++) {
    const ziopera = str[i];

    if (isNaN(parseInt(ziopera))) {
      cia += ziopera;
    }
  }
  return cia;
}
console.log(onlyLetter("zioperacottaro536"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("--------------6--------------------");
function isValidEmail(email) {
  // const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //  return pattern.test(email);

  if (email.includes("@")) {
    return true;
  } else return false;
}

const email1 = "test@example.com";
const email2 = "invalid_email";
const email3 = "another@example";

console.log(isValidEmail(email1));
console.log(isValidEmail(email2));
console.log(isValidEmail(email3));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  return daysOfWeek[dayIndex];
}

const currentDay = whatDayIsIt();
console.log(currentDay);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(numRolls) {
  let result = {
    sum: 0,
    values: [],
  };

  for (let i = 0; i < numRolls; i++) {
    let diceResult = dice();
    result.sum += diceResult;
    result.values.push(diceResult);
  }

  return result;
}

var rolls = 5;
var rollResult = rollTheDices(rolls);

console.log(rollResult.sum);
console.log(rollResult.values);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(date) {
  const currentDate = new Date();
  const timeDiff = Math.abs(currentDate - date);
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return daysDiff;
}
const startDate = new Date("2023-01-01");
const daysPassed = howManyDays(startDate);
console.log(daysPassed);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday() {
  let today = new Date();
  if (today.getDate() === 14 && today.getMonth() === 7) {
    return true;
  } else {
    return false;
  }
}
console.log(isTodayMyBirthday());

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare 
  l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("--------------11----------------");
function deleteProp(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
  }
  return obj;
}
const myObject = {
  name: "Luca",
  age: 30,
  city: "Verona",
};

console.log(deleteProp(myObject, "age"));

/*ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(arg) {
  let newest = arg[0];

  for (let i = 0; i < arg.length; i++) {
    const movie = arg[i];
    if (movie.Year > newest.Year) {
      newest = movie;
    }
  }
  return newest;
}

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(movies) {
  return movies.length;
}

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(arg) {
  let arr = [];
  for (let i = 0; i < arg.length; i++) {
    let ele = arg[i].Year;
    arr.push(ele);
  }
  return arr;
}

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(arg) {
  let arr = [];
  for (let i = 0; i < arg.length; i++) {
    let ele = arg[i];
    if (ele.Year < 2000) arr.push(ele);
  }
  return arr;
}

/* ESERCIZIO 16
  Scrivi una funzione chiamata "" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(arg) {
  let arr = 0;
  for (let i = 0; i < arg.length; i++) {
    let ele = arg[i].Year;

    arr += +ele;
  }
  return arr;
}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "" che riceve una stringa come parametro e ritorna i film nell'array "movies" 
  fornito che la contengono nel titolo.
*/
function searchByTitle(arg) {
  let arr = [];
  for (let i = 0; i < movies.length; i++) {
    let ele = movies[i];
    console.log(ele.Title.toLowerCase());
    let movieT = ele.Title.toLowerCase();

    if (movieT.includes(arg.toLowerCase())) {
      arr.push(ele);
    }
  }
  return arr;
}

/* ESERCIZIO 18
  Scrivi una funzione chiamata "" che riceve una stringa come parametro e ritorna un oggetto contenente 
  due array: "match" e "unmatch". "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa 
  fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("----------18------------");
function searchAndDivide(str) {
  const match = [];
  const unmatch = [];
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (movie.Title.includes(str)) {
      match.push(movie);
    } else unmatch.push(movie);
  }
  return { match: match, unmatch: unmatch };
}

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo 
  dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(arg) {
  movies.splice(arg, 1);
  return movies;
}
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function div(id) {
  let uId = document.getElementById(id);
  return uId;
}
console.log(div("container"));
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function div2() {
  let uTd = document.querySelectorAll("td");
  return uTd;
}
console.log(div2());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function print() {
  let uTd = document.querySelectorAll("td");
  for (let i = 0; i < uTd.length; i++) {
    console.log(uTd[i].innerText);
  }
  return uTd;
}
console.log(print());
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function print2() {
  let uTd = document.querySelectorAll("a");
  for (let i = 0; i < uTd.length; i++) {
    console.log((uTd[i].style.backgroundColor = "red"));
  }
  return uTd;
}
console.log(print2());
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function print3() {
  let uTd = document.querySelector("ul");
  let myList = document.createElement("li");
  myList.id = "myList";
  myList.innerText = "cane";
  myList.append(uTd);
  return uTd;
}
console.log(print3());
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function print4() {
  let uTd = document.querySelectorAll("li");
  for (let i = 0; i < uTd.length; i++) {
    uTd[i].innerHTML = " ";
  }
  return uTd;
}
console.log(print4());
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function print5() {
  let uTd = document.querySelectorAll("tr");
  for (let i = 0; i < uTd.length; i++) {
    uTd[i].classList.add("test");
  }
  return uTd;
}
console.log(print5());

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*"
   (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo.
 */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
console.log(newestMovie(movies));
console.log(countMovies(movies));
console.log(onlyTheYears(movies));
console.log(onlyInLastMillennium(movies));
console.log(sumAllTheYears(movies));
console.log(searchByTitle("Lord"));
console.log(removeIndex(10));
console.log(searchAndDivide("Lord"));
