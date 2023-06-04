// Variables

let a: number;

// a = 'hello' ERROR
// a = false ERROR
a = 200;

let b: number | string | Date;

b = 200;
// b = false ERROR
b = 'true'
b = new Date();

let c: any;

c = true;
c = 'hello';
c = 145;

let f;

f = 'hello'
f = 250;


// -------------------------------

function func(age: number, name: string) {
    console.log(name + ' is ' + age + ' years old')
}

func(34, 'Yossi');

function func2() {
    console.log('Another function')
}
