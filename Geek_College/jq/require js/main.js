define(['require','index'],function(require){
 require(['index','test'],function(index,test){
    console.log(index);
    console.log(test);
});
});