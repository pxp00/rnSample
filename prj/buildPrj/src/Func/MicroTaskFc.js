 
 const onMicroTask = ()=>{
  // 3
  setTimeout(() => {
    console.log('我是第一个宏任务');
    Promise.resolve().then(() => {
        console.log('我是第一个宏任务里的第一个微任务');
    });
    Promise.resolve().then(() => {
        console.log('我是第一个宏任务里的第二个微任务');
    });
  }, 0);

  // macroTask
  setTimeout(() => {
      console.log('我是第二个宏任务');
  }, 0);

  // microTask
  /* 
    Promise.resolve("hello") 
    
    new Promise(resolve => {resolve("hello")})
    */ 
  Promise.resolve().then(() => {
      console.log('我是第一个微任务');
  });

  // syncTask
  // 1
  console.log('执行同步任务');
};

export default onMicroTask;