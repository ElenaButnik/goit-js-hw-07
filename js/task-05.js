// Напиши скрипт который, при наборе текста в инпуте 
// input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const refs = {
   input:  document.querySelector('#name-input'),
   output: document.querySelector('#name-output')
};

refs.input.addEventListener('focus', onInputFocus);
refs.input.addEventListener('blur', onInputBlur);

refs.input.addEventListener('input', onInputChange);

function onInputFocus() {
    console.log('Инпут получил фокус');
}

function onInputBlur() {
   console.log('Инпут потерял фокус');
}

function onInputChange (event) {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === '') {
        refs.output.textContent = `незнакомец`;
    } else
    refs.output.textContent = event.currentTarget.value;
}

