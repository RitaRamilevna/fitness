const nameRegex = /^[a-zа-яёA-ZÀ-ÿ\s]+$/u;
const phoneRegex = /^\d+$/;

export function validateForm() {
  const form = document.querySelector('.form__contacts');
  const nameInput = form.querySelector('.form__input--name');
  const nameError = form.querySelector('.form__message-name--invalid');
  const phoneInput = form.querySelector('.form__input--phone');
  const phoneError = form.querySelector('.form__message-phone--invalid');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateName();
    validatePhone();

    if (nameError.textContent === '' && phoneError.textContent === '') {
      form.reset();
    }
  });

  function validateName() {
    if (nameRegex.test(nameInput.value)) {
      nameInput.classList.remove('form__input--invalid');
      nameError.textContent = '';
    } else {
      nameInput.classList.add('form__input--invalid');
      nameError.textContent = 'Введите только буквы и пробелы';
    }
  }

  function validatePhone() {
    if (phoneRegex.test(phoneInput.value)) {
      phoneInput.classList.remove('form__input--invalid');
      phoneError.textContent = '';
    } else {
      phoneInput.classList.add('form__input--invalid');
      phoneError.textContent = 'Допускается ввод только цифр';
    }
  }
}
