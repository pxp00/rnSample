/*
  1. var和let都是变量，var因为没有块级作用域的概念，所以它会有提升机制; 而let有块级作用域所以并不存在提升机制;
  2. const 类似于let有块级作用域， 指向一个内存空间（我理解为仓库），这个仓库里面你放的东西你可以修改他们，但是这个仓库独此一份，不可以修改仓库的名字。

  a. var定义的变量，没有块的概念，可以跨块访问,可以提升, 不能跨函数访问。 // if & for 为块级作用域
  b. let定义的变量，只能在块作用域里访问，不能跨块访问，不能提升，也不能跨函数访问。
  c. const用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，而且不能修改。
*/

const func0 = () => {
  
  // 通过var定义的变量可以跨块作用域访问到----------------
  {
    var a = 1;
    console.log(a); // 1
  }
  console.log(a); // 1
 

  // 通过var定义的变量不能跨函数作用域访问到------------------
  (function A() {
      console.log(b); // undefine, var 可以提升声明，不能提升定义
      var b = 2;
  })();
  // console.log(b); // 报错，


  // if语句和for语句中用var定义的变量可以在外面访问到，----------------
  // 可见，if语句和for语句属于块作用域，不属于函数作用域。
  if(true) {
      var c = 3;
  }
  console.log(c); // 3
  for(var i = 0; i < 4; i ++) {
      var d = 5;
  };
  console.log(i); // 4   (循环结束i已经是4，所以此处i为4)
  console.log(d); // 5
  
}



const func = () => {
  
  // 块作用域-----------------
  {
    var a = 1;
    let b = 2;
    const c = 3;
    // c = 4; // 报错
    var aa;
    let bb;
    // const cc; // 报错
    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3
    console.log(aa); // undefined
    console.log(bb); // undefined
  }
  console.log(a); // 1
  // console.log(b); // 报错
  // console.log(c); // 报错



  // 函数作用域-----------------
  (function A() {
    var d = 5;
    let e = 6;
    const f = 7;
    console.log(d); // 5
    console.log(e); // 6  
    console.log(f); // 7 

  })();
  // console.log(d); // 报错
  // console.log(e); // 报错
  // console.log(f); // 报错
}



//hell未声明过，Uncaught ReferenceError: b is not defined --------------
//console.log(hell);


// 如果在声明变量时，省略 var 的话，该变量就会变成全局变量 --------------
var a = 1; //此处声明的变量a为全局变量
function foo(){
   a = 2;//此处的变量a也是全局变量
   console.log(a);//2
}
foo();
console.log(a);//2

export default null;
