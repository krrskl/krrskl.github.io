datos = [
  {
    "titulo": "titulo 1",
    "url": "google.com",
    "descripcion": "hola xd"
  },
  {
    "titulo": "titulo 2",
    "url": "google.com",
    "descripcion": "hola xd"
  },
  {
    "titulo": "titulo 3",
    "url": "google.com",
    "descripcion": "hola xd"
  }
]

$(function () {
  datos.forEach(element => {
    $(".desing-inspiration").append(`
        <div class="rc-col s6 l3">
          <div class="card">
              <div class="card-header">
                  <strong>${element.titulo}</strong>
              </div>
              <div class="card-content">
                ${element.descripcion}
              </div>
          </div>
        </div>
    `)
  });
})