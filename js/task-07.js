// Напиши скрипт, который реагирует на изменение значения 
// input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 

// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const refs = {
   fontSizeInput: document.querySelector ('#font-size-control'), 
   textControl: document.querySelector('#text'),
};

console.log(refs);

function calculate(event) {
    const newFontSize = Number(event.currentTarget.value);
    console.log(newFontSize);

    refs.textControl.style.fontSize = `${newFontSize}px`;

}

refs.fontSizeInput.addEventListener('input', calculate);



 