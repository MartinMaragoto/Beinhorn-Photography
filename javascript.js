// Pop-up de la página
const popUpBtn= document.getElementById ('first-btn')
const popUp = document.getElementById ('pop-up')
const blackCourtain = document.getElementById ('backdrop')
const chooseSection = document.getElementById ('choose-section')




function enterPage (){
popUp.style.display = 'none'
blackCourtain.style.display = 'none'
chooseSection.style.display = 'flex'
}

popUpBtn.addEventListener ('click', enterPage)




// Design and developer Buttons
const designButton = document.getElementById ('btn2')
const developerButton = document.getElementById ('btn3')
const backgroundPhoto= document.getElementById('background')
const header = document.getElementById('main-header')
const dataSection = document.getElementById('data-section')
const backButton= document.getElementById('backButtonContainer')
const videoButton= document.getElementById('videoButtonContainer')

//Click en design skills
function ChooseDesign (){
chooseSection.style.display = 'none'
header.style.display = 'none'
dataSection.style.display = 'block'
// background.style.backgroundImage = "url('images/codebackground.jpg')"
// background.style.backgroundSize = "cover"


}
designButton.addEventListener ('click', ChooseDesign)


//Click en developer skills 
function ChooseDeveloper (){
chooseSection.style.display = 'none'
header.style.display = 'none'
backgroundPhoto.classList.add ('developerBody')
backButton.style.display = 'flex'
videoButton.style.display = 'flex'

const windowWidth = window.innerWidth
if (windowWidth <=668) {
    dataSection.style.display = 'flex'
} else {
    dataSection.style.display = 'block'
}

}
developerButton.addEventListener ('click', ChooseDeveloper)

//Developer: desplegar información
const arrowButton1 = document.getElementById('smallButton1')
const bubbleTextAboutMe = document.getElementById ('textAboutMe') 

const personalData = document.getElementById('personal-data') 
const bubbleTextPersonalData = document.getElementById('textPersonalData')

const portFolio = document.getElementById('portfolio')
const bubbleTextPortfolioLinks = document.getElementById ('portfolioLinks') 


//Funciones de abrir y cerrar menús
function openAboutMeText(){

    bubbleTextAboutMe.classList.toggle('open')
}
arrowButton1.addEventListener('click', openAboutMeText);



function openPersonalDataText (){

    bubbleTextPersonalData.classList.toggle('open')
}
personalData.addEventListener('click', openPersonalDataText)



function openPortfolio (){

    bubbleTextPortfolioLinks.classList.toggle('open')
}
portFolio.addEventListener('click', openPortfolio)



//Bubble 1
// function getInfoAboutMe (){
// bubbleTextAboutMe.style.display = 'block'
// bubbleTextPersonalData.style.display = 'block'
// bubbleTextPortfolioLinks.style.display = 'block'
// console.log(bubbleTextAboutMe)
// }

// aboutMe.addEventListener ('click', getInfoAboutMe)


// //Bubble 2
// function getPersonalData (){
// bubbleTextPersonalData.style.display = 'block'


// }
// aboutMe.addEventListener ('click', getPersonalData)


// //Bubble 3
// function getPortfolioLinks () {
// bubbleTextPortfolioLinks.style.display = 'block'

// }
// aboutMe.addEventListener ('click', getPortfolioLinks)