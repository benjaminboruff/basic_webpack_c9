if (module.hot) {
  module.hot.accept();
}

import dogs from './js/dogs';
import './css/style.scss';
import $ from 'jquery';

 $('body').html("");
 
 $('<h1>Dogs</h1>').appendTo('body');
 const ul = $('<ul></ul>').appendTo('body');
 for (const dog of dogs) {
     $('<li></li>').text(dog).appendTo(ul);
 }

console.log('Duder');
