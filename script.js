const $contactList = document.getElementById('contact-list');
const $contactDetails = document.getElementById('modal');

const $form = document.getElementById('form');

const $firstname = document.getElementById('firstname');
const $lastname = document.getElementById('lastname');
const $email = document.getElementById('email');
const $city = document.getElementById('city');
const $province = document.getElementById('province');

const $modal = document.getElementById('modal');
const $modalName = document.getElementById('modal__fullname');
const $modalEmail = document.getElementById('modal__email');
const $modalLoc = document.getElementById('modal__loc');

const $closeModal = document.getElementById('modal__close');

// array of contacts
const contacts = [
  {
    firstname: 'Avatar',
    lastname: 'Aang',
    email: 'lastairbender@gmail.com',
    city: 'Southern Air Temple',
    province: 'Air Tribe',
  },
  {
    firstname: 'Firelord',
    lastname: 'Zuko',
    email: 'zuzu@gmail.com',
    city: 'Republic City',
    province: 'Former Fire Nation Colonies',
  },
  {
    firstname: 'Toph',
    lastname: 'Beifong',
    email: 'theboulder@gmail.com',
    city: 'Ba Sing Se',
    province: 'Earth Nation',
  },
];


// display each contact's first and last name on page load
function list(){
  $contactList.innerHTML = '';
  contacts.forEach((contact, index)=>{
    const contactItem = `<li class="contact-item contact" data-index='${index}'> ${contact.firstname} ${contact.lastname}</li>`;
    $contactList.innerHTML = $contactList.innerHTML + contactItem;
  });
}


// when clicking submit, contact's full details are pushed to the contacts array
list();
$form.addEventListener('submit', function (e) {
  e.preventDefault();
  const contact = {
    firstname: $firstname.value,
    lastname: $lastname.value,
    email: $email.value,
    city: $city.value,
    province: $province.value,
  };
  contacts.push(contact);

  list();
});

// when clicking a contact name, the modal will pop up
$contactList.addEventListener('click', function (e) {
  if (e.target.classList.contains('contact')) {
    const contactElement = e.target;
    const index = contactElement.dataset.index;
    modal(index);
  }
});


// modal will display the clicked contact's full contact details
function modal(index) {
  const contact = contacts[index];
  console.log(contact);
  $modalName.innerHTML = `${contact.firstname} ${contact.lastname}`;
  $modalEmail.innerHTML = `${contact.email}`;
  $modalLoc.innerHTML = `${contact.city}, ${contact.province}`;

  $contactDetails.style.display = 'flex';

}


// clicking the x will close the modal by changing its display to 'none'
const closeModal = function () {
  $contactDetails.style.display = 'none';
};

$closeModal.addEventListener('click', closeModal);
