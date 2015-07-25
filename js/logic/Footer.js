'use strict';
var tpl = require('../../template/Footer.html');
var $ = require('jquery');

var Footer = {};

Footer.create = function() {
    $('body').append(tpl);
};

module.exports = Footer;
