'use strict';

import 'bootstrap/dist/css/bootstrap.css';
import Header from './logic/Header';
import Content from './logic/Content';
import Footer from './logic/Footer';

console.log('document loaded');
Header.create();
Content.create();
Footer.create();
console.log('everything loaded');
