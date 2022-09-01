// Create variables targetting the relevant DOM elements here 👇
var randomCoverButton = document.querySelector('.random-cover-button')
var randomCoverImage = document.querySelector('.cover-image')
var randomCoverTitle = document.querySelector('.cover-title')
var randomDescriptor1 = document.querySelector('.tagline-1')
var randomDescriptor2 = document.querySelector('.tagline-2')
var saveCoverButton = document.querySelector('.save-cover-button')
var makeNewButton = document.querySelector('.make-new-button')
var homeButton = document.querySelector('.home-button')
var viewSavedButton = document.querySelector('.view-saved-button')
var viewFormView = document.querySelector('.form-view')
var viewHomeView = document.querySelector('.home-view')
var viewSavedView = document.querySelector('.saved-view')
var viewSavedCoversSection = document.querySelector('.saved-covers-section')
var makeMyBookButton = document.querySelector('.create-new-book-button')

var inputUserCover = document.querySelector('.user-cover')
var inputTitle = document.querySelector('.user-title')
var inputDescriptor1 = document.querySelector('.user-desc1')
var inputDescriptor2 = document.querySelector('.user-desc2')
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', createNewCover);
makeNewButton.addEventListener('click', makeOwnCover)
viewSavedButton.addEventListener('click', saveCovers)
homeButton.addEventListener('click', takeMeHome)
makeMyBookButton.addEventListener('click', makeMyBook)

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createNewCover() {
    randomCoverImage.src = covers[getRandomIndex(covers)]
    randomCoverTitle.innerText = titles[getRandomIndex(titles)]
    randomDescriptor1.innerText = descriptors[getRandomIndex(descriptors)]
    randomDescriptor2.innerText = descriptors[getRandomIndex(descriptors)]
}

function makeOwnCover() {
  viewHomeView.classList.add('hidden')
  randomCoverButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  viewFormView.classList.remove('hidden')
  homeButton.classList.remove('hidden')
}

function saveCovers() {
  viewHomeView.classList.add('hidden')
  viewSavedView.classList.remove('hidden')
  saveCoverButton.classList.add('hidden')
  randomCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
  viewSavedCoversSection.classList.remove('hidden')
  viewFormView.classList.add('hidden')
}

function takeMeHome() {
  viewHomeView.classList.remove('hidden')
  viewFormView.classList.add('hidden')
  viewSavedView.classList.add('hidden')
  randomCoverButton.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
  homeButton.classList.add('hidden')
}

function makeMyBook() {
var myBookTitle = inputTitle.value
      titles.push(myBookTitle)
}

// maybe we take each input and make them into a string that we .push to the savedCovers



// makeNewButton.addEventListener('click', makeOwnCover)
//
// function makeOwnCover(click) {
//   if(click.target.classList.contains('home-view')) {
//     viewHomeView.classList.toggle('form-view')
//   }
// }
