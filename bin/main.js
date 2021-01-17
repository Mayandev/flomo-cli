#!/usr/bin/env node
const request = require('axios');
const chalk = require('chalk');
const config = require('../lib/config');
const inquirer = require('inquirer');
const minimist = require('minimist');
const ora = require('ora');
const program = require('commander');
const pkg = require('../package.json');
const _ = require('lodash');

const URL_REG = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

program.version(pkg.version).action(() => {
  const content = program.args.join(' ');
  saveFlomo(content);
});

program.on('--help', () => {
  console.log('');
  console.log(chalk.green('Examples: '));
  console.log(chalk.cyan(" $ flomo 'This is a flow momery from flomo-cli.'"));
  console.log(
    chalk.cyan(" $ flomo '#tag1 #tag2 This is a flow momery from flomo-cli with hash tag.'"),
  );
});

program
  .command('config')
  .description('Set the api config')
  .option('--api', 'Change flomo api link')
  .action((args) => {
    // input is 'flomo config'
    if (process.argv.length === 3) {
      return setConfig();
    }
    // input is flomo config --api 'https://api...'
    const { api: apiURL } = minimist(process.argv.slice(2));
    config.write({ apiURL });
  });

program
  .command('edit')
  .description('Edit flomo content in vim editor')
  .action(async () => {
    const { content } = await inquirer.prompt([
      {
        type: 'editor',
        message: 'Input flomo content:',
        name: 'content',
      },
    ]);
    saveFlomo(content);
  });

program.parse(process.argv);

// without param
if (!process.argv.slice(2).length) {
  checkConfig();
}

async function checkConfig() {
  const savedConfig = await config.load();
  if (!_.isEmpty(savedConfig)) {
    program.help();
  }
  setConfig();
}

async function setConfig() {
  // inquire for a api link
  const { apiURL } = await inquirer.prompt([
    {
      type: 'input',
      message: 'Input flomo api link: ',
      name: 'apiURL',
      validate: (ans) => {
        if (!ans.match(URL_REG)) {
          return 'Please input a valid flomo api link(See: https://flomoapp.com/mine?source=incoming_webhook)';
        }
        return true;
      },
    },
  ]);
  config.write({ apiURL });
}

async function saveFlomo(content) {
  const savedConfig = await config.load();
  const apiURL = _.get(savedConfig, 'apiURL', '');
  if (!apiURL.match(URL_REG)) {
    console.log(chalk.red('Invalid URL, Please check you config.'));
    return;
  }
  if (_.isEmpty(content)) {
    console.log(chalk.cyan('You did not input content!'));
  }
  const spinner = ora('Uploading flomo...').start();
  // request post flomo
  try {
    await request.post(apiURL, {
      content,
    });
    spinner.succeed('Flomo saved!');
  } catch (e) {
    spinner.fail('Failed! Maybe you have reached the 100 limit');
    console.log(e);
  }
}
