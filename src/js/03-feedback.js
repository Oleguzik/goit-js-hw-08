import throttle from 'lodash.throttle';

const FORMDATAS = 'formData';
const formRef = document.querySelector('form.feedback-form');
const emailRef = document.querySelector('form input[name="email"]');
const messageRef = document.querySelector('form textarea[name="message"]');
const formData = {};

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);
onPageLoad();

function onFormInput(e) {
  formData.email = emailRef.value;
  formData.message = messageRef.value;
  // Save data to local storage
  localStorage.setItem(FORMDATAS, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  const { email, message } = e.currentTarget;
  formData[email.name] = email.value;
  formData[message.name] = message.value;
  // removing saved data
  localStorage.removeItem(FORMDATAS);
  e.currentTarget.reset();
  console.log(
    'Form submitted: email: ' +
      formData.email +
      ', message: ' +
      formData.message
  );
}

function onPageLoad() {
  const savedLocalDataText = localStorage.getItem(FORMDATAS);
  if (savedLocalDataText) {
    const savedLocalData = JSON.parse(savedLocalDataText);
    emailRef.value = formData.email = savedLocalData.email;
    messageRef.value = formData.message = savedLocalData.message;
  } else {
    console.log('Starting new form');
  }
}
