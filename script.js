var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('CREATIVE DESIGNER')
  .pauseFor(300)
  .deleteAll()
  .typeString('DESIGNER AND DEVELOPER WEB TRAINEE')
  .pauseFor(1000)
  .start();