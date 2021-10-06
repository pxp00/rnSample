export default function Foo(){
  //console.log(" protoType ----->");
  let a = "hb_gh";
  this.objMtd = function(){}  // obj's mtd
  globalMtd2 = function(){}  // global mtd(please don't use)
  var p1 = 1;  // local var
  let p2 = 2;  // local var
}

Foo.prototype.protoMtd = function(){}  // prototype(obj)'s mtd

Foo.conMtd = function(){}  // constructor's mtd  static mtd

const foo = new Foo();  // foo, new Foo()
console.log("Foo = ", Foo); // func
console.log("Foo() = ", Foo());  // undefine
console.log("foo = ", foo);  // {} instant 

console.log("foo.__proto__ =", foo.__proto__); // foo.proto = Foo.protoType
console.log("Foo.prototype =", Foo.prototype);

console.log("Foo.prototype.constructor = ", Foo.prototype.constructor);
console.log("Foo.prototype.__proto__ = ", Foo.prototype.__proto__);
console.log("Foo.__proto__ =", Foo.__proto__);

// foo.proto -> Foo.prototype  Foo.prototype.proto -> Object.prototype, Object.prototype.proto -> null
// Foo.proto -> Func.prototype(func be constructed by Function),  Func.prototype.proto -> Object.prototype, 

/*
  1. foo(obj), Foo(func), Foo.prototype(obj)
  2. proto, prototype, constructor  // proto is a pointer, point to prototype
  3. all obj exist proto (func is object too, it be constructed by Function), only func exist prototype(constructor, proto) 

  *** foo = new Foo(); foo.constructor == Foo ?  // foo extends mtds of Foo.prototype
  =>
  ** foo.proto == Foo.prototype  // proto is a pointer
  ** Foo.prototype.constructor == Foo

  *****
  function Foo(){
    this.objMtd = function()=>{}
  }
  Foo.prototype.protoMtd = function() => {}
  Foo.conMtd = function() => {}
  *****


  foo.proto == Foo.prototype
  Foo.prototype.proto  == Object.prototype
  Object.prototype.proto  == null
*/


/*
  1. Foo.prototype(obj),  Object(func), Object.prototype(obj)

  Foo.prototype = new Object() // create object
  
  Foo.prototype.proto == Object.prototype
  Object.prototype.constructor == Object
  => Foo.prototype.constructor == Object ? // x Foo  // use orgObj's mtd,  then search proto's mtds
*/


/*
  1. Foo(obj,func), Function(func), Function.prototype(obj)
  
  Foo = new Function() // create function

  Foo.proto == Function.prototype
  Function.prototype.constructor == Function
  => Foo.constructor == Function
  
  // all obj exist proto inlcude func, only func exist prototype(constructor, proto) 
  Foo.proto == Function.prototype
  Function.prototype.proto = Object.prototype
  Object.prototype.proto  == null
*/


/* 
  Foo.prototype include(constructor, proto)
  Foo.prototype.constructor == Foo
  Foo.proto  == Function.prototype
  Function.prototype.proto = Object.prototype
*/


/* 
  foo.proto == Foo.prototype, include(constructor, proto) 
  Foo.prototype.proto == Object.prototype
  Oject.prototype.proto == null 

  foo.proto.proto.proto = null
*/

