// создаем переменную, куда будем записывать текущее значение счетчика
const counterEI = document.querySelector('[data-find = "counteValue"]');
const button = document.querySelector("#addOnePoolButton");
const counterText = document.querySelector("#addTwoPoolsButton");
const reset = document.querySelector("#resetButton");
// переменные вверху - это связь с элементами страницы
// переменная внизу - данные про реальный счетчик, нажимая на кнопку мы меняем данные счетчика counter = counter + 1; - меняем значение переменной
const COUNTER_INITIAL_VALUE = 0; //INITIAL - ПРИНЯТОЕ ЗНАЧЕНИЕ ПО УМОЛЧАНИЮ (с которого инициируется переменная)
// потом присваиваем переменной counter
let counter = COUNTER_INITIAL_VALUE;
// начинаем отсчет с 0
// математические операции сложение/вычитание/умножение/деление и пр.
// в переменную можно записать математичесое выражение или при выводе в консоль
// console.log(34 * 27);
// console.log(counter);
// // увеличиваем счетчик
// counter = counter + 1; //0 + 1 = 1, counter = 1;

// console.log(counter);

// counter = counter + 1; //1 + 1 = 2, counter = 2;

// console.log(counter);

// counter = counter + 1; //2 + 1 = 3

// console.log(counter);

// обрабатываем нажатие на кнопку
// создаем переменную button в которую через вызов конструкции document.querySelector (выбыраем элемент в документе/на странице) записали элемент button из html
// console.log(button);
// добавляем обработчик события(действия), а именно клик. внутри {пишем, что именно хотим сделать}
addOnePoolButton.addEventListener('click', function() {
// console.log('произошел клик по кнопке');

// увеличиваем счетчик по клику на кнопку
counter = counter + parseInt(addOnePoolButton.dataset.pools);
// data атрибуты строковые, переводим их в число с помощью функции parseInt
// console.log(counter, addOnePoolButton.dataset.pools);

counterEI.innerText = counter; // выводим в интерфейс с помощью свойства innerText (изменение текста в элементе - виден в интерфейсе) изменяем цифру в счетчике в соответствии с изменениями переменной counter (значение переменной counter подставляется в счетчик counter) 
});
addTwoPoolsButton.addEventListener('click', function() {
    counter = counter + parseInt(addTwoPoolsButton.dataset.pools);
  counterEI.innerText = counter;
});

resetButton.addEventListener('click', function() {
  counter = COUNTER_INITIAL_VALUE;
counterEI.innerText = counter;
});
// reset.addEventListener('click', function() {
//   counter = 0;
//   counterText.innerText = counter;
// });

//DOM - Document Object Model

// console.log(document); //выводится html код Документ - это наш код внутри браузера, вызывая  в js "документ" можем управлять любым элементом, изменяя его, взаимодействуя с ним через обработчика событий.
// нажимая на кнопку мы меняем значение счетчика, но это пока не отображается в интерфейсе, для этого создаем переменную для счетчика, назовем counterText, назначим для <p.class "counter">
// let counterText = document.querySelector('.counter');

 