
// Get elements from the DOM
const form = document.getElementById('form');
const btn = document.getElementById('submitBtn');
const firstName = document.getElementById('firstName');
const middleName = document.getElementById('middleName');
const lastName = document.getElementById('lastName');
const dob = document.getElementById('dob');
const address = document.getElementById('address');
const studentID = document.getElementById('studentID');
const city = document.getElementById('city');
const state = document.getElementById('state');
const country = document.getElementById('country');
const zipCode = document.getElementById('zipCode');
const email = document.getElementById('email');
const comments = document.getElementById('comments');
const inputFields = document.querySelectorAll('input');
const inputValue = inputFields.value

// Add eventlistener to the form
btn.addEventListener('click', (e) => {
  e.preventDefault();

  const data = {
    firstName: firstName.value,
    middleName: middleName.value,
    lastName: lastName.value,
    dob: dob.value,
    studentID: studentID.value,
    address: address.value,
    city: city.value,
    state: state.value,
    country: country.value,
    zipCode: zipCode.value,
    email: email.value,
    comments: comments.value,
  }

  sessionStorage.setItem("user", JSON.stringify(data))
   // Redirect to another page
    window.location.assign('preview.html')

    // Validated input
  if (inputFields == '') {
    inputFields.style.borderColor = 'red';
    btn.style.backgroundColor = "red"
  } else {
    inputFields.style.borderColor ="rgb(150,150,150)";
    btn.styyle.backgroundColor = "#047aed"
  }
})


