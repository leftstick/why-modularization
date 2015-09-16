'use strict';

var User = function() {
    this.data = {};
};

User.prototype.set = function(key, value) {
    this.data[key] = value;
};

User.prototype.get = function(key) {
    return this.data[key];
};

User.prototype.toString = function() {
    return JSON.stringify(this.data);
};

export default User;
