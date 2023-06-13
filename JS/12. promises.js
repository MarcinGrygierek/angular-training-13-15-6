const prms = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(Math.random() > 0.5) {
      resolve('SUKCES');
    } else {
      reject('ERROR');
    }
  }, 2000);
})

prms
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });