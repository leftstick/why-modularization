define(['../../template/Footer.html', 'jquery'], function(tpl, $) {
    'use strict';

    var Footer = {};

    Footer.create = function() {
        $('body').append(tpl);
    };

    return Footer;
});
