## HTML
1. **HTML5 为什么只需要写 !DOCTYPE HTML？**

    HTML5 不基于 SGML(标准通用标记语言)，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。
2. **Doctype作用？标准模式与兼容模式各有什么区别?**

    !DOCTYPE声明位于位于HTML文档中的第一行，处于html 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。

    标准模式的排版 和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。
3. **页面有一个按钮button id为 button1，通过原生的js如何禁用？**

    A. document.getElementById("button1").readolny=true;      
    B. document.getElementById("button1").setAttribute(“readolny”,”true”);      
    C. document.getElementById("button1").disabled = true;       
    D. document.getElementById("button1").setAttribute(“disabled”,”true”);

    正确答案 : C
4. **http，https默认端口号**

    1. HTTP服务器，默认的端口号为80/tcp；
    2. HTTPS（securely transferring web pages）服务器，默认的端口号为443/tcp 443/udp；
    3. Telnet（不安全的文本传送），默认端口号为23/tcp；
    4. FTP，默认的端口号为21/tcp；
5. **检测页面的兼容模式**

    1. document.compatMode === "CSS1Compat" // 标准模式
    2. document.compatMode === "BackCompat" // 兼容模式
6. **常见的图片格式有哪些，分别在什么情况下使用**
    1. jpg：支持有损压缩，不支持透明，不支持动画，非矢量，色彩还原度比较好，可以支持适当压缩后保持比较好的色彩度。如果颜色很多，建议使用这种图片格式，可以使生成的图片大小比较小而不会使图片看起来很模糊。
    2. jpeg：与jpg类似，支持有陨压缩，不支持透明，不支持动画，非矢量。用一种有损压缩法压缩图片，把人肉眼难以察觉的图象色彩删除，由此来获得比较大的压缩比，所以图片占用空间往往很小，而且“外表”上也看不出有什么差别，但是此格式压缩后的图片无法还原，所以在处理JPEG图片的时候请不要多次反复修改存储，这样的话图象会逐渐恶化。
    3. png：不支持压缩，支持透明、半透明、不透明，不支持动画，非矢量，与GIF格式相似，压缩比高于GIF，能够处理的色数远远多于GIF格式，最大可达280兆色。
    4. gif：支持有陨压缩，不支持全透明，支持半透明，支持动画，非矢量。最大只能够处理256色的图像。其原理也就是把多张图象保存为一个图象从而形成动画，说到底仍然是图片格式（位图）。文件占用空间很小。使用该格式的场景：网页背景、小图标、色彩度低的小切片、动画图片；
7. **清单文件的MIME类型是**

    text/cache-manifest
8. **<img src="url.gif" dynsrc="url.avi">表示尚未完全读入avi文件时，先在AVI播放区域显示该图像，文件下载完成后，图片被屏蔽，显示视频文件。**

## CSS

1. **简述一下src与href的区别**

    href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。

    src是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部的原因。
2. **什么叫优雅降级和渐进增强？**

    渐进增强 progressive enhancement：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。

    优雅降级 graceful degradation：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

    区别：

    a. 优雅降级是从复杂的现状开始，并试图减少用户体验的供给     
    b. 渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要    
    c. 降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带
3. **设置元素浮动后，该元素的display值是多少？**

    自动变成display:block
4. **怎么让Chrome支持小于12px 的文字？**

    -webkit-text-size-adjust:none.这种方法在新版chrome下已经无效。

    可以使用：transform:scale()
5. **如何修改chrome记住密码后自动填充表单的黄色背景 ？**
```
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
}
```

6. **页面导入样式时，使用link和@import有什么区别？**

    1. link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;
    2. 页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
    3. import是CSS2.1 提出的，只在IE5以上才能被识别，而link是XHTML标签，无兼容问题;
    4. import可以还可以在css中再引入其他css文件，但是会增加http请求。import必须在样式表头部最先声明，并且其后的分号是必须的。

7. **介绍一下你对浏览器内核的理解？**

    主要分成两部分：渲染引擎(layout engineer或Rendering Engine)和JS引擎。

    渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。

    JS引擎：解析和执行javascript来实现网页的动态效果。

    最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。
8. **CSS隐藏元素的几种方法（至少说出三种）**

    1. Opacity:元素本身依然占据它自己的位置并对网页的布局起作用。它也将响应用户交互;
    2. Visibility:与 opacity 唯一不同的是它不会响应任何用户交互。此外，元素在读屏软件中也会被隐藏;
    3. Display:display 设为 none 任何对该元素直接打用户交互操作都不可能生效。此外，读屏软件也不会读到元素的内容。这种方式产生的效果就像元素完全不存在;
    4. Position:不会影响布局，能让元素保持可以操作;
    5. Clip-path:clip-path 属性还没有在 IE 或者 Edge 下被完全支持。如果要在你的 clip-path 中使用外部的 SVG 文件，浏览器支持度还要低;
9. **当margin-top、padding-top的值是百分比时，分别是如何计算的？**

    相对最近父级块级元素的width，相对最近父级块级元素的width
10. **CSS选择器，nth-chlid(n)和nth-type(n)区别**

    ele:nth-of-type(n)是指父元素下第n个ele元素,而ele:nth-child(n)是指父元素下第n个元素且这个元素为ele，若不是，则选择失败。

11. **CSS hack**

    CSS Hack大致有3种表现形式，CSS属性前缀法、选择器前缀法以及IE条件注释法（即HTML头部引用if IE）Hack，实际项目中CSS Hack大部分是针对IE浏览器不同版本之间的表现差异而引入的。
    1. 属性前缀法(即类内部Hack)：例如 IE6能识别下划线 "_" 和星号 " * "，IE7能识别星号" * "，但不能识别下划线"_"，IE6~IE10都认识"\9"，但firefox前述三个都不能认识。
    2. 选择器前缀法(即选择器Hack)：例如IE6能识别*html .class{}，IE7能识别*+html .class{}或者*:first-child+html .class{}。
    3. IE条件注释法(即HTML条件注释Hack)：针对所有IE(注：IE10+已经不再支持条件注释)： <!--[if IE]>IE浏览器显示的内容 <![endif]-->，针对IE6及以下版本： <!--[if lt IE 6]>只在IE6-显示的内容 <![endif]-->。这类Hack不仅对CSS生效，对写在判断语句里面的所有代码都会生效。
12. **对内联元素进行float之后算是块级还是内联元素？**

    块级
## JavaScript
1. **简述同步和异步的区别**

    同步是阻塞模式，异步是非阻塞模式。

    同步就是指一个进程在执行某个请求的时候，若该请求需要一段时间才能返回信息，那么这个进程将会一直等待下去，直到收到返回信息才继续执行下去；

    异步是指进程不需要一直等下去，而是继续执行下面的操作，不管其他进程的状态。当有消息返回时系统会通知进程进行处理，这样可以提高执行的效率。
2. **Javascript中callee和caller的作用？**

    caller是返回一个对函数的引用，该函数调用了当前函数；
    functionName.caller //functionName 对象是所执行函数的名称。
    ```
    function callerDemo() {
        if (callerDemo.caller) {
            var a= callerDemo.caller;
            alert(a);//function handleCaller() {callerDemo();}
        } else {
            alert("this is a top function");
        }
    }
    function handleCaller() {
        callerDemo();
    }
    ```
    callee是返回正在被执行的function函数，也就是所指定的function对象的正文。callee 属性是 arguments 对象的一个成员，它表示对函数对象本身的引用，这有利于匿名函数的递归或者保证函数的封装性，

3. **请描述一下cookies，sessionStorage和localStorage的区别**

   sessionStorage用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。而localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。

   web storage和cookie的区别

   Web Storage的概念和cookie相似，区别是它是为了更大容量存储设计的。Cookie的大小是受限的，并且每次你请求一个新的页面的时候Cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域调用。
   除此之外，Web Storage拥有setItem,getItem,removeItem,clear等方法，不像cookie需要前端开发者自己封装setCookie，getCookie。但是Cookie也是不可以或缺的：Cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生。

4. **写一个function，清除字符串前后的空格。（兼容所有浏览器）**
    ```
    function trim(str) {
        if (str & typeof str === "string") {
            return str.replace(/(^s*)|(s*)$/g,""); //去除前后空白符
        }
    }
    ```
5. **输出结果是？**
    ```
    (function(x){   
        delete x;   
        return x;//1   
    })(1);
    ```
    delete操作符只能作用在对象的属性上，对变量和函数名无效。也就是说delete x是没有意义的。delete是不会直接释放内存的，她只是间接的中断对象引用

6. **这是一个名字是g的function expression，然后又被赋值给了变量f。**
    ```
    var f = function g(){ return 23; };   
    typeof g();//报错
    ```

    这里的函数名g和被其赋值的变量f有如下差异：
    1. 函数名g不能变动，而变量f可以被重新赋值
    2. 函数名g只能在函数体内部被使用，试图在函数外部使用g会报错的
7. **在文件/home/somebody/workspace/somemodule.js中第一行引用了一个模块：require(‘othermodule‘)，请问required 的查找模块的顺序**

    A. /home/somebody/workspace/node_modules/othermodule/index.js       
    B. /home/somebody/workspace/node_modules/othermodule. Js       
    C. CORE MODULES named othermodule      
    D. /home/somebody/node_modules/othermodule/index.js

    答案：C B A D

    解析：
    1. 首先，Node在当前目录下查找package.json(CommonJS包规范定义的包描述文件)，通过JSON.parse()解析出包描述对象，从中取出main属性指定的文件名进行定位。如果文件缺少扩展名，将会进入扩展名分析的步骤。 　　
    2. 而如果main属性制定的文件名错误，或者压根没有package.json文件，Node会将index当做默认文件名，然后依次查找index.js、index.node、index.json. 　　
    3. 如果在目录分析的过程中没有定位成功任何文件，则自定义模块进入下一个模块路径进行查找。如果模块路径数组都被遍历完毕，依然没有查找到目标文件，则会抛出查找失败异常。 　　

    按照上面的思路，首先应该查找package.json文件，看看里面有没有核心模块，应该是C最先，othermodule不是核心模块，那么接着应该进入扩展名分析的步骤，就应该是查找othermodule. js，对应B，紧接着就是以index为默认文件名，也就是A，再接下来就是上一个文件目录D了，所以答案是： C B A D
8. **请阅读以下代码：**
    ```
    var obj = {};
    obj.log = console.log;
    obj.log.call(console, this)
    ```
    **该代码在浏览器中执行，输出的日志结果是什么？**

    window
9. **数据类型的转换，强类型转换和弱类型转换有哪些。**

    转换函数：
        1. parseInt(),可提供第二个参数作为转换时使用的基数， parseFloat()，只解析十进制数，十六进制会被转为0.两种方法都会忽略前导0.

    强制类型转换：
        1. Number()可将任意数据类型转换为数值。null->0,undefined->NaN,空字符串->0
        2. Boolean()
        3. String():null->null,undefined->undefined,其他值调用toString()方法转换。
    弱类型转换：
        1. 字符串转数值： +str, str-0
        2. 数值转字符串： 123 + ''
        3. toString()
        4. ==
10. **jquery的$(document).ready()和JavaScript中的window.onload的区别：**
    1. window.onload必须等待网页中所有的内容全部加载完毕（包括图片）才能执行。$(document).ready()只要DOM完全就绪就会被执行，因此可能此时元素的关联文件还未下载完.
    2. window.onload不能同时编写多个，后面的会覆盖前面的。$(document).ready()可以编写多个
    3. window.onload无简写形式。$(document).ready()的简写形式$(function(){})
11. **w3c事件与IE事件的区别**

    w3c标准的事件模型：
    ```
    ele.addEventListener('type', func, false)
    ```
    w3c的事件模型支持冒泡和捕获，一个DOM元素可以绑定多个事件处理器，在处理函数内部，this关键字指向被绑定的DOM元素。处理函数的参数列表中第一个参数永远都是event对象的引用。

    IE事件模型：
    ```
    ele.attachEvent('[on]type', fun);
    ```
    IE事件模型只支持冒泡，不支持捕获，所以没有第三个参数，第一个表示事件类型的参数必须加上‘on’，可以绑定多个事件处理函数，处理函数内部的this关键字永远都指向window这个全局对象。要想获得event对象必须通过window.event方式获得。
## jquery
1. jquery获取父元素

    ```
    <ul class="demo item">
          <li class="item"><a href="" class="link"></a>Buy milk</li>
          <li class="item"><a href="" class="link"></a>Take the dog for a walk</li>
          <li><a href="" class="link"></a>Exercise</li>
          <li>Play music</li>
          <li></li>
    </ul>
    ```
    1. parent([expr]):取得所有匹配元素的直接父元素的元素集合。
    ```
    $('.link').parent('item');
    ```
    结果是
    ```
    <li class="item"><a href="" class="link"></a>Buy milk</li>
    <li class="item"><a href="" class="link"></a>Take the dog for a walk</li>
    ```
    2. :parent选择器
    匹配含有子元素或者文本的元素
    ```
    $('li:parent');
    ```
    结果是：
    ```
    <li class="item"><a href="" class="link"></a>Buy milk</li>
    <li class="item"><a href="" class="link"></a>Take the dog for a walk</li>
    <li><a href="" class="link"></a>Exercise</li>
    <li>Play music</li>
    ```
    3. parents([expr]):取得所有匹配元素的所有祖先元素的元素集合。
    ```
    $('.link').parents('.item');
    ```
    结果是：
    ```
    <li class="item"><a href="" class="link"></a>Buy milk</li>
    <li class="item"><a href="" class="link"></a>Take the dog for a walk</li>
    <ul class="demo item">
          <li class="item"><a href="" class="link"></a>Buy milk</li>
          <li class="item"><a href="" class="link"></a>Take the dog for a walk</li>
          <li><a href="" class="link"></a>Exercise</li>
          <li>Play music</li>
          <li></li>
    </ul>
    ```
    4. closest([expr]):首先检查当前元素，如果匹配直接返回当前元素本身，如果不匹配则向上查找父元素，知道找到匹配的父元素并返回该父元素，如果没找到则返回空的jquery对象。

    parents()和closest()的区别：closest从当前元素开始查找，parents从父元素开始查找。closest找到匹配元素就停止，返回0个或1个元素，parents会一直向上查找到根元素，然后把这些元素放进一个临时集合中，再用给定的选择器表达式去过滤，返回0个或1个或多个元素。
2. jquery绑定事件几种方式

    4种方法：bind(),live(),delegate(),on()

    bind()函数只能针对已经存在的元素进行事件的设置；但是live(),on(),delegate()均支持未来新添加元素的事件设置；官方有一个推荐就是尽量使用on,其他三个方法都是内部调用on来完成的，直接使用on可以提高效率。

    bind():在选择到的元素上绑定特定事件类型的监听函数 **bind()函数只能针对已经存在的元素进行事件的设置,不支持动态绑定** bind()支持jquery的所有版本
    ```
    bind: function( types, data, fn ) {
        return this.on( types, null, data, fn );
    }
    $('#myol li').bind('click',getHtml);
    ```
    1. type:事件类型，如click、change、mouseover等;
    2. data:传入监听函数的参数，通过event.data取到。可选;
    3. function:监听函数，可传入event对象，这里的event是jQuery封装的event对象，与原生的event对象有区别，使用时需要注意

    live():不是将监听器绑定在自己身上，而是绑定在this.context。context是元素的限定范围，通常是document。即利用事件委托机制。用event.currentTarget来获取到当前捕捉到事件的 节点。jquery1.9以下支持，1.9已经删除该方法。
    ```
    live: function( types, data, fn ) {
        jQuery( this.context ).on( types, this.selector, data, fn );
        return this;
    }
    ```

    delegate():监听器绑定在调用此方法的元素上。jquery1.4.2+支持该方法
    ```
    delegate: function( selector, types, data, fn ) {
        return this.on( types, selector, data, fn );
    }
    ```
    selector:用来指定触发事件的目标元素

    on():
    ```
    on(type,[selector],[data],fn)
    ```

## ES6
1. **let和var的区别**

    1. let声明的变量，只在let命令所在的代码块内有效
    2. let命令不存在变量提升。
    3. let命令不允许在同一个作用域内重复声明同一个变量
2. **ES6中的箭头函数的this与其他的有啥区别？**

    ES6中的箭头函数没有自己的this值，其this值是继承外域的this值。
    ```
    $scope.on('$stateChangeSuccess', function(){
        this.list = this.getList();
    });
    $scope.on('$stateChangeSuccess', ()=>{
        this.list = this.getList();
    });
    ```
    上面的代码是在es6中class的constructor体中的语句。函数的作用是调用该模块中的getList函数，将函数的返回值赋值给class中的list值。
    1. 普通函数：报错（找不到getList方法）,普通函数体里的this对象取值是function里的属性或者方法，由于普通函数里并未定义getList方法，所以其会报错undefined。
    2. 箭头函数：执行正常。而在箭头函数中，由于其自身没有this属性，所以函数体里面的this均是从外域获取的属性或者方法，因此是正确的。

## 其他
1. **下列排序算法不稳定的有?**

    A 插入排序  B 希尔排序  C 冒泡排序  D 堆排序  E 归并排序  F 快速排序  G 选择排序

    正确答案 : BDFG
2. **下面那个页面调度算法,当进程分配到的页面数增加时,缺页中断的次数可能增加也可能减少**

    A FIFO算法 B LRU算法 C Clock算法 D LFU算法

    正确答案 : A
3. **长短轮训和长短链接**

短轮是循环请求～返回（无论有没有结果），长轮是循环请求～返回（有结果，如果超时强制返回）。长连接是多个http请求复用一个TCP连接，短连接则一个请求一个TCP连接。
4. **TCP和UDP的区别**

    1. TCP面向连接（如打电话要先拨号建立连接）;UDP是无连接的，即发送数据之前不需要建立连接
    2. TCP提供可靠的服务。也就是说，通过TCP连接传送的数据，无差错，不丢失，不重复，且按序到达;UDP尽最大努力交付，即不保证可靠交付
    3. TCP面向字节流，实际上是TCP把数据看成一连串无结构的字节流;UDP是面向报文的,UDP没有拥塞控制，因此网络出现拥塞不会使源主机的发送速率降低（对实时应用很有用，如IP电话，实时视频会议等）
    4. 每一条TCP连接只能是点到点的;UDP支持一对一，一对多，多对一和多对多的交互通信
    5. TCP首部开销20字节;UDP的首部开销小，只有8个字节
    6. TCP的逻辑通信信道是全双工的可靠信道，UDP则是不可靠信道
5. **xss与csrf的原理与怎么防范**

6. **200和304读取缓存的区别**

    浏览器第一次加载资源的时候，返回200，意思是成功获取，并会在浏览器的缓存中记录下max-age，第二次访问的时候，浏览器回去判断这个资源在缓存中存不存在，如果有的话，再判断mag-age有没有过期，没有过期，就直接读取缓存，不会和服务器交互，如果过期，就去向服务器请求，服务器如果发现资源没有改变，就会返回304，浏览器还是会去读取缓存。
7. **浏览器清除缓存的方法**

    1. meta元数据：HTTP-EQUIV属性为名称/值对提供了名称，CONTENT提供了值。使用带有 http-equiv 属性的 <meta> 标签时，服务器将把名称/值对添加到发送给浏览器的响应头部。
    ```
    <META HTTP-EQUIV="pragma" CONTENT="no-cache">
    <META HTTP-EQUIV="Cache-Control" CONTENT="no-cache, must-revalidate">
    <META HTTP-EQUIV="expires" CONTENT="0">
    ```
    2. jquery AJAX清除缓存：
    ```
    $.ajax({
         url:'www.haorooms.com',
         dataType:'json',
         data:{},
         beforeSend :function(xmlHttp){
            xmlHttp.setRequestHeader("If-Modified-Since","0");
            xmlHttp.setRequestHeader("Cache-Control","no-cache");
         },
         success:function(response){
             //操作
         }
         async:false
    });
    //也可以直接将cache设置为false
    $.ajax({
         url:'www.haorooms.com',
         dataType:'json',
         data:{},
         cache:false,
         ifModified :true ,
         success:function(response){
             //操作
         }
         async:false
    });

    ```
    3. 在url后面添加一个随机数 "?ran="+Math.random()
    4. 在url后面添加一个时间戳 "?timestamp="+new Date().getTime()
