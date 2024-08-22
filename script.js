var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('DISEÑADORA CREATIVA')
  .pauseFor(300)
  .deleteAll()
  .typeString('DISEÑO Y DESARROLLO WEB')
  .pauseFor(1000)
  .start();