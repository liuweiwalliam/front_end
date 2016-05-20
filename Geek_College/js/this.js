/**
 * Created by walliam on 2016/3/13.
 */
//   this.m=100;
//   function test(){
//    alert(this.m);
//}
//    window.test();
var obj={
    m:100;
test:function(){
    return function(){
        alert(this.m);
    }

    alert(this.m);
}
}
obj.test() ;