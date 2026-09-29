
const initialCards = [
    {name: "Valle de Yosemite",link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"},
    {name: "Lago Louise",link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"},
    {name: "Montañas Calvas",link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"},
    {name: "Latemar",link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"},
    {name: "Parque Nacional de la Vanoise",link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"},
    {name: "Lago di Braies",link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"}
];





const ProfileEditBtn = document.querySelector(".profile__edit-button")
const popUpEditProfile = document.querySelector("#edit-popup") 
const editPopupCloseButton = popUpEditProfile.querySelector(".popup__close")

const profileNameInput = popUpEditProfile.querySelector(".popup__input_type_name")
const profileDescriptionInput = popUpEditProfile.querySelector(".popup__input_type_description")

const profileAddButton = document.querySelector(".profile__add-button")
const newCardPopup = document.querySelector("#new-card-popup")
const newCardPopupCloseButton = newCardPopup.querySelector(".popup__close")


const cardContainer = document.querySelector(".cards__list")
const cardTemplate = cardContainer.querySelector("#card-template").content.querySelector(".card")


const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const popUpImage = document.querySelector("#image-popup")
const imagePopupImage = popUpImage.querySelector(".popup__image")
const imagePopupCaption = popUpImage.querySelector(".popup__caption");
const imagePopupCloseButton = popUpImage.querySelector(".popup__close")

initialCards.forEach(function (card){
    renderCard(card.name, card.link)
});

ProfileEditBtn.addEventListener("click",handleOpenEditModal);

profileAddButton.addEventListener("click", handleOpenCardModal);

editPopupCloseButton.addEventListener("click", ()=>{
    closeModal(popUpEditProfile);

});

newCardPopupCloseButton.addEventListener("click",() =>{ 
    closeModal(newCardPopup)

});

popUpEditProfile.addEventListener("submit",handleProfileFormSubmit);

newCardPopup.addEventListener("submit", handleCardFormSubmit);

imagePopupCloseButton.addEventListener("click", ()=>{
        closeModal(popUpImage)
})
function openModal(element){
    element.classList.add("popup_is-opened");
}

function closeModal(element){
    element.classList.remove("popup_is-opened");
}

function fillProfileForm(){
    profileNameInput.value = profileName.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal(){
    openModal(popUpEditProfile);
    fillProfileForm();
}

function handleOpenCardModal(){
    openModal(newCardPopup);
}

function handleOpenImage(img, title){

    imagePopupImage.src = img
    imagePopupImage.alt = title
    imagePopupCaption.textContent = title

   
    
    openModal(popUpImage);
}


function handleProfileFormSubmit(evt) {

  evt.preventDefault();




  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value ;

  closeModal(popUpEditProfile);
}

function handleCardFormSubmit(evt){
    evt.preventDefault();


    const nameInput = document.querySelector(".popup__input_type_card-name");
    const linkInput = document.querySelector(".popup__input_type_url");

   
    renderCard(nameInput.value, linkInput.value)
    document.querySelector("#new-card-form").reset()
    closeModal(newCardPopup);
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
 cardContainer.prepend(newCard)

}

