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



// get data from session storage
document.addEventListener('DOMContentLoaded', ()=>{
    const data = JSON.parse (sessionStorage.getItem('user'))
    firstName.innerText =data.firstName;
    middleName.innerText =data.middleName;
    lastName.innerText =data.lastName;
    dob.innerText =data.dob;
    address.innerText =data.address;
    city.innerText =data.city;
    state.innerText =data.state;
    country.innerText =data.country;
    zipCode.innerText =data.zipCode;
    email.innerText =data.email;
    comments.innerText =data.comments;
    console.log(data)
})