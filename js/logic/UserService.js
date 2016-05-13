define(['./UserModel', 'jquery'], function(User, $) {
    'use strict';

    var service = {};

    service.fetchUsers = function() {
        return $.ajax({
            url: '/mock/users.json',
            method: 'GET',
            dataType: 'json',
            converters: {
                'text json': function(raw) {
                    var data = JSON.parse(raw);
                    var users = data.map(function(d) {
                        var user = new User();
                        user.set('name', d.name);
                        user.set('age', d.age);
                        return user;
                    });
                    return users;
                }
            }
        });
    };

    return service;

});