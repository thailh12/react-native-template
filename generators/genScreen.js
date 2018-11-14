const componentExists = require('./utils');

module.exports = {
  description: 'Add container and component',
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
    let containerTemplate = './container.js.hbs';
    let componentTemplate = './component.js.hbs';

    const actions = [
      {
        type: 'add',
        path: '../src/containers/{{properCase name}}.js',
        templateFile: containerTemplate,
        abortOnFail: true
      },
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
