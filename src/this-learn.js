console.log("outer -> "+this);

function f() {
    console.log("f -> ",this);
}

f();
