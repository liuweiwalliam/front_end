/**
 * Created by walliam on 2016/12/7.
 */
require.config({
    paths: {
        'jq':"../lib/js/jquery-2.2.3",
        'main': "../lib/js/main"
    }
});
require(['jq', 'main'], function (jq ,main) {
console.log(main.add(1,2));
})
