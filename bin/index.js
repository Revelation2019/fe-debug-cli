#!/usr/bin/env node
require('yargs')
  .scriptName('fee')
  .usage('Usage: $0 <command> [options]')
  .commandDir('../cmds')
  .demandCommand()
  .example('fee debug -c debug.js -p 3333')
  .help('h')
  .alias('v', 'version')
  .alias('h', 'help')
  .argv;