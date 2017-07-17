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
    var obj = {name:'vue'};
    Object.defineProperty(obj, 'name', {
//        value: 'test',
        set: function () {
            console.log(this);
        },
        get: function () {
            console.log(this);
        }
    })

//var book={
////    _year : 2004,
//    edition:1
//};
//Object.defineProperty(book,"year",{
//    get: function(){
//        console.log(this._year);
//        return this._year;
//    },
//    set : function(newValue){
//        if (newValue > 2004){
//            this._year = newValue;
//            this.edition += newValue -2004;
//        }
//        console.log( this.edition);
//    }
//});
//book.year =2005;
</script>

</html>
