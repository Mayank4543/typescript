var options = 'active';
var ravi = {
    name: "ravi",
    age: 19,
    course: "bca"
};
function getData(key) {
    return ravi[key];
}
console.log(getData('name'));
