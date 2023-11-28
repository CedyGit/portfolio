document.querySelectorAll('.navbar ul li a').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Pour éviter le comportement par défaut du lien

    // Cacher le header
    document.getElementById('header').style.display = 'none';

    // Afficher le main-menu
    document.getElementById('main-menu').style.display = 'block';

    // Cacher toutes les sections (sauf #main-menu)
    document.querySelectorAll('.section').forEach(section => {
      if (section.id !== 'main-menu') {
        section.style.display = 'none';
      }
    });

    // Afficher la section correspondante
    var targetSectionId = this.getAttribute('href').substring(1);
    document.getElementById(targetSectionId).style.display = 'block';

    // Mettre à jour l'affichage du contenu
    // updateContentVisibility();
  });
});

