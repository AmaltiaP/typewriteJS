// comentario

var app = document.getElementById('Cualquier cosa');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Hola')
  .pauseFor(300)
  .deleteChars(10)
  .typeString('<strong>Tecnolochicas</strong> Aprendiendo JS ')
  .typeString('<strong>only <span style="color: #27ae60;">Saludos</span> Cordiales!</strong>')
  .pauseFor(1000)
  .start();  