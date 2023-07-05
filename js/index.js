/* Homework_18

Task №1
    Є текстове поле на сторінці. 
    При фокусі на цьому полі збоку з'являється <div> з інформацією.
    При зникненні фокуса - так само пропадає.

Task №2
    На сторінці є дві кнопки.
    При натисканні на першу кнопку просимо користувача ввести в prompt посилання,
        при натисканні на другу - переадресовується на інший сайт (за раніше введеним посиланням).
    Реалізувати перевірку на http/https. Якщо протокол не вказано - додаємо.

Task №3
    Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно).

Task №4
    У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
    Вивести зображення з цієї папки отримане випадковим чином (Math.random).
*/

// Task №1

let infoInput = document.getElementById("info");
let getInfoDescription = document.querySelector(".main__description");
const checkFocus = infoInput.addEventListener("focus", (el) => el ? getInfoDescription.style.display = "block" : false);
const checkBlur = infoInput.addEventListener("blur", (el) => el ? getInfoDescription.style.display = "none" : false);

// Task №2

const redirectToURL = () => {
    let url = prompt('Введіть URL:');
    if (url) {
      //check http/https protocols
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
      }
      window.location.href = url;
    }
  }

//Task №3

let table = document.createElement('table');
let container = document.querySelector('.container');
let counter = 1;

for (let i = 0; i < 10; i++) {
  let row = document.createElement('tr');

  for (let j = 0; j < 10; j++) {
    let cell = document.createElement('td');

    cell.textContent = counter;
    row.appendChild(cell);
    counter++;
  }
  table.appendChild(row);
}

container.appendChild(table);

//Task №4

let imageArr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.png', '6.jpg', '7.png', '8.png', '9.png', '10.png'];
let randomIndex = Math.floor(Math.random() * imageArr.length);
const imagePath = 'assets/img/';
let imageElement = document.createElement('img');
imageElement.src = imagePath + imageArr[randomIndex];
container.appendChild(imageElement);