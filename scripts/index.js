
let initialCards = [
    {name: "Valle de Yosemite",link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"},
    {name: "Lago Louise",link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"},
    {name: "Montañas Calvas",link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"},
    {name: "Latemar",link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"},
    {name: "Parque Nacional de la Vanoise",link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"},
    {name: "Lago di Braies",link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"}
];


initialCards.forEach(function (card){
    console.log(card.name)
    
});


const popUpProfile = document.querySelector(".profile__edit-button")
const editProfileForm = document.querySelector("#edit-popup")
const closeProfileBtn = editProfileForm.querySelector(".popup__close")


let profileNameInput = editProfileForm.querySelector(".popup__input_type_name")
let profileDescriptionInput = editProfileForm.querySelector(".popup__input_type_description")


popUpProfile.addEventListener("click", ()=>{
    handleOpenEditModal()
   
});
closeProfileBtn.addEventListener("click", ()=>{
    closeModal(editProfileForm);

});

editProfileForm.addEventListener("submit",handleProfileFormSubmit);


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

function handleProfileFormSubmit(evt) {

  evt.preventDefault();


  let nameInput = document.querySelector(".profile__title");
  let jobInput = document.querySelector(".profile__description");

  nameInput.textContent = profileNameInput.value;
  jobInput.textContent = profileDescriptionInput.value ;

  closeModal(editProfileForm);
}


