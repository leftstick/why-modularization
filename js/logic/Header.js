'use strict';

var tpl = require('../../template/Header.html');
var $ = require('jquery');

var Header = {};

Header.create = function() {
    $('body').append(tpl);
};

module.exports = Header;
