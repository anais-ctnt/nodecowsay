const wilder = {
  name: 'Anaïs',
  campus: 'Nantes',
}

  const myPresentation = () => {
    const cowsay = require("cowsay");
    console.log(cowsay.say({
  	text : `Hello, I'm ${wilder.name} from ${wilder.campus} Campus !`,
  }));
  };
  
module.exports = myPresentation;
