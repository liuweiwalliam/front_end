<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<div></div>
</body>
<script>
    var str='';
    for(var i = 1;i<100;i++){
        str+=    '<h2></h2> <p id='+i+'></p>';
    }
    document.getElementsByTagName('body')[0].innerHTML = str;
</script>
</html>
