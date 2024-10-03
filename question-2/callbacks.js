function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(function() {
            let success = { message: 'delayed success!' };
            resolve(success);
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            let error = { error: 'delayed exception!' };
            reject(error);
        }, 500);
    });
}

resolvedPromise().then(function(result) {
    console.log(result);
});

rejectedPromise().catch(function(error) {
    console.log(error);
});
