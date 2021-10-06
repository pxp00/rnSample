


// const setDelay = (millisecond) => {
//   return new Promise((resolve, reject)=>{
//       if (typeof millisecond != 'number') reject(new Error('参数必须是number类型'));
//       setTimeout(()=> {
//         resolve(`我延迟了${millisecond}毫秒后输出的`)
//       }, millisecond)
//   })
// }

// timestamp = (tag) => {
//   console.log(`=== ${tag} === `);
//   var timestamp = new Date()
//   console.log("timeStamp = ", timestamp);
//   var timestamp3 = new Date().getTime();
//   console.log("timeStamp3 = ", timestamp3);
//   var timestamp4 = new Date(timestamp3);//直接用 new Date(时间戳) 格式转化获得当前时间
//   console.log(timestamp4);
//   console.log("==========" + timestamp4.toLocaleDateString().replace(/\//g, "-") + " " + timestamp4.toTimeString().substr(0, 8)); //再利用拼接正则等手段转化为yyyy-MM-dd hh:mm:ss 格式
// }

// onPress0 = () => {
//   timestamp("onPress1 ==>>");
//   setDelay(3*1000).then((res) =>{
//     timestamp("onPress1 <<==");
//     console.log("Promise output = ", res);
//   }).catch((err) => {console.log("err -> ", err);})
// }

// let wake = (time) => {
//   return new Promise((resolve, reject) => {
//     console.log("==> wake: ", time);
//     setTimeout(() => {
//       console.log("==> finish ", time);
//       resolve(`${time / 1000}秒后醒来`)
//     }, time)
//   })
// }

// let onPress = () => {
//   let p1 = wake(3000)
//   let p2 = wake(2000)
  
//   setTimeout(()=>{
//     console.log("run promise.all");
//     Promise.all([p1, p2]).then((result) => {
//       console.log(result)       // [ '3秒后醒来', '2秒后醒来' ]
//     }).catch((error) => {
//       console.log(error)
//     })
//   }, 5*1000);
// }

// onPromise = async () => {
//   // Promise 
//   const res = await new Promise((resolve, reject)=>{
//     let millisecond = 3*1000;
//     console.log("onPress1, run promise");
//     setTimeout(()=> {
//       console.log("onPress1, timeout");
//       resolve(`我延迟了${millisecond}毫秒后输出的`)
//     }, millisecond)
//   })
  
//   console.log("onPress1 res = ", res);
// }

const onPromiseAll = () => {
  const p1 = new Promise((resolve, reject) => {
    resolve('hello');
  }) 
  .then(result => result)
  .catch(e => e);
  

  // p2 be catched then return Promise.resolve
  const p2 = new Promise((resolve, reject) => {
    throw new Error('报错了');
  })
  .then(result => result)
  .catch(e => e);
  
  Promise.all([p1, p2])
  .then(result => console.log(result))
  .catch(e => console.log(e));
}

export default onPromiseAll;