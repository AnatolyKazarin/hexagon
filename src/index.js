import './main.scss'

const EVENTS = [
  {
    date: "30",
    month: "мая",
    place: "Стадион",
    time: "19:00",
    team1: "Рубин",
    team2: "Спартак"
  },
  {
    date: "17",
    month: "июня",
    place: "Стадион",
    time: "19:00",
    team1: "ЦСКА",
    team2: "Динамо"
  },
  {
    date: "26",
    month: "июня",
    place: "Стадион",
    time: "19:00",
    team1: "Рубин",
    team2: "Уфа"
  },
  {
    date: "16",
    month: "июля",
    place: "Стадион",
    time: "19:00",
    team1: "Динамо",
    team2: "Локомотив"
  },
  {
    date: "30",
    month: "сентября",
    place: "Стадион",
    time: "19:00",
    team1: "Уфа",
    team2: "Рубин"
  },
];

const RATIO = document.documentElement.clientWidth/1266;

const POSITIONS = [
  'transform: scale(0) translate(-50%, -50%); top: 100%; left: 0%;',
  'transform: scale(0) translate(-50%, -50%); top: 88%; left: 10%;',
  `transform: scale(${1*RATIO}) translate(-50%, -50%); top: 79%; left: 21%;`,
  `transform: scale(${1.5*RATIO}) translate(-50%, -50%); top: 67%; left: 33%;`,
  `transform: scale(${2.3*RATIO}) translate(-50%, -50%); top: 50%; left: 50%;`,
  `transform: scale(${1.5*RATIO}) translate(-50%, -50%); top: 33%; left: 67%;`,
  `transform: scale(${1*RATIO}) translate(-50%, -50%); top: 21%; left: 79%;`,
  'transform: scale(0) translate(-50%, -50%); top: 10%; left: 88%;',
  'transform: scale(0) translate(-50%, -50%); top: 0%; left: 100%;',
]

const hexagons = document.querySelectorAll('.hexagon');
const hexagonsContent = document.querySelectorAll('.hexagon-content');
const teamFirstPanel = document.querySelector('.team-first');
const teamSecondPanel = document.querySelector('.team-second');

//Функция отрисовки данных на центральном гексагоне

function fillMiddleHex(i) {
  hexagonsContent[i].innerHTML = `
    <p class="content-place">${EVENTS[i].place}<p>
    <h4 class="content-title">${EVENTS[i].date} ${EVENTS[i].month}</h4>
    <p class="content-time">${EVENTS[i].time}</p>
    <button class="content-button">Купить билет</button>
  `;
  teamFirstPanel.innerHTML = `<span>${EVENTS[i].team1}</span>`;
  teamSecondPanel.innerHTML = `<span>${EVENTS[i].team2}</span>`;
}

//Отрисовка дат на всех гексагонах

function fillOuterHex(i) {
  hexagonsContent[i].innerHTML = `<div class="content-title">${EVENTS[i].date}<br>${EVENTS[i].month}</div>`;
}

for (let i = 0; i < hexagonsContent.length; i++) {
  fillOuterHex(i);
}
fillMiddleHex(2);

//Задание ширины окна пользователя

const wrapper = document.querySelector('.wrapper');

wrapper.setAttribute('style', `height: ${document.documentElement.clientHeight}px`);

//Обработка кликов по гексагонам

let step = 0;

hexagons[0].addEventListener('click', () => {
  scrollOnce(2);
  step = 2;
});
hexagons[1].addEventListener('click', () => {
  scrollOnce(1);
  step = 1;
});
hexagons[2].addEventListener('click', () => {
  scrollOnce(0);
  step = 0;
});
hexagons[3].addEventListener('click', () => {
  scrollOnce(-1);
  step = -1;
});
hexagons[4].addEventListener('click', () => {
  scrollOnce(-2);
  step = -2
});

//Функция одиночного шага прокрутки

function scrollOnce(n) {
  for (let i = 0; i < hexagons.length; i++) {
    hexagons[i].setAttribute('style', POSITIONS[i+2+n]);
  }
  for (let i = 0; i < hexagonsContent.length; i++) {
    fillOuterHex(i);
  }
  fillMiddleHex(hexagons.length-1-(n+2));
}

//Обработка прокрутки

let debounce_timer;

window.onwheel = function(e){
  if (debounce_timer) {
    window.clearTimeout(debounce_timer);
  }
  console.log(e.deltaY);
  debounce_timer = window.setTimeout(function() {
    if (e.deltaY > 0) {
      if (step < 2) {
        step++;
        scrollOnce(step);
      }
    } else {
      if (step > -2) {
        step--;
        scrollOnce(step);
      }
    }
  }, 300);
};
