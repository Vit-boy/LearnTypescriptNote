function echo(arg) {
    return arg;
}
var result = echo(true);
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var result2 = swap(['string', 123]);
// 约束型
function echoWithArr(arg) {
    console.log(arg.length);
    return arg;
}
var arrs = echoWithArr([1, 2, 3]);
function echoWithLength(arg) {
    console.log(arg.length);
    return arg;
}
var str = echoWithLength('srr');
var obj = echoWithLength({ length: 10 });
var arr2 = echoWithLength([1, 2, 3]);
