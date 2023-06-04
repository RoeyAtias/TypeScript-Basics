// Variables
var a;
// a = 'hello' ERROR
// a = false ERROR
a = 200;
var b;
b = 200;
// b = false ERROR
b = 'true';
b = new Date();
var c;
c = true;
c = 'hello';
c = 145;
var f;
f = 'hello';
f = 250;
// -------------------------------
function func(age, name) {
    console.log(name + ' is ' + age + ' years old');
}
func(34, 'Yossi');
