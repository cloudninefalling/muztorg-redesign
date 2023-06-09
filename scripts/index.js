//--constants--

//document query selectors
const titleSpanText = document.querySelector('.lead__span-orange')
const categories = Array.from(document.querySelectorAll('.categories__list-item'));
//guitar brand names to cycle thru
const guitarBrands = ['fender', 'gibson', 'ibanez', 'yamaha', 'gretsch']
let guitarBrandsIterator = 0;

//--functions--

//countinuously change lead title span fender->gibson->ibanez->...
function changeTitleSpanText() {
  if (guitarBrandsIterator > guitarBrands.length - 1) { guitarBrandsIterator = 0 };
  titleSpanText.textContent = guitarBrands[guitarBrandsIterator];
  guitarBrandsIterator++;
  setTimeout(changeTitleSpanText, 1500);
}

function openCategory(category) {
  categories.forEach(i => {
    i.classList.remove('categories__list-item_active');
    i.classList.remove(`categories__list-item_${i.id}`);
  });
  category.classList.add('categories__list-item_active');
  category.classList.add(`categories__list-item_${category.id}`)
}


//--initial setup--

changeTitleSpanText();

categories.forEach(category => {
  category.addEventListener('mouseover', () => openCategory(category))
});
