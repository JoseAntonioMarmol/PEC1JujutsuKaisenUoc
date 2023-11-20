// window.addEventListener('load', function() {
//     document.body.classList.add('fade-in');
//   });
// document.addEventListener('DOMContentLoaded', function() {

//         var loadingScreen = document.querySelector('.loading-screen');
//         var mainContainer = document.querySelector('.main-container');

//         if (loadingScreen && mainContainer) {
//             setTimeout(function() {
//                 loadingScreen.style.opacity = '0';
//                 loadingScreen.style.pointerEvents = 'none';
//                 mainContainer.style.opacity = '1';
//         }, 10000);
//         }

// });

document.addEventListener('DOMContentLoaded', function() {

      // Configuración del Intersection Observer
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Cuando el elemento entra en la vista, se activa la animación
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Deja de observar el elemento después de activar la animación
            }
        });
    }, { threshold: 0.5 }); // Se dispara la animación cuando el 50% del elemento es visible

    // Elementos a observar para activar la animación
    var animatedElements = document.querySelectorAll('.index-title, p, .chars');

    animatedElements.forEach(function(element) {
        observer.observe(element);
    });

    setTimeout(function() {
        var loadingScreen = document.querySelector('.loading-screen');
        var mainContainer = document.querySelector('.main_container');

        if (loadingScreen && mainContainer) {
            loadingScreen.style.opacity = '0';  // Hacer desaparecer la pantalla de carga
            loadingScreen.style.visibility = 'hidden';
            mainContainer.style.opacity = "1";  // Mostrar el contenido principal
            mainContainer.style.visibility = 'visible';
        }
    }, 3000);
});
document.querySelector('.side-menu').addEventListener('click', function() {
    var sideMenu = document.querySelector('.side-menu');
    var iframe = document.getElementById('ytIframe');

    // Cambia el estado de apertura del side-menu
    sideMenu.classList.toggle('open');

    // Comprueba si el side-menu está abierto
    if (sideMenu.classList.contains('open')) {
      // Si el side-menu está abierto, oculta el iframe
      iframe.style.display = 'none';
    } else {
      // Si el side-menu está cerrado, muestra el iframe
      iframe.style.display = 'block';
    }

    // Cambia el estado de apertura del side-menu
    // sideMenu.classList.toggle('open');
});
