var marble = document.querySelector('.marble');
var playground = document.querySelector('.playground');

function devOrientHandler(dir) {
  marble.style.backgroundColor = `hsl(${360-dir}, 70%, 40%)`;
  playground.style.backgroundColor = `hsl(${dir}, 70%, 40%)`;
}

if (window.DeviceOrientationEvent) {
  console.log("DeviceOrientation is supported");
  // Listen for the event and handle DeviceOrientationEvent object
  window.addEventListener('deviceorientation', function(eventData) {
    // alpha is the compass direction the device is facing in degrees
    var dir = eventData.alpha;
    // call our orientation event handler
    devOrientHandler(dir);
  }, false);
};
