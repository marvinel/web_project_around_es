
let initialCards = [
    {name: "Valle de Yosemite",link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"},
    {name: "Lago Louise",link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"},
    {name: "Montañas Calvas",link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"},
    {name: "Latemar",link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"},
    {name: "Parque Nacional de la Vanoise",link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"},
    {name: "Lago di Braies",link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"}
];





const popUpProfile = document.querySelector(".profile__edit-button")
const editProfileForm = document.querySelector("#edit-popup") 
const closeProfileBtn = editProfileForm.querySelector(".popup__close")

let profileNameInput = editProfileForm.querySelector(".popup__input_type_name")
let profileDescriptionInput = editProfileForm.querySelector(".popup__input_type_description")

const popUpAddCard = document.querySelector(".profile__add-button")
const cardForm = document.querySelector("#new-card-popup")
const closeCardForm = cardForm.querySelector(".popup__close")

const bigImage = document.querySelector("#image-popup")



const cardContainer = document.querySelector(".cards__list")
const cardTemplate = cardContainer.querySelector("#card-template").content.querySelector(".card")


initialCards.forEach(function (card){
    renderCard(card.name, card.link)
});

popUpProfile.addEventListener("click",handleOpenEditModal);

popUpAddCard.addEventListener("click", handleOpenCardModal);



closeProfileBtn.addEventListener("click", ()=>{
    closeModal(editProfileForm);

});

closeCardForm.addEventListener("click",() =>{ 
    closeModal(cardForm)

});



editProfileForm.addEventListener("submit",handleProfileFormSubmit);

cardForm.addEventListener("submit", handleCardFormSubmit);


function openModal(element){
    element.classList.add("popup_is-opened");
}

function closeModal(element){
    element.classList.remove("popup_is-opened");
}

function fillProfileForm(){
    profileNameInput.value = document.querySelector(".profile__title").textContent;
    profileDescriptionInput.value = document.querySelector(".profile__description").textContent;
}



function handleOpenEditModal(){
    openModal(editProfileForm);
    fillProfileForm();
}
function handleOpenCardModal(){
    openModal(cardForm);
}
function handleOpenImage(img, title){
    const bigImg = bigImage.querySelector(".popup__image")
    const imgCaption = bigImage.querySelector(".popup__caption");
    const bigImgCloseBtn = bigImage.querySelector(".popup__close")
    bigImg.src = img
    imgCaption.textContent = title

    bigImgCloseBtn.addEventListener("click", ()=>{
        closeModal(bigImage)
    })
    
    openModal(bigImage);
}

function handleProfileFormSubmit(evt) {

  evt.preventDefault();


  let nameInput = document.querySelector(".profile__title");
  let jobInput = document.querySelector(".profile__description");

  nameInput.textContent = profileNameInput.value;
  jobInput.textContent = profileDescriptionInput.value ;

  closeModal(editProfileForm);
}

function handleCardFormSubmit(evt){
    evt.preventDefault();


    let nameInput = document.querySelector(".popup__input_type_card-name");
    let linkInput = document.querySelector(".popup__input_type_url");

   
    renderCard(nameInput.value, linkInput.value)
    closeModal(cardForm);
}

function handleLikeBtn(element){
 element.classList.toggle("card__like-button_is-active")
}

function getCardElement(name = "Sin título", link = "./images/placeholder.jpg"){
 
    const newCard = cardTemplate.cloneNode(true)
    const imgCard = newCard.querySelector(".card__image")
    const nameCard = newCard.querySelector(".card__title")
    const likeBtn = newCard.querySelector(".card__like-button")
    const deleteBtn = newCard.querySelector(".card__delete-button")

    imgCard.src = link;
    imgCard.alt = name;   
    nameCard.textContent = name;


    likeBtn.addEventListener("click", ()=>{
       handleLikeBtn(likeBtn)
    })

    deleteBtn.addEventListener("click", () =>{
        newCard.remove();
    })

    imgCard.addEventListener("click", ()=>{
        handleOpenImage(link, name )
    })
    

    return newCard
}

function renderCard(name, link){

 const newCard = getCardElement(name, link )
 cardContainer.append(newCard)

}

