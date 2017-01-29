var marble = document.querySelector('.marble');
var hole = document.querySelector('.hole');
var playground = document.querySelector('.playground');

function changeColor(alpha) {
  marble.style.backgroundColor = `hsl(${360-alpha}, 70%, 40%)`;
  hole.style.backgroundColor = `hsl(${alpha}, 70%, 40%)`;
}

function changeVerticalPosition(beta, alpha) {
  var rect = marble.getBoundingClientRect();
  var y = rect.top;
  console.log(y)
  if (beta >= 5){
      if (y > 405) y = 405;
      marble.style.top = `${y+3}px`;
  } else if (beta < -5) {
      if (y < 15) y = 15;
      marble.style.top = `${y-3}px`;
  }
}

function changeHorizontalPosition(gamma, alpha) {
  var rect = marble.getBoundingClientRect();
  var x = rect.left;
  console.log(x)
  if (gamma >= 5){
    if (x > 255) x = 255;
    marble.style.left = `${x+3}px`;
  } else if (gamma < -5) {
    if (x < 15) x = 15;
    marble.style.left = `${x-3}px`;
  }
}

function checkPositionAndColor() {
  var rectHole = hole.getBoundingClientRect();
  var rect = marble.getBoundingClientRect();
  var leftCheck = rectHole.left < rect.left;
  var topCheck = rectHole.top < rect.top;
  var bottomCheck = rectHole.bottom > rect.bottom;
  var rightCheck = rectHole.right > rect.right;
  if (leftCheck && topCheck && bottomCheck && rightCheck) {
    fireColorParty();
  };
}

function fireColorParty() {
  marble.style.visibility = 'hidden';
  hole.style.visibility = 'hidden';
  $(".playground")
  .animate({backgroundColor: 'red'}, 200)
  .animate({backgroundColor: 'blue'}, 200)
  .animate({backgroundColor: 'green'}, 200)
  .animate({backgroundColor: 'yellow'}, 200)
  .animate({backgroundColor: 'orange'}, 200)
  .animate({backgroundColor: 'pink'}, 200);
}

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', function(eventData) {
    var alpha = eventData.alpha;
    var beta = eventData.beta;
    var gamma = eventData.gamma;
    changeColor(alpha);
    changeVerticalPosition(beta);
    changeHorizontalPosition(gamma);
    checkPositionAndColor();
  }, false);
};
