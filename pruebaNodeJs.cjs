const { expect  } = require('great-expectations');

const client = expect ({
  profile: 'my_profile',
  project_root: '/path/to/my/great_expectations_project',
});

const commands = [
  'list-expectation-suites',
  'list-expectations',
  'validate-dataset',
  'validate-multiple-datasets',
];

for (const command of commands) {
  console.log(`Executing command: ${command}`);
  client[command]();
}