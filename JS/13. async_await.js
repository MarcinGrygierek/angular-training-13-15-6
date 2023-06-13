const handle = async (id) => {
  const prms = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('SUKCES' + id);
      } else {
        reject('ERROR' + id);
      }
    }, Math.round(Math.random() * 5000));
  })

  try {
    const result = await prms;
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

const run = async () => {
  console.log('PRZED BEZ AWAIT');
  handle('BEZ');
  console.log('PO BEZ AWAIT');

  console.log('PRZED Z AWAIT');
  await handle('Z');
  console.log('PO Z AWAIT');
}

run();