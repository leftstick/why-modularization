define(['../../template/Content.html', 'jquery'], function(tpl, $) {
    'use strict';

    var Content = {};

    Content.create = function() {
        $('body').append(tpl);
    };

    return Content;
});
