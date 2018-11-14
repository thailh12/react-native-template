const componentExists = require('./utils');

module.exports = {
  description: 'Add component',
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
    let componentTemplate = './component.js.hbs';
    const actions = [
      {
        type: 'add',
        path: '../src/components/{{properCase name}}.js',
        templateFile: componentTemplate,
        abortOnFail: true
      }
    ];
    return actions;
  }
};
