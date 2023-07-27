let loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let alertMsg = document.querySelector('.alert');

  if((username === 'CodersBay') && CryptoJS.SHA256(password) == '99355ffffe27acb802f81d07902afd5ee9068df9359fd3af4963c49934db10b1'){
    window.location.replace('./login_success.html');
  } else {
    alertMsg.classList.remove('d-none');
  }
});