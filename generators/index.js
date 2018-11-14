const genContainer = require('./genContainer');
const genComponents = require('./genComponent');
const genScreen = require('./genScreen');
const genElement = require('./genElement');

module.exports = plop => {
  plop.setGenerator('screen (component & container)', genScreen);
  plop.setGenerator('component', genComponents);
  plop.setGenerator('container', genContainer);
  plop.setGenerator('element', genElement);
  plop.addHelper('directory', comp => {
    try {
      fs.accessSync(path.join(__dirname, `../src/containers/${comp}`), fs.F_OK);
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
