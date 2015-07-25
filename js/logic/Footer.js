'use strict';
import tpl from '../../template/Footer.html';
import $ from 'jquery';

var Footer = {};

Footer.create = () => {
    $('body').append(tpl);
};

export default Footer;
