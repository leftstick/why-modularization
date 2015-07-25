define([
    'bootstrap/dist/css/bootstrap.css',
    './logic/Header',
    './logic/Content',
    './logic/Footer'
], function(css, Header, Content, Footer) {
    'use strict';

    console.log('document loaded');
    Header.create();
    Content.create();
    Footer.create();
    console.log('everything loaded');
});
