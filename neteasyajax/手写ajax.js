/**
 * Created by Administrator on 2016/5/8.
 */
function ajax("url","suf","faf"){
    if(window.XMLHttpRequest)
    {
        ajax=HttpRequest;
    }
    else{
        ajax=ActiveXObjext(Microsoft.HttpRequest);
    }
}
ajax.open("get","url","true");
ajax.send();
if(ajax.readyState==4){
    if(ajax.status==200){
        suf;
    }
    else{
       fal
    }
}