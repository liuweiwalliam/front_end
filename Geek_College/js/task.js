/**
 * Created by walliam on 2016/3/16.
 */
onmessage=function(event){
    var num=event.date;
    var result=0;
    for(var i=0;i<num;i++){
        result+=i;
    }
post.message(result);
}