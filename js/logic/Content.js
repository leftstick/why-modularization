'use strict';
var tpl = require('../../template/Content.html');
var $ = require('jquery');

var Content = {};

Content.create = function() {
    $('body').append(tpl);
};

module.exports = Content;
