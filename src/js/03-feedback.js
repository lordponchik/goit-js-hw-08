import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const LOCALE_FEEDBACK_STATE = 'feedback-form-state';
let formData = {};

loadFormData();

refs.form.addEventListener('input', throttle(saveLocaleFormData, 500));
refs.form.addEventListener('submit', submitForm);

function saveLocaleFormData(e) {
  formData[e.target.name] = e.target.value.trim();

  localStorage.setItem(LOCALE_FEEDBACK_STATE, JSON.stringify(formData));
}
function loadFormData() {
  if (localStorage.getItem(LOCALE_FEEDBACK_STATE)) {
    formData = JSON.parse(localStorage.getItem(LOCALE_FEEDBACK_STATE));

    refs.inputEmail.value = formData.email ? formData.email : '';
    refs.textarea.value = formData.message ? formData.message : '';
  }
}
function submitForm(e) {
  e.preventDefault();

  if (
    refs.inputEmail.value.trim().length === 0 ||
    refs.textarea.value.trim().length === 0
  ) {
    alert('Необходимо заполнить оба поля');
    return;
  }

  localStorage.removeItem(LOCALE_FEEDBACK_STATE);
  refs.inputEmail.value = '';
  refs.textarea.value = '';
  console.log(formData);
  formData = {};
}
