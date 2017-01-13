<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            position: relative;
            width: 20px;
            height: 20px;
            background-color: green;
        }
    </style>
</head>
<body style="width: 2500px;height:6000px">
<textarea id="text">

</textarea>
<button id="bt">test</button>

<script>
    document.getElementById("text").addEventListener("keyup", function (event) {
        if (event.keyCode == 13 && event.ctrlKey) {
            console.log(123);
        }
        ;
    })


</script>
</body>
</html>
