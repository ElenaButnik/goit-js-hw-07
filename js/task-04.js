// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
//  значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение
//  счетчика.
// Создай функции increment и decrement для увеличения и уменьшения 
// значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// 

//<div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const refs = {
    counterEl: document.querySelector('#counter'),
    textEl: document.querySelector('#value'),
    decrementEl: document.querySelector('[data-action="decrement"]'),
    incrementEl: document.querySelector('[data-action="increment"]'),
};

refs.decrementEl.addEventListener('click', function() {
    counterValue.decrement ();
    refs.textEl.textContent = counterValue.value;
    //console.log('-1');
});

refs.incrementEl.addEventListener('click', function() {
    counterValue.increment ();
    refs.textEl.textContent = counterValue.value;
  //  console.log('+1');
})

let counterValue = {
    value: 0,

    increment() {
        this.value +=1;
    },

    decrement() {
        this.value -=1;
    },
};

