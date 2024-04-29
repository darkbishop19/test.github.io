/* Task 1 */
let lightButton = document.querySelector('.theme-button-light');
let darkButton = document.querySelector('.theme-button-dark');
let serifButton = document.querySelector('.font-button-serif');
let sansSerifButton = document.querySelector('.font-button-sans-serif');
let page = document.querySelector('.page');


darkButton.onclick = function () {
	lightButton.classList.remove('active');
	darkButton.classList.add('active');
	page.classList.add('dark');
}

lightButton.onclick = function () {
	lightButton.classList.add('active');
	darkButton.classList.remove('active');
	page.classList.remove('dark');
}
serifButton.onclick = function () {
	document.body.classList.add('serif');
	serifButton.classList.add('active');
	sansSerifButton.classList.remove('active');
}
sansSerifButton.onclick = function () {
	document.body.classList.remove('serif');
	serifButton.classList.remove('active');
	sansSerifButton.classList.add('active');
}


/* Task 2  */

let articleSections = document.querySelectorAll('.blog-article.short');

for (let articleSection of articleSections) {
  let moreButton = articleSection.querySelector('.more');
  moreButton.onclick = function () {
    articleSection.classList.remove('short');
    moreButton.classList.remove('active');
  };
}

/* Task 3 */

let rentStyle = document.querySelector('.cards');
let cardViewButtonGrid = document.querySelector('.card-view-button-grid');
let cardViewButtonList = document.querySelector('.card-view-button-list');

cardViewButtonGrid.onclick = function () {
	rentStyle.classList.remove('list');
	cardViewButtonGrid.classList.add('active');
	cardViewButtonList.classList.remove('active');
}

cardViewButtonList.onclick = function () {
	rentStyle.classList.add('list');
	cardViewButtonGrid.classList.remove('active');
	cardViewButtonList.classList.add('active');
}

/* Task 4 */

let mainImage = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');



for (let activeImage of previews) {
activeImage.onclick = function (evt) {
  evt.preventDefault();
  mainImage.src = activeImage.href;

  let currentActive = document.querySelector('.preview-list .active-item');
  currentActive.classList.remove('active-item');
  activeImage.classList.add('active-item');
};
}
