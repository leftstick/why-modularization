define([
    'bootstrap/dist/css/bootstrap.css',
    'jquery',
    'lodash',
    './logic/UserService',
    './logic/usersTpl.html'
], function(css, $, _, UserService, usersTpl) {
    'use strict';

    setTimeout(function() {
        UserService.fetchUsers(Math.random() * 100)
            .done(function(users) {
                var html = _.template(usersTpl)({users: users});
                $('.usersList').empty();
                $('.usersList').append(html);
                $('#info').toggleClass('alert-warning').toggleClass('alert-success').html('User List loaded');
            });
    }, 1000);
});
