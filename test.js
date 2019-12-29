// const util = require('util');
// const exec = util.promisify(require('child_process').exec);

// async function ls() {
//     const { stdout, stderr } = await exec('adb devices');
//     console.log('stdout:', stdout);
//     console.log('stderr:', stderr);
// }
// ls();

var person1 = {
    name: 'hai'
}

var person2 = {
    name: 'ngôn'
}

console.log('test1:', person1.test)

const { test: showTest = '' } = person2;

console.log('test2:', showTest);
