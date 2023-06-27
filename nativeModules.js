// Requiring Native (Core) Modules Tutorial
// Node comes with many core APIs (https://nodejs.org/dist/latest-v18.x/docs/api/)
// However, some the APIs may not be global and would require us to 'export it'

// E.g. If we want to use utilities, 
var util = require('util'); // dont need dot slash <- as it is a core module. So if we don't need dot slash, most likely it is a core module.
// var util = require('/util')  // if we have modules with the same name as the core modules, it will still be differentiable by it's path ('/...') 
// However, this is obviously not recommended as it may lead to confusion between your own module vs core module. 

// Examples of util being used 
var name = 'Clare';
var greeting = util.format('Hello, %s', name);
util.log(greeting);

