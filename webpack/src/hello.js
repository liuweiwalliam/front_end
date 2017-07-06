/**
 * Created by walliam on 2017/6/30.
 */
var mem = require('./world');
require('./css/css.css');//style-loader!css-loader!
function hello() {
    console.log('hello');
}
hello();
if(mem){
    console.log('bbbbb');
}