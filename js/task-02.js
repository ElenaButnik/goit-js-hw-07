
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsContainer = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
    const liEl = document.createElement('li');
    liEl.textContent = option;
    liEl.style.textTransform = 'uppercase';
    return  liEl;
});

ingredientsContainer.append(...elements);




//liEl.textContent = 'Картошка';
///console.log (liEl);

