const form = document.getElementById('form')
const firstName = document.querySelector('.fname')
const lastName = document.querySelector('.lname')
const emailAddress = document.querySelector('.email')
const password = document.querySelector('.password')
const confirmPassword = document.querySelector('.confirm')

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
})


const setError= (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

const isValidEmail = emailAddress => {
  const re =  /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(emailAddress).toLowerCase());
}

const validateInputs = () => {
  const firstNameValue = firstName.value.trim()
  const lastNameValue = lastName.value.trim()
  const emailAddressValue = emailAddress.value.trim()
  const passwordValue = password.value.trim()
  const confirmPasswordValue = confirmPassword.value.trim()

  if(firstNameValue === '') {
     setError(firstName, 'First Name is required');
  } else {
  setSuccess(firstName);
  }

  if(lastNameValue === '') {
    setError(lastName, 'Last Name is required');
  } else {
    setSuccess(lastName);
  }

  if(emailAddressValue === '') {
    setError(emailAddress, 'Email Address is required');
  } else if (!isValidEmail(emailAddressValue)) {
    setError(emailAddress, 'Provide a valid email address');
  } else {
    setSuccess(emailAddress);
  }

  if (passwordValue === '') {
    setError(password, 'Password is required');
  } else if (passwordValue.length < 8) {
    setError(password, 'Password must be at least 8 characters');
  } else {
    setSuccess(password);
  }

  if (confirmPasswordValue === '') {
    setError(confirmPassword, 'Please confirm your password');
  } else if (confirmPasswordValue !== passwordValue) {
   setError(confirmPassword, 'Password does not match');
  } else {
    setSuccess(confirmPassword);
    popup.classList.add("open-popup");
  }
  
}


//Pop up button
let popup = document.getElementById("popup");


function closePopup() {
  popup.classList.remove("open-popup")
}