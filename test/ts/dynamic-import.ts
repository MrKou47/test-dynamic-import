const Who = function () {
  const personPromise = import('./should-be-import');
  personPromise.then(res => {
    console.log(res);
  })
}
