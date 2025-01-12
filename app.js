"use strict";

let formulaire = document.getElementById('form');  
let button = document.getElementById('valider');

button.addEventListener('click', (event) => {
    event.preventDefault();  

    let valid = true;  

    
    let nom = document.getElementById('nom');  
    let prenom = document.getElementById('prenom');
    let email = document.getElementById('email');
    let date = document.getElementById('date');
    let adresse = document.getElementById('adresse')
    let password = document.getElementById('password');
    let confirm = document.getElementById('confirm');
    

  
    let errorNom = document.getElementById('error-nom');
    let errorPrenom = document.getElementById('error-prenom');
    let errorEmail = document.getElementById('error-email');
    let errorDate = document.getElementById('error-date');
    let errorAdresse = document.getElementById('error-adresse');
    let errorPassword = document.getElementById('error-password');
    let errorConfirm = document.getElementById('error-confirm');
    let successMessage = document.getElementById('success-message');

    
    errorNom.innerHTML = '';
    errorPrenom.innerHTML = '';
    errorEmail.innerHTML = '';
    errorPassword.innerHTML = '';
    errorConfirm.innerHTML = '';
    successMessage.innerHTML = '';  

    //Nom
    if (nom.value.trim() === "") {
        errorNom.innerHTML = "Le champ nom est requis !";
        errorNom.style.color = "red";
        valid = false;
    } else if (nom.value.length < 5 || nom.value.length > 15) {
        errorNom.innerHTML = "Le nom doit être entre 5 et 15 caractères.";
        errorNom.style.color = "red";
        valid = false;
    }

    //Prenom
    if (prenom.value.trim() === "") {
        errorPrenom.innerHTML = "Le champ prénom est requis !";
        errorPrenom.style.color = "red";
        valid = false;
    } else if (prenom.value.length < 5 || prenom.value.length > 15) {
        errorPrenom.innerHTML = "Le prénom doit être entre 5 et 15 caractères.";
        errorPrenom.style.color = "red";
        valid = false;
    }

    //Email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if (email.value.trim() === "") {
        errorEmail.innerHTML = "Le champ email est requis !";
        errorEmail.style.color = "red";
        valid = false;
    } else if (!emailRegex.test(email.value)) {
        errorEmail.innerHTML = "L'email n'est pas valide.";
        errorEmail.style.color = "red";
        valid = false;
    }

    //Date de naissance
    if (date.value.trim() === "") {
        errorDate.innerHTML = "La date de naissance est requis !";
        errorDate.style.color = "red";
        valid = false;
    } 

       //Adresse
       if (adresse.value.trim() === "") {
        errorAdresse.innerHTML = "L'adresse est requis !";
        errorAdresse.style.color = "red";
        valid = false;
    }

    // Password
    if (password.value.trim() === "") {
        errorPassword.innerHTML = "Le mot de passe est requis !";
        errorPassword.style.color = "red";
        valid = false;
    } else if (password.value.length < 8) {
        errorPassword.innerHTML = "Le mot de passe doit contenir au moins 8 caractères.";
        errorPassword.style.color = "red";
        valid = false;
    }

    //Confirm password
    if (confirm.value.trim() === "") {
        errorConfirm.innerHTML = "Veuillez confirmer votre mot de passe.";
        errorConfirm.style.color = "red";
        valid = false;
    } else if (password.value !== confirm.value) {
        errorConfirm.innerHTML = "Les mots de passe ne correspondent pas.";
        errorConfirm.style.color = "red";
        valid = false;
    }

    
    if (valid) {
        successMessage.innerHTML = "Formulaire validé !";
        successMessage.style.color = "green";  // Afficher en vert
        formulaire.reset();  // Réinitialiser le formulaire
    }
});
