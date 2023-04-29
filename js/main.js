

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-menu");
const menuCloseButton = document.querySelector(".menu-close");

menuButton.addEventListener("click", () => {
  menu.classList.add("is-active");
  menuCloseButton.classList.add("is-active");
});
menuCloseButton.addEventListener("click", () => {
  menu.classList.remove("is-active");
  menuCloseButton.classList.remove("is-active");
});
// всплывающя форма
const hideForm = document.querySelector('.hide-form');
const orderTicket = document.querySelector('.order-ticket');
const orderTrigger = document.querySelector('.order-trigger');
const orderTicketForm = document.querySelector('.order-ticket__form');

const heightForm = orderTicket.offsetHeight;

setTimeout(() => {
  const heightForm = orderTicket.offsetHeight;
  hideForm.style.bottom = -heightForm + 'px';
}, 1000);

const sendData = (data, callback) => {

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(data),
  }).then(response => response.json())
    .then(callback)

}

const showThankYou = (data) => {
  console.log(data);
  console.log('Спасибо');
}

orderTrigger.addEventListener('click', () => {
  hideForm.classList.toggle('hide-form-active');
});

orderTicketForm.addEventListener('change', (event) => {
  const target = event.target;
  const label = target.labels[0];
  if (label && target.value) {
    label.classList.add('order-ticket__label-focus')
  } else {
    label.classList.remove('order-ticket__label-focus');
  }
})

orderTicketForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(orderTicketForm);

  const data = {};

  for (const [name, value] of formData) {
    data[name] = value;
  }
  sendData(data, showThankYou);
})
