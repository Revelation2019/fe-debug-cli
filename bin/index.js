#!/usr/bin/env node
require('yargs')
  .scriptName('fee')
  .commandDir('../cmds')
  .demandCommand()
  .example('fee debug -c debug.js -p 3333')
  .help('h').argv;