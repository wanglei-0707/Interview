var str = '我是{name}, 我的工作是{job}';
var obj = {
    name: 'xxx',
    job: '前端工程师'
};
function tmpl(str, obj){
    var startIndex = 0;
    while(startIndex < str.length){
        var startIndex = str.indexOf('{', startIndex);
        if(startIndex === -1){
            return str;
        }
        var endIndex = str.indexOf('}', startIndex);
        var attr = str.slice(startIndex+1, endIndex);
        if(endIndex === str.length - 1){
            return str.replace(str.slice(startIndex), obj[attr]);
        }
        str = str.replace(str.slice(startIndex, endIndex+1), obj[attr]);
    }
}
console.log(tmpl(str, obj));
console.log(tmpl(str, obj) === '我是xxx, 我的工作是前端工程师');
