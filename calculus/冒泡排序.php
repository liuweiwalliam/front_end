<?php
/**
 * Created by IntelliJ IDEA.
 * User: walliam
 * Date: 2016/11/24
 * Time: 14:41
 */
?>
<script>
    //冒泡排序
function pop_sort(a,b,c,d,e,f,g){
var _length = arguments.length;
    var arr = arguments;
    function sort (arr) {
      for(var i= 0; i<=_length;i++){
          if(arr[i]>arr[i+1]){
              var container =arr[i];
              arr[i] = arr[i+1];
              arr[i+1] = container;
          }else{}
      }
      return arr;
    };
    for(var i=0;i<arr.length;i++ ){
        arr = sort(arr);
    };
    console.log(arr);
};
pop_sort(15,5,54,547,544,5);
</script>