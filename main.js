let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Realiza, diseña, analiza y gestiona base de datos')
  .pauseFor(200)
  .deleteChars(10)
  .start();
