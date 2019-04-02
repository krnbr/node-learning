let obj = {
    a: 1
};

let test = function(b, c, d){
    return this.a + b + c + d;
};

let test2 = (b, c, d) => {
    return b + c + d;
};

console.log(test.call(obj,3, 4, 5));

console.log(test.apply(obj,[3, 2, 1]));

console.log(test2.call(null,1,2,3));

// apply -> applies context of thisArgArray of array type to supplies thisArg

// apply -> applies context of thisArgArray of var arg type to supplies thisArg

let test3 = function(b,c,d){
    return this.a + b + c + d;
};

let bound = test3.bind(obj);

console.log(bound(2,3,4));
