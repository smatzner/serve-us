let contactName = document.getElementById('contactName');
let contactMessage = document.getElementById('contactMessage');

contactName.innerHTML = localStorage.getItem('contactFormName');
contactMessage.innerHTML = localStorage.getItem('contactFormMessage');