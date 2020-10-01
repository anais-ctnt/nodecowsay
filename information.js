const name = 'Anaïs'
let campus = 'Nantes'

  const myPresentation = () => {
    const cowsay = require("cowsay");
    console.log(cowsay.say({
  	text : `Hello, I'm ${name} from ${campus} Campus !`,
  }));
  };

module.exports = myPresentation;
