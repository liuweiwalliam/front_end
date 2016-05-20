/**
 * Created by walliam on 2016/3/22.
统计函数看谁耗时最长 */
function test(){
    alert('2');
    //var end=date;
    //console.log(end-start);
}
Function.prototype.before=function(fn){
var _self=this;
    fn();
    _self.apply(this.arguments);
};
Function.prototype.after=function(fn){

}
test.before (function(){
    alert('1');
});