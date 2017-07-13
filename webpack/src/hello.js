/**
 * Created by walliam on 2017/6/30.
 */
var mem = require('./world.js');
require('style-loader!css-loader!./css/css.css');//
function hello() {
    console.log('hello');
}
hello();
if(mem){
    console.log(mem);
}