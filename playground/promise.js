var asyncAdd = (a,b) =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
      }else{
        reject('Arguments must be numbers');
      }
    },100);
  });
};

// asyncAdd(5,7).then((resolve) => {
//     console.log('Result: ' ,resolve);
//   return asyncAdd(resolve, '33');
//   }, (errorMssage) =>{
//     console.log(errorMessage);
//   }). then((resolve)=>{
//     console.log('Should be 45: ' ,resolve);
//   },(errorMessage)=>{
//     console.log(errorMessage);
//   });

asyncAdd(5,7).then((resolve) => {
    console.log('Result: ' ,resolve);
  return asyncAdd(resolve, '33');
  }). then((resolve)=>{
    console.log('Should be 45: ' ,resolve);
  }).catch((errorMessage) =>{
    console.log('Catch Error ' ,errorMessage);
  });

// var somePromise = new Promise((resolve, reject)=>{
//  setTimeout(() => {
//   // resolve('its resolve');
//    reject('its reject');
//   },2500);
//   //resolve('its resolve');
// });
//
// somePromise.then((message)=>{
//   console.log('success ',message);
// }, (errorMssage)=>{
//   console.log('error ',errorMssage);
// });
