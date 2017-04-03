## 百度
### 一面 3.29
1. 自我介绍
2. 介绍vue，虚拟DOM是在哪个版本提出的(2.0版本)
3. 对标签语义化的理解，列举常用的语义化标签

    1. 即使在没有css的情况下，页面也能呈现出很好的内容结构、代码结构
    2. 提高代码的可读性和维护性，使代码更优雅
    3. 对搜索引擎友好，有了良好的结构和语义网页内容容易被搜索引擎抓取
    4. 方便其他设备解析(屏幕阅读器，盲人阅读器，移动设备)
4. title和alt的属性

    alt只能用于img标签、area标签、type="image"的input标签，用于规定在图像无法显示时的替代文本，title可用于所有标签，用于规定关于元素的额外信息，在鼠标悬停时显示。
5. input设置成只读和最多10个字符怎么写

    readonly | disabled,  maxlength
6. 如何在新页面打开链接
    ```
    <a href="#" target="_blank">aaaaa</a>
    ```    
7. 阻止页面的跳转

    1. 阻止默认行为，```<a href="#" onclick="return false;">aaaaa</a>```
    2. javascript:void(0); ```<a href="javascript:void(0)">aaaaa</a>``` void是js中的关键字，该操作符指定要计算一个表达式但是不返回值。
    3. javascript:;
8. 块级元素和内联元素的区别
9. 元素定位有几种方式
10. 控制元素的显示和隐藏，如果是在IE下，兼容性问题怎么解决

    IE8及以下透明度： filter:alpha(opacity=80)  IE9中filter和opacity两种方式都支持，IE9以上只支持opacity
11. css选择器有哪些，优先级
12. js中有哪些数据类型，算上ES6
13. 变量类型的判断
14. 继承的实现
15. 事件传播的阶段，目标阶段是什么意思
16. AJAX请求是什么东西，怎么实现，返回的数据怎么拿到，responseText是什么类型的数据，用的话怎么解析

    通过contentType指定数据类型，常用的如下：
    1. 普通文本：text/plain
    2. html代码：text/html
    3. xml代码：text/xml
    4. json串：application/json
    5. JavaScript代码：text/javascript
    6. 图片：image/GIF  image/JPEG

    jquery中dataType属性指定需要服务器返回的数据类型，如xml,html,json,jsonp,script,text
17. 常见的http状态码
18. AJAX有什么限制吗，同源是什么概念
19. 跨域的方法
20. 介绍arguments是什么，怎么用，ES6里面优化一个类似的这种东西是什么知道吗

    es6中的rest参数：形式为“...变量名”，用于获取函数的多余参数，这样就不需要arguments对象了，rest参数中的变量是一个数组，该变量将多余的参数放入其中。利用rest参数可以向该函数传入任意数目的参数,rest参数之后不能再有其他参数。
    ```
    function add(...values){
        let sum = 0;
        for(let val of values){
            sum += val;
        }
        return sum;
    }
    add(1,2,3,4); //10
    ```
21. new操作符怎么工作
22. 取小数点后三位
23. 数组去重
24. 扩展操作符...

    扩展运算符...好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列。
    ```
    console.log(...[1, 2, 3]);  //1 2 3
    console.log(1, ...[2, 3, 4], 5) //1 2 3 4 5
    ```
    扩展运算符主要用于函数调用,是一个数组变为参数序列。可以与正常的参数结合使用，非常灵活。
    ```
    function add(x, y){
        return x + y;
    }
    var numbers = [1, 2];
    add(...numbers); //3

    function f(v, w, x, y, z){}
    var args = [0, 1];
    f(-1, ...args, 2, ...[3]);
    ```
25. 动态变换运行时的上下文

    call(), apply(), bind()
26. call和apply的区别
27. 你有什么问题吗

### 一面 -- 阿栋
* 自我介绍
* 说一下学习前端的过程
* 弹出层组件是你自己实现的吗？说一下实现的思路。
* 状态管理你是怎么做的？
* 你还用过node，你是怎么用的？
* 除了用框架，你有写过原生JS吗？
* ES6熟悉吗？
* img的title属性和alt属性的区别
* 如何在新页面打开链接
* input设置成只读和最多20个字符。
* 转义字符
* 怎么理解盒模型，分两种知道是哪两种吗？有什么区别？
* 有哪些css选择器以及优先级
* 内联元素和块级元素的区别。内联元素可以设置宽高大小吗？
* 说一下兼容性
* 清除浮动
* 固定宽高的元素让它水平垂直居中。
* absolute和fixed的区别
* 如何声明变量
* 有哪些变量类型
* 怎么判断变量类型
* 原生JS怎么实现继承
* 介绍ajax。怎么实现的？
* 发一个ajax请求的步骤。代码有哪些方法。服务器响应怎么拿到数据？
* JS的事件
* 事件的传播分哪几个阶段？
* 跨域是怎么发生的？怎么跨域
* 数组去重
* new操作符做了什么事情
* 你有什么问题问我吗？
