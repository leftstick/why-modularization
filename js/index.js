'use strict';

require('bootstrap/dist/css/bootstrap.css');
var $ = require('jquery');
var _ = require('lodash');
var UserService = require('./logic/UserService');
var usersTpl = require('./logic/usersTpl.html');

setTimeout(function() {
    UserService.fetchUsers(Math.random() * 100)
        .done(function(users) {
            var html = _.template(usersTpl)({users: users});
            $('.usersList').empty();
            $('.usersList').append(html);
            $('#info').toggleClass('alert-warning').toggleClass('alert-success').html('User List loaded');
        });
}, 1000);
