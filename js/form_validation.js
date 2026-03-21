(() => {
  'use strict';

  // Récupère toutes les formes avec la classe .needs-validation
  const forms = document.querySelectorAll('.needs-validation');

  forms.forEach(form => {

    // Vérifie si un message de succès existe, sinon le crée
    let successMsg = form.querySelector('.alert-success');
    if (!successMsg) {
      successMsg = document.createElement('div');
      successMsg.className = 'alert alert-success d-none mt-3';
      successMsg.setAttribute('role', 'alert');
      successMsg.textContent = 'Merci ! Votre message a été envoyé avec succès.';
      form.appendChild(successMsg);
    }

    // Ajoute un écouteur d'événement pour la soumission de la forme
    form.addEventListener('submit', event => {
      event.preventDefault(); // Empêche l'envoi classique du formulaire
      event.stopPropagation(); // Empêche la propagation de l'événement

      // Vérifie la validité de tous les champs de la forme
      if (!form.checkValidity()) {
        // Si la forme est invalide, ajoute la classe Bootstrap pour afficher les erreurs
        form.classList.add('was-validated');

        // Défilement vers le premier champ invalide pour le rendre visible
        const firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) {
          firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstInvalid.focus();
        }

      } else {
        // Si la forme est valide
        form.classList.remove('was-validated');

        // Affiche le message de succès
        successMsg.classList.remove('d-none');
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Réinitialise tous les champs du formulaire
        form.reset();
      }
    }, false);
  });
})();