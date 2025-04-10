const chalk = require('chalk');

function showColorfulMessage() {
  console.log(chalk.blue.bold('Keep pushing your limits!'));
  console.log(chalk.green('You are doing amazing things!'));
  console.log(chalk.magentaBright('Stay focused and keep building!'));
}

module.exports = showColorfulMessage;
