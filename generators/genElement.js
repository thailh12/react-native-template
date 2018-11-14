const componentExists = require('./utils');

module.exports = {
  description: 'Add element',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      }
    }
  ],
  actions: data => {
    let elementTemplate = './element.js.hbs';
    const actions = [
      {
        type: 'add',
        path: '../src/elements/{{properCase name}}.js',
        templateFile: elementTemplate,
        abortOnFail: true
      }
    ];
    return actions;
  }
};
