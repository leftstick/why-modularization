define(['../../template/Header.html', 'jquery'], function(tpl, $) {
    'use strict';

    var Header = {};

    Header.create = function() {
        $('body').append(tpl);
    };

    return Header;
});
