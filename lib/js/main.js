/**
 * Created by walliam on 2016/12/12.
 */
define(['jq'],
    function () {
    console.log($);
        var add = function (x, y) {
            return x + y;
        };
        return {add:add}
    }
);
