/**
 * Load externals.
 * 
 * `onload` conflicts mean we have to
 * fire the event multiple times and
 * delete afterwards.
 */

require('./test1.js');
window.dispatchEvent(new window.Event('load'));
delete window.onload;

require('./test2.js');
window.dispatchEvent(new window.Event('load'));
delete window.onload;

// load event

console.log(document.head.outerHTML);
console.log("jQuery:", window.$);