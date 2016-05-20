/**
 * Created by walliam on 2016/3/20.
 */
function people(name){
    people.prototype.say=function(){
        //alert("peo-hello"+this._name);
        this._name=name;
    }
}
function student(name){
    this._name=name;
}
student.prototype=new people();
var supersay=student.prototype.say;
student.prototype.say=function(){
    supersay.call(this);
    //alert("stu-hello"+this._name);
}
  var s = new student('iven') ;
   //alert();
  s.say()