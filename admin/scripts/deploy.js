const { execSync } = require('child_process')

execSync('rimraf dist', { stdio: 'inherit'})

const { SITE_ID } = process.env
/*
switch (SITE_ID) {
  case '@blocksley/blocksley-demo':
    execSync('yarn workspace @blocksley/blocksley-demo deploy', { stdio: 'inherit'})
    break;
  case '@blogsley/blogsley':
    execSync('yarn workspace @blogsley/blogsley deploy', { stdio: 'inherit'})
    break;  
}
*/

execSync('yarn workspace @blogsley/blogsley deploy', { stdio: 'inherit'})