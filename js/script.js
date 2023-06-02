// document.getElementById('form').addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission
//     let firstName = document.getElementById("firstName").value;
//     let middleName = document.getElementById("middleName").value;
//     let lastName = document.getElementById("lastName").value;    


//    

//   });



// Get elements from the DOM
const form = document.getElementById('form');
const btn = document.getElementById('submitBtn');
const firstName = document.getElementById('firstName');
const middleName = document.getElementById('middleName');
const lastName = document.getElementById('lastName');
const dob = document.getElementById('dob');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const country = document.getElementById('country');
const zipCode = document.getElementById('zipCode');
const email = document.getElementById('email');
const comments = document.getElementById('comments');

// Add eventlistener to the form
btn.addEventListener('click', (e) => {
  e.preventDefault();

  const data = {
    firstName: firstName.value,
    middleName: middleName.value,
    lastName: lastName.value,
    dob: dob.value,
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
})