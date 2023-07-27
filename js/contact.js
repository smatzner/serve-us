let submitContactForm = document.getElementById('submitContactForm');

submitContactForm.addEventListener('click', (e) => {
    e.preventDefault();
    let contactFormName = document.getElementById('contactFormName').value;
    let contactFormMessage= document.getElementById('contactFormMessage').value;
    localStorage.setItem('contactFormName',contactFormName);
    localStorage.setItem('contactFormMessage',contactFormMessage);
    window.location.replace('./contact_success.html');
});