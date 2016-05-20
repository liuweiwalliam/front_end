/**
 * Created by Administrator on 2016/5/7.
 */
function ajax(url,suc,fal){
    if(window.XMLHttpRequest()){
        var ajax = XMLHttpRequest;
    }
    else{
        var ajax=ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.open("get", "url","true");
    ajax.send();
    ajax.onstatechange=function(){
        if(ajax.readyState==4){
            if(ajax.status==200){
                // 成功后执行的动作
                
            }
            else{
                // 失败后执行的动作
                
            }
        }
    }
}