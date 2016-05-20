/**
 * Created by walliam on 2016/3/20.
 */
function person(name){
    var _this={};
    _this._name=name;
    _this.sayhello=function(){
        alert('hello'+this._name);
    }
    return _this;

}
function teacher(name){
    var _this=person(name);
    var surpersay=_this.sayhello;
    _this.sayhello=function(){
        surpersay.call(_this);
     alert("thello"+this._name);
    }
    return _this;
}
var t=teacher('iven');
t.sayhello();