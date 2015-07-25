'use strict';

require('bootstrap/dist/css/bootstrap.css');
var Header = require('./logic/Header');
var Content = require('./logic/Content');
var Footer = require('./logic/Footer');

console.log('document loaded');
Header.create();
Content.create();
Footer.create();
console.log('everything loaded');
