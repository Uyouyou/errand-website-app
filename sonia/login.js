const form = document.getElementById('form')
const firstName = document.querySelector('.fname')
const password = document.querySelector('.password')


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
  const passwordValue = password.value.trim()
 

  if(firstNameValue === '') {
     setError(firstName, 'First Name is required');
  } else {
  setSuccess(firstName);
  }

 
  if (passwordValue === '') {
    setError(password, 'Password is required');
  } else if (passwordValue.length < 8) {
    setError(password, 'Password must be at least 8 characters');
  } else {
    setSuccess(password);
    popup.classList.add("open-popup");
  }

 
  
}


//Pop up button
let popup = document.getElementById("popup");


function closePopup() {
  popup.classList.remove("open-popup")
}