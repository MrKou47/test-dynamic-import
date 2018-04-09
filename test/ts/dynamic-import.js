var Who = function () {
    const url = './should-be-import';
    var personPromise = Promise.resolve().then(function () { return require(url); });
    personPromise.then(function (res) {
        console.log(res);
    });
};
