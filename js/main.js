datos = [
  {
    "titulo": "Pre-carga de elementos.",
    "url": "https://stackblitz.com/edit/preview-load-elements",
    "descripcion": "He creado este diseño que podrás usar para mostrarlas al usuario mientras tu servidor responde.",
    "labels": ["Ionic", "Angular", "Css"]
  },
  {
    "titulo": "Vista única de cuestionario.",
    "url": "https://stackblitz.com/edit/test-page",
    "descripcion": "Diseño de vista única tipo  cuestionario.",
    "labels": ["Ionic", "Angular", "Css"]
  },
  {
    "titulo": "Cards sociales.",
    "url": "https://stackblitz.com/edit/social-cards-ionic",
    "descripcion": "Diseño de cards estilo social.",
    "labels": ["Ionic", "Angular", "Css"]
  },
  {
    "titulo": "Botones sociales.",
    "url": "https://codepen.io/krrskl/pen/gjdzyp",
    "descripcion": "Diseño de unos botones sociales.",
    "labels": ["Css"]
  },
  {
    "titulo": "Firma de correo.",
    "url": "https://codepen.io/krrskl/pen/KBbevg",
    "descripcion": "Creando mi firma para Gmail.",
    "labels": ["Css"]
  },
  {
    "titulo": "Indicador de scroll",
    "url": "https://gitlab.com/krrskl97/scroll-indicator",
    "descripcion": "Cómo crear un indicador de scroll usando JavaScript + Sass.",
    "labels": ["Sass", "JavaScript", "Css"]
  }

]

$(function () {
  datos.forEach(element => {
    let labels = [];
    element.labels.forEach(label => {
      labels.push(`<strong>${label}</strong>`)
    })
    $(".desing-inspiration").append(`
      <a href="${element.url}" target="_blank" rel="noopener noreferrer">
        <div class="rc-col s6 l3">
          <div class="card">
            <div class="card-header">
              <strong>${element.titulo}</strong>
            </div>
            <div class="card-content">
              <div class="link-action">
                <a href="${element.url}" target="_blank" rel="noopener noreferrer">
                  <i class="fas fa-arrow-circle-right"></i>
                </a>
              </div>
              ${element.descripcion}
            </div>
            <div class="labels">
              ${labels}
            </div>
          </div>
        </div>
      </a>
    `)
  });
})