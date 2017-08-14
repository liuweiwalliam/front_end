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
<script>
  var arr = [1, 2, 3]
  arr.forEach(function (val, index) {
    if (val != 2) {
      arr.splice(index, 1)
    }
  })
    console.log(arr);
</script>
</body>
</html>