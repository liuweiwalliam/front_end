<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
    <meta charset="utf-8"/>
    <title>tittle</title>
    <script type="text/javascript" src="jquery-2.2.3.js"></script>
    <style>
    </style>
</head>
<body>

</body>
<script>
    var pointer1 = 0,
        pointer2 = 0,
        pointer3 = 0;
    function creat_arr(num) {
        var line = [];
        for (var i = 0; i < num; i++) {
            line[i] = [i, i + 1];
        }
        ;
        line[num - 1][1] = 0;
        return line;
    }
    ;

    function loop(arr) {
        console.log(arr[0][arr[1] + 1]);
        console.log(arr[0][arr[1] + 2]);
        pointer1 = arr[0][arr[1]][1];//指向第二个20
        pointer2 = arr[0][pointer1][1];//指向第三个
        var del_result = del_item(arr[0], pointer2);
        return del_result;
    }
    ;
    function del_item(arr, point) {
//        console.log(point);
        var _arr = [];
        for (var i = 0; i < point; i++) {
            _arr.push(arr[i]);
        }
        ;
        for (var i = point + 1; i < arr.length; i++) {
            arr[i][1] = arr[i][1] - 1;
            _arr.push(arr[i]);
        }
        ;
        var _lenght = _arr.length;
        _arr[_lenght - 1][1] = 0;
        return [_arr, point]
    }
    ;
    var n_arr = creat_arr(41);
    var a = [n_arr, 0];
    //    console.log(a[0]);
    //    console.log(n_arr);
    while (a[0].length > 2) {
        a = loop(a);
    }
    ;
    console.log(a);


</script>
</html>