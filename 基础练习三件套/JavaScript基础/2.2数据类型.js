// typeof运算符,用来检测一个变量的类型
var a = "abcde";
var b = "哈哈哈";
var c = "123";
var d = 'hhhh';
var e = "";

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);


// 获取字符串的长度 length属性。
var str1 = '111';
var str2 = '2222222';

var str3 = 'qianguyihao';
var str4 = 'qianguyihao,keep movig';

console.log(str1.length);
console.log(str2.length);
console.log(str3.length);
console.log(str4.length);

// 模板字符串中可以换行
const result = {
    name: `qianguyihao`,
    age: 28,
    sex: '男',
}

const html = `
<div>
    <span>${result.name}</span>
    <span>${result.age}</span>
    <span>${result.sex}</span>
<div>
`;
console.log(html);

// 模板字符串中可以调用函数
function getName() {
    return 'shuchu';
}

console.log(`www.${getName()}.com`);


// 模板字符串支持嵌套使用
