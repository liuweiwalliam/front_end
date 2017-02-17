var inner = "aaa";
// export var outer = "bb";
var a = 1, b = 2, c = 3;
function test() {
    console.log(123);
};
// export function test2() {
//     console.log(456);
// };
export {a, b, test};
// export {
//     a as v1,
//     b as v2,
// }
