var t = "abc";

function test(){
    console.log(t);
    var t = "def";
    console.log(t);
}

/* ==================

Internally Javascript transforms the above code to this:-

function test(){
    var t;
    console.log(t);
    t = "def";
    console.log(t);
}

so it runs around to give output like this:-

undefined
def

=====================
The conecpt covers 2-3 core things

1. Hoisting
2. var is function scoped
3. let is block scoped
=====================

*/

test();

let d = "abcd";

function tested(){
    //console.log(d);// this gives error
    let d = "efgh";
    console.log(d);
}

tested();

function f() {
    {
        let x = 1;
        console.log(y);
        var y =2;
        console.log(x);
    }
    console.log(y);
    //console.log(x);
}

f();

function tm(time, message){
    if(typeof time == "number") {
        setTimeout(() => console.log(`received ${message}`) , time);
    }else {
        throw new Error("time not provided");
    }
}

function f1(message) {
    tm(100,message);
}

function f2(callback) {
    tm(200, "f2");
    callback();
}

f2(()=>{
    tm(300, 'arrow')
});
