// type personinfo = [string, number, boolean]
var driver = function (person) {
    var name = person[0], age = person[1], hasdrive = person[2];
    console.log("".concat(name, " is ").concat(age, " years old. Does ").concat(name, " have a driver's license? ").concat(hasdrive ? "Yes" : "No"));
};
var person1 = ["Mayank", 23, true];
driver(person1);
