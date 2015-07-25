'use strict';
import tpl from '../../template/Content.html';
import $ from 'jquery';

var Content = {};

Content.create = () => {
    $('body').append(tpl);
};

export default Content;
