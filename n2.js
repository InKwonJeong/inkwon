const Gpio = require('onoff').Gpio;
const led = new Gpio(17, 'out');
const button = new Gpio(4, 'in', 'both');
 
button.watch(function (err, value) {
  led.writeSync(value);
});
