function register(cb) {
    setTimeout(() => {
        console.log("register end");
        cb();
    }, 4000);
}

function sendemail(cb) {
    setTimeout(() => {
        console.log("email end");
        cb();
    }, 1000);
}

function login(cb) {
    setTimeout(() => {
        console.log("login end");
        cb();
    }, 2000);
}

function getData(cb) {
    setTimeout(() => {
        console.log("data end");
        cb();
    }, 1000);
}

function displayData(cb) {
    setTimeout(() => {
        console.log("display end");
        cb();
    }, 2000);
}

//callback hell
register(() => {
    sendemail(() => {
        login(() => {
            getData(() => {
                displayData(() => {
                    console.log("other Application");
                });
            });
        });
    });
});
