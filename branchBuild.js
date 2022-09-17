const { exec } = require('child_process');
const fs = require('fs');

/**
 * Build the ts source base if installing from a branch
 */
if (fs.existsSync('./src')) {
  console.log('Compiling code...');
  exec('npm run build');
}
