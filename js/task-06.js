// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

const refs = {
    input: document.querySelector('#validation-input'),
}


refs.input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
   console.log(event.currentTarget.value.length);
   console.log(refs.input.dataset.length);

 if ((event.currentTarget.value.length) === Number(refs.input.dataset.length)) {
        refs.input.classList.add('valid');
        refs.input.classList.remove('invalid');

    }
    else {

        refs.input.classList.add('invalid');
        refs.input.classList.remove('valid');
    }
}


