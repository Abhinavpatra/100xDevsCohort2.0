"use strict";
function delayCall(fn) {
    setTimeout(fn, 1000);
}
delayCall(function () {
    console.log("hello after 1 sec");
});
delayCall(function () {
    console.log("hello after 2 sec");
});
