/* 
   Configuración de Particles.js 
   -----------------------------
   Aquí definimos cómo se ven y comportan las partículas.
*/

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60, /* Cantidad de partículas (menos es más minimalista) */
      "density": {
        "enable": true,
        "value_area": 800 /* Área donde se distribuyen */
      }
    },
    "color": {
      "value": "#2d3748" /* Color de los puntos (gris azulado suave) */
    },
    "shape": {
      "type": "circle", /* Forma: circle, edge, triangle, polygon, star, image */
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5, /* Transparencia de los puntos (0 a 1) */
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3, /* Tamaño de los puntos */
      "random": true, /* ¿Tamaños variados? */
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true, /* ¿Unir puntos con líneas? (Efecto red) */
      "distance": 150, /* Distancia máxima para unirse */
      "color": "#cbd5e1", /* Color de las líneas (gris muy claro) */
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2, /* Velocidad de movimiento (más bajo = más relajante) */
      "direction": "none", /* Dirección: none, top, top-right, etc. */
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" /* Al pasar el mouse: grab (conectar), bubble (agrandar), repulse (alejar) */
      },
      "onclick": {
        "enable": true,
        "mode": "push" /* Al hacer clic: push (añadir más), remove, bubble, repulse */
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// Carrusel de Experiencia Laboral
(function () {
  var carousel = document.querySelector('.experience-carousel');
  if (!carousel) return;

  var cards = carousel.querySelectorAll('.job-card');
  var prevBtn = carousel.querySelector('.carousel-btn.prev');
  var nextBtn = carousel.querySelector('.carousel-btn.next');
  var current = 0;

  function showCard(index) {
    cards.forEach(function (card, i) {
      if (i === index) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  }

  function next() {
    current = (current + 1) % cards.length;
    showCard(current);
  }

  function prev() {
    current = (current - 1 + cards.length) % cards.length;
    showCard(current);
  }

  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);
})();
