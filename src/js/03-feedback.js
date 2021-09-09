import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextInput, 500));
const formData = {
  email: '',
  message: '',
};
function onTextInput(e) {
  formData[e.target.name] = e.target.value;
  console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(JSON.stringify(formData));
}
function onFormSubmit(e) {
  e.preventDefault();
  console.log('Форма отправлена');
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}
populateForm();
function populateForm() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savedMessage);
  if (savedMessage) {
    const keys = Object.keys(savedMessage);
    for (const key of keys) {
      form[key].value = savedMessage[key];
    }
  }
}