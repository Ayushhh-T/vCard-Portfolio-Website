'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Get the form element
const contactForm = document.querySelector('.form');

// Get the submit button
const submitButton = contactForm.querySelector('.form-btn');

// Add submit event listener to the form
contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  // Get the form inputs
  const fullNameInput = contactForm.querySelector('input[name="fullname"]');
  const emailInput = contactForm.querySelector('input[name="email"]');
  const messageInput = contactForm.querySelector('textarea[name="message"]');

  // Validate form inputs
  if (validateInputs(fullNameInput, emailInput, messageInput)) {
    // If all inputs are valid, you can proceed with form submission
    submitForm(fullNameInput.value, emailInput.value, messageInput.value);
  }
});

// Function to validate form inputs
function validateInputs(fullNameInput, emailInput, messageInput) {
  let isValid = true;

  // Reset input error styles
  fullNameInput.classList.remove('error');
  emailInput.classList.remove('error');
  messageInput.classList.remove('error');

  // Validate full name input
  if (fullNameInput.value.trim() === '') {
    fullNameInput.classList.add('error');
    isValid = false;
  }

  // Validate email input
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailInput.classList.add('error');
    isValid = false;
  }

  // Validate message input
  if (messageInput.value.trim() === '') {
    messageInput.classList.add('error');
    isValid = false;
  }

  return isValid;
}

// Function to submit the form
function submitForm(fullName, email, message) {
  // Replace this with your actual form submission logic
  console.log('Form submitted!');
  console.log('Full Name:', fullName);
  console.log('Email:', email);
  console.log('Message:', message);

  // Disable the submit button after form submission
  submitButton.disabled = true;
}

// Add input event listeners to enable/disable the submit button
contactForm.addEventListener('input', () => {
  const fullNameInput = contactForm.querySelector('input[name="fullname"]');
  const emailInput = contactForm.querySelector('input[name="email"]');
  const messageInput = contactForm.querySelector('textarea[name="message"]');

  // Enable the submit button if all form inputs are filled
  submitButton.disabled = !(fullNameInput.value.trim() !== '' && emailInput.value.trim() !== '' && messageInput.value.trim() !== '');
});
