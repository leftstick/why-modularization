'use strict';

import tpl from '../../template/Header.html';
import $ from 'jquery';

var Header = {};

Header.create = () => {
    $('body').append(tpl);
};

export default Header;
