/**
 * Created by walliam on 2016/3/20.
 */
//var person={
//    name:"iven",
//    age:'30',
//    eat:function(){
//        alert('he can eat')
//    }
//}
//person.height=100;
//alert(person);
function person(){

}
person.prototype={
    name:'ive',
    age:'30',
    eat:function(){
        alert('i can eat')
    }
}
var p= new person();
console.log(p.age);
