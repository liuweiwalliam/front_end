/**
 * Created by walliam on 2017/7/4.
 */
let member = {"a": "aa", "b": "bb"};
function world() {
    for (var key in member) {
        console.log(member[key]);
    }
};
module.exports = {
    member: member,
    world: world
}
