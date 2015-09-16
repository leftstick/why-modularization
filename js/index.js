'use strict';

import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import _ from 'lodash';
import UserService from './logic/UserService';
import usersTpl from './logic/usersTpl.html';

setTimeout(function() {
    UserService.fetchUsers(Math.random() * 100)
        .done(function(users) {
            var html = _.template(usersTpl)({users: users});
            $('.usersList').empty();
            $('.usersList').append(html);
            $('#info').toggleClass('alert-warning').toggleClass('alert-success').html('User List loaded');
        });
}, 1000);
