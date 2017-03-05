# 2016年 秋

转眼研究生一年就这么搜地一下过去了，研一上学期很迷茫，不知道将来做什么，找不到自己的定位。研一下学期开学不知怎么就想通了，觉得后台涉及到的东西太多了，本人的脑容量明显不够，反而发现前端是一个很有趣的职业，于是从研二上一开学也就是2016年3月开始潜心学习前端技术，中间参加了百度前端技术学院春季班，任务完成85%。学到了很多东西，也发现要学的东西还有很多很多。。。。

又一转眼，研一下学期也结束了，中间休了三个星期暑假，只写了开题报告，一点没学习，瘫了整个假期，开学后深深鄙视自己。。。。

开学之后，2017校招全面开始，在芦荟同学的带动下，决定投简历蹭笔试，涨涨见识。说实话，之前从来没有参加笔试，面试，对面试的恐惧那是相当的大啊，而且自认为自己能力不足，又不善于交流，内心其实很抵触这次“蹭”的经历。但是，想想半年后就要找实习了，那时候想躲也躲不掉了，倒不如这次开开眼界，长长经验。于是立马写了一份简历，就开始各个公司投简历（简历模板还是在网上花了4块9买的，然后被吐槽，这也不好看啊。。。。）

先后投了**小米**，**百度**，**美团点评**，**搜狗**，**网易**，**深信服**，错过了腾讯（决定要蹭的时候腾讯笔试都结束了）

## 搜狗
### 9.11 前端专场，宣讲+笔试

#### 题型：8选择  3填空  2简答  1编程
##### 选择
选择很基础的js的题，就不说了。（由于基础掌握的比较差，知识点总是记不清，还有确实有些没学到，所以还是有几道题不确定的）
##### 填空
1. **10个白球，10个红球，两个箱子，怎么放能够使一次拿到白球的概率最大？**（不会，快交卷了，工作人员小声告诉我了。。。感谢！）

   用程序跑了一下，答案是1个白球，0个红球，9个白球，10个红球，但是不知道为什么。。。
##### 简答
1. **include和require的区别，为了避免多次引入相同的文件，可以用什么替换它们？**（不会）

   原来是PHP的知识，并没有学过PHP啊。。。。

   include和require都是将一个页面引入当前页面。
   1. 对include()来说，在include()执行时文件每次都要进行评估；而对于require()来说，文件只处理一次（实际上，文件内容替换了require()语句）。故常放在文件开头。
   2. include可以进行判断是否包含，而require则不管任何情况都包含进来。
   3. include如果引入的文件不存在，试图继续往下执行，并报一个warning，require如果引入的文件不存在，不再继续执行，报fatal error

   为了避免多次引入相同文件，可以用```include_once```和```require_once```替换它们。

2. **post和get的区别，各用于什么环境？**（随便写了几句）
   1. get获取数据，post提交数据
   2. get请求会将参数跟在url后进行传递，post请求则是作为http消息的实体内容发送给服务器
   3. get方法受浏览器对URL长度的限制，传输的数据量较小，post理论上不受限制
   4. get方式请求的数据会被浏览器缓存起来，post不会
   5. post比get安全，因为不可见

##### 编程
1. **字符串转整数（不能直接用js中的parseInt()）**（P.S.：话说笔试前几天我刚开始刷LeetCode，刚刷到这道题，第8题，我就用的parseInt()，几行代码完事，还打败了100%，得意地不行还截图给森哥炫耀，森哥说我这是偷懒，我没理会，没想到。。。笔试回来晚上又重新A了一遍）
```
var strToInt = function(str){
    var sign=1;
    var i = 0, result = 0;
    str = str.trim();
    if(str.length === 0){
        return 0;
    }else if(str[0] === "+"){
        sign = 1;
        i++;
    }else if(str[0] === "-"){
        sign = -1;
        i++;
    }
    var cur;
    for(var len=str.lenth;i<len;i++){
        cur = str.charCodeAt(i) - 48; //0是48
        if(cur > 9 || cur < 0){
            break;
        }else{
            result = result * 10 + cur;
            if(result >= 2147483647 && sign === 1){
                return 2147483647;
            }else if(result >= 2147483648 && sign === -1){
                return -2147483648;
            }
        }
    }
    return sign === 1 ? result : -result;
};
```
（除了用charCodeAt函数，将字母转成数字，还可以用“123” - 0的方式，将纯数字的字符串转成number型的数字）

晚上接到电话，笔试通过，明天下午面试

### 9.12面试
（人生中第一次正儿八经的面试啊！！！！以前就参加一次青协面试，一次学生会面试。我是下午三点，芦荟同学是上午11点，等她面完之后，我还问了一下她面试的内容，说是闭包、作用域、继承、ES6、原生AJAX，一道算法题等，于是我中午抓紧磨枪，看了一下闭包，继承，ES6，原生AJAX，不过以前就没学过AJAX，所以看不懂也记不住。）

先让我做了一下自我介绍，大概问了一下简历中的项目，没问具体的东西。然后开始问技术。（记不清了，不是按问的顺序）

1. **怎么判断一个数组是数组**

   1. 对于一个网页或一个全局作用域而言，使用instanceof操作符。
instanceof返回一个布尔值，指出对象是否是特定类的一个实例，eg:
    ```
    var arr = new Array();
    console.log(arr instanceof Array);   //返回true
    ```
    instanceof的问题在于，它假定只有一个全局执行环境，如果网页包含多个框架，那实际上就存在两个以上不同的全局执行环境，从而存在两个以上不同版本的Array构造函数。
   2. ECMAScript5新增了Array.isArray()方法，最终确定一个值是否是数组。
    ```
    var arr = [];
    console.log(Array.isArray(arr));  //true
    ```
   3. Object.prototype.toString.call(arr).slice()
    ```
    var arr = [];
    console.log(Object.prototype.toString.call(arr).slice(8,-1) === 'Array');  //true
    ```
   我当时只想到了typeof，但是我知道typeof只能返回object，但是又想不起来别的了

2. **继承，两个函数A，B，怎么让B继承A**

    通过原型链prototype，他让我写出来，我就写了B.prototype = A
所以2B了，回来看书原来是B.prototype = new A();

    详细见为知笔记中--继承

3. **原生AJAX的实现**


4. **利用局部刷新的方法实现翻页**

    不会啊，面试官告诉说使用浏览器的hashchange事件

    location.hash就是uri中#及后面的部分，例如：www.google.com.hk#123的#123。 当hash改变时会触发window的hashchange事件。

    思路：点击不同页码，改变location.hash为相应的页码值，监听window的hashchange事件，onhashchange事件处理程序中根据hash的值改变ajax要访问的url，

5. **ES6与ES5的区别**

6. **瀑布流，实现当滚动到页面底端的时候，加载下一页**

   1. 计算页面的宽度，计算出页面可放数据块的列数。
   2. 将各个数据块的高度尺寸记入数组中（需要等所有图片加载完成，否则无法知道图片的高度）。
   3. 用绝对定位先将页面第一行填满，因为第一行的top位置都是一样的，然后用数组记录每一列的总高度。
   4. 继续用绝对定位将其他数据块定位在最短的一列的位置之后然后更新该列的高度。
   5. 当浏览器窗口大小改变时，重新执行一次上面1-4步以重新排放（列数随页面宽度而改变，因而需要重新排放）。
   6. 滚动条滚动到底部时加载新的数据进来后也是定位在最短的一列的位置之后然后更新该列的高度。

7. **算法题：1-100000，拿走两个数，然后将剩下的数打乱，找出被拿掉的是哪两个数**

   我答的是先快排，然后从头遍历每两个数之间的差是否为1.

   开一个100000的数组，遍历一遍把相应的位置置为true，然后遍历数组，不为true的即为被拿掉的。

## 深信服
### 9.22 笔试
很严，竟然还让签了保密协议。。。。不过试题都是后台语言的题，好像是C或者C++。。。笔试完了竟然都不知道用的是什么语言，汗。。。。很多选择，两道代码补全，四道编程题，既然签了保密协议，在这里我就不写具体出了什么题了。

## 网易
### 9.23 18：00-20:00 线上笔试（与小米冲突一个小时，所以只答了一个小时）
### 选择题（10道）：
1. **cookie**
2. **IE浏览器原生生成XMLHttpRequest对象**

   window.ActiveXObject()

3. **排序算法时间复杂度一定不会超过nlogn的是** （归并）
4. **以下哪条语句能够实现js页面跳转**

   + window.location.href = "url"    // 跳转到指定URL
   + window.location.go(-1)  // 刷新上一页
   + window.location.replace("url")      // 假如有三个页面：1.html,2.html,3.html，1.html是系统默认主页，2.html中用window.location.replace("3.html")与用window.location.href = "3.html"，在用户界面看来是没有什么区别的，但是当3.html中有一个返回按钮，调用window.history.go(-1)或window.history.back(-1)方法时，使用window.location.href = "3.html"方法点击按钮会返回2.html，但是使用window.location.replace("3.html")方法调用window.history.go(-1)或window.history.back(-1)方法是不好用的，会返回1.html。
   + window.history.back(-1)   // 返回上一页面
   + window.history.go(-1)  // 返回上一页
   + window.history.go(1)   // 前进
   + window.navigate(“url”) // IE浏览器专用
   + self.location = "url" // self当前窗口对象  self与window对象可以互换使用
   + top.location = "url"  //top父窗口对象

5. **共12台设备，k个线程，每台线程最多需要4台设备，存在死锁的k的最小值？**  
    k的最小值为4,4个进程每个分配3台设备，都在等待别人释放一个设备，因此陷入死锁

6. **对进程，线程的说法正确的是**

7. **给一段程序，求时间复杂度**

8. **给一个序列，使用某种排序算法第二趟排序的结果为另一序列，求使用的是哪种排序方法**

   [49,38,65,97,76,13,27,49,55,04]

   [13,04,49,38,27,49,55,65,97,76]

9. **给出一个二叉树的前序遍历和先序遍历，求后续遍历**

### 简答题（一道）
1. 跨域问题的解决方法

   js跨域是指通过js在不同的域之间进行数据传输或通信。我们经常会在页面上使用ajax请求访问其他服务器的数据，此时，客户端会出现跨域问题

   跨域问题是由于js安全限制中的同源策略造成的。同源策略是指一段脚本只能读取同一来源的窗口和文档的属性，这里的同一来源指的是主机名、协议、和端口号的组合。

   注意：如果是协议和端口造成的跨域问题，前台是无能为力的

   在跨域问题上，域仅仅是通过URL的首部来识别的，而不会去尝试判断相同的ip地址对应着两个域或两个域是否在同一个ip上

   多种解决方法：
   jsonp

### 编程题（三道）
1. **一个数组的数位和定义为这个数字所有位置的数值的总和，例如：1234的数位和为：1+2+3+4=10,  5463的数位和为：5+4+6+3=18.现在有3个数A，B，C，需要求出在A，B范围内包括A，B的一个数X，让X的数位和与C的数位和差值的绝对值最小。**

   输入：输入为一行，一行有3个数A,B,C，使用空格隔开（1<= A，B，C <=1000000000） （0<=B-A<=100000）

   输出：输出一个数，即为所求得X，如果有多解输出最小的那个解。

   样例：
   输入：1,9,10
   输出：1

```
var input_arrays = ["12","300","38"];
var a = input_arrays[0];
var b = input_arrays[1];
var c = +input_arrays[2];
var lenA = a.length;
var lenB = b.length;
var sumX;
var sumC = weishuSum(c);
while(a.length < b.length){
    a = 0 + a;
}
for(var i=0;i<81;i++){
    var remainSum;
    var x = "";
    var plusX = findX(sumC+i);
    var minusX = findX(sumC-i);
    if(plusX && minusX){
        x = +plusX >= +minusX ? +minusX : +plusX;
        break;
    }else if(plusX){
        x = +plusX;
        break;
    }else if(minusX){
        x = +minusX;
        break;
    }
}
console.log("result:"+x);

function findX(sumX){
    var x = [];
    var k;
    for(var i=lenB-lenA;i>=0;i--){
        if(i === 0){
            k = b[i];
        }else{
            k = 9;
        }
        for(var j=+a[i];j<=k;j++){
            remainSum = sumX - j;
            if(remainSum >= 0 && remainSum <= (lenB-i-1)*9){
                while(remainSum >= 9){
                    x.unshift(9);
                    remainSum -= 9;
                }
                if(remainSum !== 0){
                    x.unshift(remainSum);
                }
                while(x.length<lenB-i-1){
                    x.unshift(0);
                }
                x.unshift(j);
                return x.join("");
            }
        }
    }
    return false;
}

function weishuSum(n){
    n = n.toString();
    var sum = 0;
    for(var i=0;i<n.length;i++){
        sum += +n[i];
    }
    return sum;
}
```

2. **定义一个数的权重为这个数转换成二进制后的1的个数，求出大于n的与n的权重相等的最小值**
```
var n = 22;
findFirstSameWeightNum(n);
function findFirstSameWeightNum(n){
    var toBinary = [];
    var wei = getWeight(n,toBinary);
    var i = toBinary.length-1;
    while(toBinary[i] === 0 && i >= 0){
        i--;
    }
    var oneNum = 0;
    while(toBinary[i] === 1 && i >= 0){
        toBinary[i] = 0;
        oneNum++;
        i--;
    }
    if(i < 0){
        toBinary.unshift(1);
    }else{
        toBinary[i] = 1;
    }
    var ret = +toBinary.join("");
    oneNum = oneNum - 1;
    ret = ret | ((1 << oneNum) - 1);
    console.log(toDecimal(ret));
}
function toDecimal(n){
    var sum = 0;
    var nLen = n.length;
    for(var i=0;i<nLen;i++){
        if(n[i] === 1){
            sum += Math.pow(2,nLen-i-1);
        }
    }
    return sum;
}
function getWeight(n){
    var weight = 0;
    while(n > 0){
        if(n & 1 === 1){
            weight++;
        }
        n = n >>> 1;
    }
    return weight;
}
function getWeight(n,toBinary){
    var weight = 0;
    var num = n;
    var remain;
    while(num > 0){
        remain = num % 2;
        toBinary.unshift(remain);
        if(remain === 1){
            weight++;
        }
        num = Math.floor(num/2);
    }
    return weight;
}
```

3. **如果一个字符串由完全相同的两段字符串组成，我们称其为平方串，例如：“aa”，“ABAB”，“abcabc”是平方串，“aaa”，“ABCabc”，“abcab”不是平方串。现在给出一个字符串求它所有的连续子串中有多少种平方串。**

   例如：“aaabccabccCC"，我们会发现"aa","abccabcc","cc"和”CC“这四种平方串，其中”aa“，“cc”都出现了2次，但是我们只统计一次种数。

   输入：为一个字符串，长度为length（0<=length<=50）,只包含大小写字母。

   输出：一个整数，即为所求的种数

   样例：
   输入：“aaabccabccCC"
   输出：4
```
function doubleStr(str){
    var len = str.length;
    var temp = "";
    var midInx = 0;
    var subStr = "";
    var resObj = {};
    var count = 0;
    for(var i=0;i<len;i++){
        for(var j=i+1;j<len;j+=2){
            temp = str.substring(i,j+1);
            midInx = temp.length/2;
            subStr = temp.substring(midInx);
            if(temp.substring(0,midInx) === subStr && !resObj[subStr]){
                resObj[subStr] = 1;
                count++;
            }
        }
    }
    console.log(count);
}
```


## 小米：
1. **电梯调度，磁盘，磁道等（操作系统）**
2. **ping命令涉及的协议不包括那个？ ---选项：TCP，ARP，ICMP，还有一个忘了**

   ICMP是“Internet Control Message Ptotocol”（Internet控制消息协议）的缩写。它是TCP/IP协议族的一个子协议，用于在IP主机、路由器之间传递控制消息。控制消息是指网络通不通、主机是否可达、路由是否可用等网络本身的消息。这些控制消息虽然并不传输用户数据，但是对于用户数据的传递起着重要的作用。

   在网络中经常会使用到ICMP协议。例如经常用于检查网络不通的ping命令，这个ping的过程实际上就是ICMP协议工作的过程。还有跟踪路由的trancert命令也是基于ICMP协议的。

   操作系统规定的ICMP数据包最大尺寸不超过64KB。通常利用这一规定进行主机攻击。即Ping of Death攻击。它的原理是：如果ICMP数据包的尺寸超过64KB上限时，主机就会出现内存分配错误，导致TCP/IP堆栈崩溃，致使主机死机。

   此外，向目标主机长时间、连续、大量地发送ICMP数据包，也会最终使系统瘫痪。大量的ICMP数据包会形成ICMP风暴，使得目标主机耗费大量的CPU资源处理，疲于奔命.

   ping.exe的原理：向指定的IP地址发送一定长度的数据包，按照约定，若指定IP地址存在的话，会返回同样大小的数据包，当然，若在特定时间内没有返回，就是“超时”，会被认为指定的IP地址不存在。由于ping使用的是ICMP协议，有些防火墙软件会屏蔽ICMP协议，所以有时候ping的结果只能作为参考，ping不通并不一定说明对方IP不存在。

   来源： http://blog.csdn.net/kerry0071/article/details/39340959

3. **哪个不会调用触发器？ ---选项：update，delete，select，insert**

   select
   触发器是一种特殊的存储过程，它不能被显式地调用，而是在往表中插入记录﹑更新记录或者删除记录时被自动地激活。所以触发器可以用来实现对表实施复杂的完整性约束。

4. **哪种http状态下，浏览器会产生两次HTTP请求？ ----选项：302,400,304,404**

   + 302 临时重定向（指出被请求的文档已被临时移动到别处，此文档的新的URL在Location响应头中给出）
   + 304 未修改（表示客户机缓存的版本是最新的，客户机应该继续使用它。）
   + 400 错误的请求，语义有误，当前请求无法被服务器理解
   + 404访问的文件不存在（服务器上不存在客户机所请求的资源）

   + 1XX：是相应信息提示
   + 2XX：成功
   + 3XX：重定向
   + 4XX：客户端错误
   + 5XX：服务器端错误

5. **有一个文件ip.txt，每行一条ip记录，共若干行，哪个命令可以实现统计出现次数最多的前3条ip记录？**

    选项：

    A. cat ip.txt | count -n | sort -m | head -n 3

    B. unig -c ip.txt | sort -nr | head -n 3

    C. sort ip.txt | unig -c | sort -rn | head -n 3

    D. cat ip.txt | uniq -c | sort -m | top -n 3

    答案选C，首先排序sort，相同的ip会排在一起，然后uniq -c 会去掉重复的ip，只有保留一条，同时记录重复数在行首，如： 3 ip1   \n    1 ip2   \n 2 ip3，再按照数字反向排序即可sort -nr，-n是按照数字，-r是降序，最好 head -n 3取出前三个即可。

6. **下列代码存在几个变量没有被回收**
```
var i = 1;
var i = 2;
var add = function(){
    var i = 0;
    return function(){
        i++;
    };
}();
add();
```
   选项：0, 1 ,  2,  3   答案为2个

### 编程题（三道）
1. **继MIUI8推出手机分身功能之后，MIUI9计划推出一个电话号码分身的功能，首先将电话号码中的每1位加上8取个位，然后使用对应的大写字母代替("ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE")，然后随机打乱这些字母，所生成的字符串即为电话号码对应的分身。**

   输入：第一行是一个整数T（1<=T<=100）表示测试样例数，接下来T行，每行给定一个分身后的电话号码分身

   输出：输出T行，分别对应输入中每行字符串对应的分身前的最小电话号码（允许前导为0）

   样例：

   输入：
   ```
   4
   EIGHT
   ZEROTWOONE
   OHWETENRTEO
   OHEWTIEGTHENRTEO
   ```
   输出：
   ```
   0
   234
   345
   0345
   ```

```
var t = 6;
var inputArr = ["EIGHT","ZEROTWOONE","OHWETENRTEO","OHEWTIEGTHENRTEO","EGIEIGONEHTHTOEN","ONESEVENONESIX"];
var numArr = ["EIGHT", "NINE","ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN"];
var n = 0;
var lettersObj = {};
var telStr = "";
var isFind = false;
var answer = "";

while(n < t){
    str = inputArr[n];
    splitLetters(str);
    telStr = "";
    isFind = false;
    dfs();
    console.log("telStrrrrrr:"+answer);
    n++;
}

function splitLetters(str){
    lettersObj = {};
    for(var i=0;i<str.length;i++){
        if(lettersObj[str[i]]){
            lettersObj[str[i]]++;
        }else{
            lettersObj[str[i]] = 1;
        }
    }
}

function dfs(){
    if(empty()){
        isFind = true;
        return;
    }
    for(var k=0;k<numArr.length;k++){
        var find = true;
        for(var i=0;i<numArr[k].length;i++){
            if(!lettersObj[numArr[k][i]] || lettersObj[numArr[k][i]] === 0){
                for(var j=0;j<i;j++){
                    lettersObj[numArr[k][j]]++;
                }
                find = false;
                break;
            }else{
                lettersObj[numArr[k][i]]--;
            }
        }
        if(find){
            telStr += k;
            dfs();
            if(isFind){
                answer = telStr;
                return;
            }
            for(var p=0;p<numArr[k].length;p++){
                lettersObj[numArr[k][p]]++;
            }
            telStr = telStr.slice(0,-1);
        }

    }

}

function empty(){
    for(var letter in lettersObj){
        if(lettersObj[letter] !== 0){
            return false;
        }
    }
    return true;
}
```

2. **给定一个有效二叉树，节点数为n，每个节点编号为0~n-1，给出树中父子节点之间的关系，求出树的高度**

   输入：第一行是一个整数n表示节点数，接下来n-1行，每行给定一个父子关系，第一个数是父节点编号，第二个数是子节点编号，中间用空格隔开。

   输出：数的高度

   样例：

   输入：
   ```
   5
   0 1
   0 2
   1 3
   1 4
   ```
   输出：3
```
var n = 7;
var inList = [[0,1],[0,2],[1,3],[1,4],[4,5],[5,6]];
var resArr = {};
var num = [];
num.length = 1001;
var t = 0;
while(t < n-1){
    var par = +inList[t][0], chi = +inList[t][1];
    num[chi] = 1;
    if(!resArr[par]){
        resArr[par] = [];
    }
    resArr[par].push(chi);
    t++;
}
var head;
for(var i=0;i<n;i++){
    if(num[i] !== 1){
        head = i;
        break;
    }
}
var deep = 0;
var max = 0;
dfs(head,deep);
function dfs(key,deep){
    if(!resArr[key]){
        max = max > deep ? max : deep;
    }else{
        dfs(resArr[key][0],deep+1);
        if(resArr[key][1]){
            dfs(resArr[key][1],deep+1);
        }
    }
}
console.log(max+1);
```

3. **给定一个字符串，字符串只由字母和空格组成，首尾不包括空格，每个单词之间用一个空格隔开，将单词反置。**

   输入：每行一个字符串

   输出：反置后的字符串

   样例：

   输入：“hello my world ”

   输出：“world my hello”
```
var str = "hello my world";
console.log(str.split(" ").reverse().join(" "));
```

### 加分题（2道）：
1. **请在最新版chrome上实现如下需求，某些jsAPI想不起来可以用伪代码：**

   原有HTML：
   ```
   <button type="button" id="block">方块</button>
   <button type="button" id="circle">正圆</button>
   <script>
   //实现代码
   </script>
   ```

   **要求：实现一个画图的类，方块类和正圆类继承画图类，需要达到以下效果：**

   1. 点击方块按钮，每在屏幕空白处点击鼠标，就在屏幕上生成一个100px的黑色方块，方块的中心坐标位于鼠标点击对应的空白处，点击方块会console.log("Hello!!,I am block")。
   2. 点击正圆按钮，每在屏幕空白处点击鼠标，就在屏幕上生成一个100px的黑色正圆，正圆的中心坐标位于鼠标点击处，点击正圆会console.log("Hello!!, I am circle").再次点击会console.log("Goodbye!!")并以1秒的时间透明度渐变为0，然后消失。

2. **假如页面中存在如下dom节点：**
```
<div id="contain"></div>
```
**有如下数据对象：**
   ```
   var labels = ['小米5'，'小米'，'小米note','红米note','小米pro','红米note2'...]
   var colors = ['#f9eaeb','#f2f6e9','#8ad9dd','#c7c7c7','#f8f2ec'...]
   ```
   **要求：**

   1. 把labels的每个元数据转换为标签元素，例如```<span style="#f9eaeb">```小米5```</span>```
   2. 颜色采用colors的颜色，相邻的元素颜色不能一样，颜色尽可能均匀，丰富。

## 百度
### 9.29 线上笔试
#### 选择题（30道）
1. **在JavaScript中，以下哪个正则表达式无法匹配字符C**

   a. /[A-z]/g    b. /[A-Z]/m    c. /[A-z]/m    d. /[a-Z]/i

   答案：d.  会报语法错，a-Z范围不对，大写Z在小写a前面

2. **HTML5中不再支持或不建议下面哪些元素？**

   a. ```<font>```不支持   
   b.```<center>```HTML5新标签，文本水平居中  
   c.```<p>```    
   d.```<time>```HTML5新标签

   答案：a

3. **在JavaScript中，以下哪个表达的执行结果是ca？**

   a. 'abc'.replace(/(\w)\w(\w)/, '$2$0$1')  结果为c$0a  
   b. 'abc'.replace(/(\w)\w(\w)/, '$2$$$1')   结果为c$a  
   c. 'abc'.replace(/(\w)\w(\w)/, '$2$`$1')   结果为ca                     
   d. 'abc'.replace(/(\w)\w(\w)/, '$2$&$1')   结果为cabca

   答案：c

   \w 匹配[a-zA-Z_0-9]所有字母，数字和下划线的单词字符
   stringObject.replace(regexp,replacement)
字符串 stringObject 的 replace() 方法执行的是查找并替换的操作。它将在 stringObject 中查找与 regexp 相匹配的子字符串，然后用 replacement 来替换这些子串。如果 regexp 具有全局标志 g，那么 replace() 方法将替换所有匹配的子串。否则，它只替换第一个匹配子串。
replacement 可以是字符串，也可以是函数。如果它是字符串，那么所有匹配都将由字符串替换。但是 replacement 中的 $ 字符具有特定的含义。如下表所示，它说明从模式匹配得到的字符串将用于替换。

   字符　　替换文本
   + $1、$2、...、$99　　与 regexp 中的第 1 到第 99 个子表达式相匹配的文本。
   + $&　与 regexp 相匹配的子串。
   + $`　位于匹配子串左侧的文本。
   + $'　位于匹配子串右侧的文本。
   + %　直接量符号。

   来源： http://www.jb51.net/article/43949.htm

4. **以下哪个样式声明可以将元素沿水平方向旋转180度？**

   a. transform:rotate(180deg);沿z轴顺时针旋转180度      
   b. transform:scale(-1,1);沿垂直方向（y轴）旋转180度     
   c. transform:rotate(-180deg);沿z轴逆时针旋转180度     
   d. transform:scale(1,-1);沿水平方向（x轴）旋转180度

   答案：d

5. **一个栈的入栈顺序是abcdefg，则有多少种不同的出栈顺序？**

   a. 240     b.429      c.7      d. 28

   答案：b

   卡特兰数

   卡特兰数前几项为 :
1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, 16796, 58786, 208012, 742900, 2674440, 9694845, 35357670
令h(0)=1,h(1)=1，卡特兰数满足递推式：h(n)= h(0)*h(n-1)+h(1)*h(n-2) + ... + h(n-1)h(0) (n>=2)

   例如：h(2)=h(0)*h(1)+h(1)*h(0)=1*1+1*1=2 ，h(3)=h(0)*h(2)+h(1)*h(1)+h(2)*h(0)=1*2+1*1+2*1=5；

   另类递推式：h(n)=h(n-1)*(4*n-2)/(n+1)；

   递推关系的解为：h(n)=C(2n,n)/(n+1) (n=1,2,3,...)；

   递推关系的另类解为：h(n)=C(2n,n)-C(2n,n+1)(n=1,2,3,...)；

   来源： http://blog.csdn.net/feeltouch/article/details/45077387

6. **关于HTTP，TCP，IP和FTP，以下哪种说法不正确？**

    a. FTP指的是文件传输协议                                         
    b. IP协议提供域名到IP地址之间的解析服务 （DNS域名解析系统）  
    c. TCP协议将http请求报文分割为报文段以方便通讯          
    d. HTTP协议的职责是对web服务器请求的内容进行处理

   答案：b

7. **以下哪条css样式声明是用来做响应式布局的？**

   a. display:flex;    
   b. display:table;   
   c. display:none;     
   d. display:inline

   答案：a

8. **TCP/IP协议族按层次分别为4层（应用层，传输层，网络层，数据链路层）http协议处于哪一层？**

   a. 传输层  (TCP，UDP)     
   b. 数据链路层        
   c. 网络层 (IP)          
   d. 应用层   (http)

   答案：d

9. **下列说法错误的是：**

   a. 利用Dijkstra求每对不同顶点之间的最短路径的算法时间是O(n^3)(图用邻接矩阵表示)    
   b. 利用Dijkstra可以求指定原点到其他各点之间的最短距离的算法中允许弧上的权为负，但不能有权值为负的回路  （弧上权值不能为负）     
   c. 利用Floyed求每对不同顶点对的算法中允许弧上的权为负，但不能有权值为负的回路     
   d. 利用Floyed求每对不同顶点之间的最短路径的算法时间是O(n^3)(图用邻接矩阵表示)

   答案：b

10. **nodeType返回节点的类型，代表元素节点的是？**

    a. 2 (属性节点)      
    b. 0       
    c. 1 (元素节点)      
    d. 3  (文本节点)

    答案：c

11. **下面代码的输出结果为？**
    ```
    int a[2][3] = { {1,2,3},{4,5,6} };
    int *p = (int *)(&a+1);
    printf("%d %d",*(int *),*(p-1));
    ```
    a. 4 3     
    b. 4 6      
    c. 2 6    
    d. 2 1

    答案：

12. **由权值为1,1,3,7,5,4的节点构造一棵哈夫曼树，该树的带权路径长度为？**

    a. 45     
    b. 49     
    c. 21     
    d. 52

    答案：b

    给定n个权值作为n个叶子结点，构造一棵二叉树，若带权路径长度达到最小，称这样的二叉树为最优二叉树，也称为哈夫曼树(Huffman Tree)。哈夫曼树是带权路径长度最短的树，权值较大的结点离根较近。

    结点的带权路径长度为：从根结点到该结点之间的路径长度与该结点的权的乘积。

    树的带权路径长度规定为所有叶子结点的带权路径长度之和，记为WPL。

    假设有n个权值，则构造出的哈夫曼树有n个叶子结点。 n个权值分别设为 w1、w2、…、wn，则哈夫曼树的构造规则为：
    1. 将w1、w2、…，wn看成是有n 棵树的森林(每棵树仅有一个结点)；
    2. 在森林中选出两个根结点的权值最小的树合并，作为一棵新树的左、右子树，且新树的根结点权值为其左、右子树根结点权值之和；
    3. 从森林中删除选取的两棵树，并将新树加入森林；
    4. 重复(2)、(3)步，直到森林中只剩一棵树为止，该树即为所求得的哈夫曼树。

13. **以下哪条css@规则通常用来实现响应式布局？**

    a. @keyframes      
    b. @import    
    c. @media   
    d. @font-face

    答案：  c

14. **下列说法正确的是？**

    a. 插入排序在最坏情况下的复杂度为O(n^2)
    b. 排序二叉树元素查找的复杂度可能为O(n)
    c. 在有序列表中通过二分查找的复杂度是O(log2n)
    d. 对于基本有序的待排序列表进行排序，最快的是快速排序（基本有序时，快排是最坏情况）

    答案：abc

15. **下面哪些是HTML5的结构标签？**

    a. ```<article>```      
    b. ```<section>```      
    c. ```<nav>```    
    d. ```<hgroup>```

    答案：abcd

16. **document.readyState为什么值的时候，会触发load事件？**

    a. initial         
    b. loading        
    c. interactive        
    d. complete

    答案：d

17. **下面代码的输出结果是**
    ```
    (function(){
        var x = y = 1;   //此时y没有用var声明，是全局变量，x用var声明，是匿名函数中的私有变量
    })();
    console.log(y);
    console.log(x);
    ```

    a. 1, error       
    b. error, error       
    c. 1, 1       
    d. error, 1

    答案：a

18. **以下哪个样式属性可以触发浏览器的硬件加速渲染？**

    a. transform      
    b. line-height      
    c. font-family     
    d. color

    答案：a

19. **以下哪个语句返回的是HTMLCollection实例？**

    a. document.getElementById('content').childNodes （NodeList）     
    b. document.querySelectorAll('.null') （NodeList）      
    c. document.getElementById('content').children (HTMLCollection)          
    d. document.querySelector('.null')

    答案：c

20. **页面中只有两个div元素A和B，宽高各为100px，其中A是B的子元素，给两个元素分别绑定如下事件：**
```
A.onclick = function(){alert('A');};            
B.onclick = function(){alert('B');};     
```
**点击B元素后，会发生以下哪种情况？**

    a. 什么都不会发生        
    b. 先弹出’A'，再弹出‘B’       
    c. 先弹出‘B’，再弹出‘A’       
    d. 直接弹出‘AB’

    答案：b

21. **关于递归的说法正确的是？（多选）**

    a. 一个递归算法必须包括终止条件和迭代部分     
    b. 二叉树的前序遍历只能用递归来实现
    c. 任何递归过程都可以转化为非递归过程            
    d. 递归过程转化为非递归过程都必须用到栈

    答案：ac

22. **下面关于排序算法说法错误的是？（多选）**

    a. 用希尔排序时，若初始序列无序，则排序效率低                            
    b. 希尔排序是一种稳定的排序算法 （非稳定）
    c. 归并排序在最坏情况下的时间复杂度为O(n^2)      （O(nlogn)）    
    d. 在任何情况下，归并排序都比简单插入排序快

    答案：abcd

23. **windows客户端使用ping命令给服务器发送数据包，数据包最大支持65500字节，网关MTU是1500字节，在分割数据包时不能改变的是？（多选）**

    a. 片偏移       
    b. 目标IP      
    c. 标志        
    d. 标识

    答案：bd

24. **下列选项中哪个可以修改下面输入框中的内容？**```<input id="btn" type="text" value=""/>```

    a. $("#btn").val("test");       
    b. $("#btn").value = "test";     
    c. $("#btn").value("test");     
    d. $("#btn").val = "test";

    答案：a

25. **下面关于设计模式的基本原则说法正确的是？（多选）**

    a. 开闭原则是指一个软件实体对修改开放，对扩展关闭       (对扩展开放，对修改关闭)       
    b. 合成复用原则是指尽量使用继承   (尽量使用对象组合，而不是继承来达到复用的目的)
    c. 依赖倒转原则是指依赖于抽象而不依赖于具体，是针对接口编程  (高层次的模块不应该依赖于低层次的模块，都应该依赖于抽象，抽象不应该依赖于具体实现，具体实现应该依赖于抽象)    
    d.迪米特法则是指一个类对自己依赖的类知道越少越好 (又叫做最少知识原则，一个对象应当对其他对象有尽可能少的了解)

    答案：cd

26. **在页面中有一个ul元素，下列选项中能做到在最后一个li橘子后面增加一个新的li**```<li>菠萝</li>```
    ```
    <ul>
        <li>苹果</li>
        <li>橘子</li>
    </ul>
    ```

    a. ```$("<li>菠萝</li>").appendTo($("ul")); ```         
    b. ```$('ul li').append($('<li>菠萝</li>')); (在每一条li下面添加一条<li>菠萝</li>)```       
    c. ```$('<li>菠萝</li>').insertAfter($('ul'));```           
    d. ```$('<li>菠萝</li>').append($('ul'));```

    答案：a

### 问答题（2道）
1. **说出css3中animation动画都有哪些可以控制的属性**

    + animation-name
    + animation-delay
    + animation-duration
    + animation-timing-function
    + animation-direction
    + animation-iteration-count
2. **说说JavaScript中的new操作符具体做了什么**

    ```
    var obj = new F()
    ```
    1. 创建一个空对象```obj = Object()```
    2. 空对象obj的__ptoto__指针指向构造函数对象F的prototype成员对象
    3. 将构造函数对象F的this指针指向新创建的对象obj，然后调用F函数体，给obj赋值

### 设计题（1道）
1. **在无线端页面实现一个可以无限加载的列表，数据通过后端接口获取。
列表中每一项都包含一张50X50的图片，一段介绍文字，还有“赞同”，“反对”，“收藏”三个按钮，点击按钮向后端发起请求，请求完成后会在页面正中显示一个黑色半透明的信息提示块，显示相应的提示信息，1.5秒后自动消失。设计方案请考虑性能，流量等因素，并对其中用到的一些技术点可以简单介绍下（每个点不用太具体，尽量控制在30个字以内）**

### 编程题（2道）
1. **S和T是两个字符串（他们只由小写字母构成），定义S与T相似当且仅当：**
    1. S和T长度相同。
    2. 对于任意两个位置i和j，如果Si和Sj相同，那么Ti和Tj相同，如果Si和Sj不同，那么Ti和Tj不同，（Si的含义为字符串S在第i个位置的字符，Ti的含义为字符串T在第i个位置的字符）与字符串“abca”相似的串有“abca”，“cdac”，“zetz”等，现在给出一个字符串S，输出与之相似的字符串最小的串。

    输入：只有一行，一个字符串，长度不超过100000，只由小写字母组成

    输出：一行，与之相似的字典序最小的串（只由小写字母组成的串）

    样例：

    输入：helloworld

    输出：abccdedfcg
```
var str;
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var letterObj;
var result;
while(str = read_line()){
    var j = 0;
    result = "";
    letterObj = {};
    for(var i=0;i<str.length;i++){
        if(!letterObj[str[i]]){
            letterObj[str[i]] = letters[j];
            result += letters[j];
            j++;
        }else{
            result += letterObj[str[i]];
        }
    }
    print(result);
}
```
    觉得好像没有什么错，但是笔试的时候只通过17%。。。。
2. **给网站选择一个好的域名是一件令人头痛的事，你希望你的域名在包含给定的一组关键字的同时，最短的长度是多少**

    输入：输入文件的第一行包含一个整数n，表示关键字的数目（n<=10），接下来的n行，每行包含了一个长度小于等于100的字符串，表示一组关键字。

    输出：输出一行一个数字，表示最短的长度

    样例：

    输入：3 ABC CBA AB

    输出：5

### 10.12 百度一面
照例先自我介绍，然后开始问问题

1. **写个表单**

    我写了一个form，里面包含一个label，一个input，一个submit类型的input提交按钮。
他问我 **label里面的for是什么意思**
**表单提交文件** 怎么写```input type="file"```
一个input提交数组，比如一组input，name值相同，如何把这一组数据传到后台
```
<input name="sex[]" value="male">
<input name="sex[]" value="female">
```
2. **如何让input只读**，我答了disabled，面试官说了readonly
**问disabled和readonly区别，哪一个可以往后台传数据**

    Readonly和Disabled它们都能够做到使用户不能够更改表单域中的内容。但是它们之间有着微小的差别，总结如下：

    Readonly只针对input(text / password)和textarea有效，而disabled对于所有的表单元素都有效，但是表单元素在使用了disabled后，当我们将表单以POST或GET的方式提交的话，这个元素的值不会被传递出去，而readonly会将该值传递出去（readonly接受值更改可以回传，disable接受改但不回传数据）。

    一般比较常用的情况是：
    1. 在某个表单中为用户预填了某个唯一识别代码，不允许用户改动，但是在提交时需要传递该值，此时应该将它的属性设置为readonly 。
    2. 经常遇到当用户正式提交了表单后需要等待管理员的信息验证，这就不允许用户再更改表单中的数据，而是只能够查看，由于disabled的作用元素范围大，所以此时应该使用disabled，但同时应该注意的是要将submit button也disabled掉，否则只要用户按了这个按钮，如果在数据库操作页面中没有做完整性检测的话，数据库中的值就会被清除。如果说在这种情况下用readonly来代替disabled的话，若表单中只有input(text / password)和textarea元素，那还是可以的，如果存在其他元素，比如select，用户可以在重新改写值后按回车键进行提交(回车是默认的submit触发按键)
    3. 我们常常在用户按了提交按钮后，利用javascript将提交按钮disabled掉，这样可以防止网络条件比较差的环境下，用户反复点提交按钮导致数据冗余地存入数据库。

    disabled和readonly这两个属性有一些共同之处，比如都设为true，则form属性将不能被编辑，往往在写js代码的时候容易混合使用这两个属性，其实他们之间是有一定区别的：
    + 如果一个输入项的disabled设为true，则该表单输入项不能获取焦点，用户的所有操作（鼠标点击和键盘输入等）对该输入项都无效，最重要的一点是当提交表单时，这个表单输入项将不会被提交。
    + 而readonly只是针对文本输入框这类可以输入文本的输入项，如果设为true，用户只是不能编辑对应的文本，但是仍然可以聚焦焦点，并且在提交表单的时候，该输入项会作为form的一项提交。

    来源： http://www.cnblogs.com/zcy_soft/archive/2011/09/19/2181211.html

3. **session和cookie的区别**

    1. session保存在服务器，客户端不知道其中的信息；cookie保存在客户端，服务器能够知道其中的信息。  
    2. session中保存的是对象，cookie中保存的是字符串。  
    3. session不能区分路径，同一个用户在访问一个网站期间，所有的session在任何一个地方都可以访问到。而cookie中如果设置了路径参数，那么同一个网站中不同路径下的cookie互相是访问不到的。  
    4. session默认需要借助cookie才能正常工作。如果客户端完全禁止cookie，session这种方法将失效,但可以URL重写。  
    5. session在用户会话结束后就会关闭了，但cookie因为保存在客户端，可以长期保存
    6. cookie:是服务端向客户端写入的小的片段信息。cookie信息保存在服务器缓存区，不会在客户端显现。当你第一次登陆一个网站，服务器向你的机器写得片段信息。你可以在Internet选项中找到存放cookie的文件夹。如果不删除，cookie就一直在这个文件夹中。

4. **cookie**
    1. cookie容量(4k)
    2. cookie存在哪里（浏览器硬盘里）
    3. 前台产生了cookie，访问后台，但是不想附带cookie，怎么隔离cookie（好像是这么个意思。我不会，面试官告诉我说，把需要附带cookie访问的文件放在本身域名下，把不想附带cookie访问的文件放在另一个域名下，好像是这样，记不清了）

5. **AJAX是什么**

    我就答了局部刷新

    jquery AJAX实现和原生JS AJAX实现，吐槽一下，我前一天准备了原生js实现AJAX，但是当时傻逼了，面试官问我项目中AJAX怎么实现的，我就傻傻地说因为我们用的jquery库，所以用jquery里的AJAX，但是我其实并没有用过这个，面试官让我写一下代码，然后我说完了就后悔了，我说我写个原生js的吧，他开始说行，但是突然又说原生js有点多，耽误时间，就写jquery的吧。。。。然后我就写了$.ajax({}),对象里有type，url，data，success，error等等属性，然后面试官问怎么控制data的格式，并不知道。。。他告诉我有一个datatype属性。

6. **跨域资源访问（jsonp）**

    1. document.domain:用来得到当前网页的域名。可以给domain赋值，但是有限制，只能赋成当前的域名或者基础域名。利用document.domain实现跨域，前提条件是，这两个域必须属于同一个基础域名！而且所用的协议、端口都要一致。
    两个子域名：
    ```
    aaa.xxx.com
    bbb.xxx.com
    ```
    aaa里的一个网页（a.html）引入了bbb 里的一个网页（b.html），这时a.html里是不能操作b.html里面的内容的。因为document.domain不一样，一个是aaa.xxx.com，另一个是bbb.xxx.com。这时可以通过Javascript将两个页面的domain改成一样的，需要在a.html里与b.html里都加入：
    ```
    document.domain = "xxx.com";
    ```
    这样这两个页面就可以互相操作了。也就是实现了同一基础域名之间的"跨域"。
    2. jsonp:通过script标签引入一个js文件，这个js文件载入成功后会执行我们在url参数中指定的函数，并且会把我们需要的json数据作为参数传入。所以jsonp是需要服务器端的页面进行相应的配合的。比如：有个a.html页面，它里面的代码需要利用ajax获取一个不同域上的json数据，假设这个json数据地址是http://example.com/data.php, 那么a.html中的代码就可以这样：
    ```
    <script>
        function dosomething(jsondata){
            //处理获得的json数据
        }
    </script>
    <script src="http://example.com/data.php?callback=dosomething"></script>
    ```
    因为是当做一个js文件来引入的，所以http://example.com/data.php 返回的必须是一个能执行的js文件，所以这个页面的php代码可能是这样的:
    ```
    <?php
    $callback = $_GET['callback']; //得到回调函数名
    $data = array['a','b','c']; //要返回的数据
    echo &callback.'('.json_encode($data).')';//输出
    ?>
    ```
    最终那个页面的输出结果是：
    ```
    dosomething(['a','b','c']);
    ```
    3. window.name:window对象有个name属性，该属性有个特征：即在一个窗口(window)的生命周期内,窗口载入的所有的页面都是共享一个window.name的，每个页面对window.name都有读写的权限，window.name是持久存在一个窗口载入过的所有页面中的，并不会因新页面的载入而进行重置。比如：有一个页面a.html,它里面有这样的代码：
    ```
    <script>
        window.name = "我是a页面设置的值";
        setTimeout(function(){
            window.location = 'b.html';
       }, 3000);
    </script>
    ```
    b.html的代码如下：
    ```
    <script>
        alert(window.name)  //我是a页面设置的值
    </script>
    ```
    注意，window.name的值只能是字符串的形式，这个字符串的大小最大能允许2M左右甚至更大的一个容量，具体取决于不同的浏览器，但一般是够用了。比如有一个www.example.com/a.html页面,需要通过a.html页面里的js来获取另一个位于不同域上的页面www.cnblogs.com/data.html里的数据。data.html页面里的代码很简单，就是给当前的window.name设置一个a.html页面想要得到的数据值。data.html里的代码：
    ```
    <script>
        window.name="我就是a.html想要的数据，所有可以转化成字符串的数据都可以在这里使用，比如可以传递一个json数据";
    </script>
    ```
    在a.html页面中使用一个隐藏的iframe来充当一个中间人角色，由iframe去获取data.html的数据，然后a.html再去得到iframe获取到的数据。
    充当中间人的iframe想要获取到data.html的通过window.name设置的数据，只需要把这个iframe的src设为www.cnblogs.com/data.html就行了。然后a.html想要得到iframe所获取到的数据，也就是想要得到iframe的window.name的值，还必须把这个iframe的src设成跟a.html页面同一个域才行，不然根据前面讲的同源策略，a.html是不能访问到iframe里的window.name属性的。这就是整个跨域过程。a.html的代码如下：
    ```
    <!doctype html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>window.name跨域</title>
        <script>
            function getData(){
                vra iframe = document.getElementById('proxy');
                iframe.onload = function(){
                    var data = iframe.contentWindow.name;//成功获取到数据
                }
                iframe.src="b.html"//这里的b.html为与a.html同源的随便一个页面。
            }
        </script>
    </head>
    <body>
        <iframe id="proxy" src="http://www.cnblogs.com/data.html" style="display:none" onload="getData()"></iframe>
    </body>
    </html>
    ```
    4. HTML5的window.postMessage(message, targetoRIGIN):可以使用它来向其它的window对象发送消息，无论这个window对象是属于同源或不同源。调用postMessage方法的window对象是指要接收消息的那一个window对象，该方法的第一个参数message为要发送的消息，类型只能为字符串；第二个参数targetOrigin用来限定接收消息的那个window对象所在的域，如果不想限定域，可以使用通配符*。需要接收消息的window对象，可是通过监听自身的message事件来获取传过来的消息，消息内容储存在该事件对象的data属性中。上面所说的向其他window对象发送消息，其实就是指一个页面有几个框架的那种情况，因为每一个框架都有一个window对象。举例说明：
    ```
    <script>
        function onLooar(){
            var iframe = document.getElementById('iframe');
            var win = iframe.contentWindow;
            win.postMessage('我是来自页面a的消息', '*');
        }
    </script>
    <iframe id="iframe" src="http://www.test.com/b.html"  onload="onLoad()"></iframe>
    ```
    b.html代码：
    ```
    <script>
        window.onmessage = function(e){
            e = e || window.event;
            alert(e.data); //我是来自页面a的消息
        }
    </script>
    ```

7. **从地址栏中输入地址，按下回车到页面渲染出来的整个过程**

    1. 输入一个url地址
    2. 浏览器查找域名的ip地址，DNS查找过程如下：
        1. 浏览器缓存 – 浏览器会缓存DNS记录一段时间。操作系统没有告诉浏览器储存DNS记录的时间，这样不同浏览器会储存个自固定的一个时间（2分钟到30分钟不等）。
        2. 系统缓存 – 如果在浏览器缓存里没有找到需要的记录，浏览器会做一个系统调用（windows里是gethostbyname）。这样便可获得系统缓存中的记录。
        3. 路由器缓存 – 接着，前面的查询请求发向路由器，它一般会有自己的DNS缓存。
        4. ISP DNS 缓存 – 接下来要check的就是ISP缓存DNS的服务器。在这一般都能找到相应的缓存记录。
        5. 递归搜索 – 你的ISP的DNS服务器从跟域名服务器开始进行递归搜索，从顶级域名服务器到域名服务器。
    3. 浏览器给web服务器发送一个HTTP请求
    4. 服务器的永久重定向响应。为什么服务器一定要重定向而不是直接发回用户想看的网页内容呢？这个问题有好多有意思的答案。其中一个原因跟搜索引擎排名有关。如果一个页面有两个地址，就像http://www.igoro.com/ 和http://igoro.com/，搜索引擎会认为它们是两个网站，结果造成每一个的搜索链接都减少从而降低排名。而搜索引擎知道301永久重定向是什么意思，这样就会把访问带www的和不带www的地址归到同一个网站排名下。
    5. 浏览器跟踪重定向地址，再次发送http请求。
    6. 服务器“处理”请求
    7. 服务器发回一个HTML响应
    8. 浏览器开始显示HTML(解析html以构建dom树->构建render树->布局render树->绘制render树)
    9. 浏览器发送获取嵌入在HTML中的对象，这些地址都要经历一个和HTML读取类似的过程。
    10. 浏览器发送异步（AJAX）请求
8. **浏览器中有缓存，但是不想使用缓存中的页面，怎么办**

    （在url后面加一个参数，每次请求改变参数，就会重新请求页面，不会使用缓存中的）
9. **各种http状态码的含义**
10. **实现一个302状态重定向的接口**

    （并不会写，面试官告诉说后台的一个写法，还说了一个他认为比较low的方法，意思是封装一个函数，前台一次http请求，通过这个函数再重定向到另一个url）
11. **实现继承，继承中私有属性，公共属性怎么定义，怎么访问一个函数的私有属性**（一开始他问的不清楚，我没太懂他的意思，回答了call函数，后来知道了他的意思，回答了闭包）
12. typeof 和instanceof区别
13. **== 和 ===区别**
14. **overflow各个取值的效果**

    overflow属性规定当内容溢出元素框时发生的事情。
    1. visible(默认值): 内容不会被修剪，会呈现在元素框之外。
    2. hidden:内容会被修剪，并且其余内容是不可见的(当元素宽高固定时)。当元素宽高没有设置时用来清除浮动。overflow(auto或hidden)的元素（默认高度height:auto），将会扩展到它需要的大小以包围它里面的浮动的子元素。
    3. scroll:内容会被修剪，并且浏览器会始终显示滚动条
    4. auto:取决于用户代理。浏览器，例如火狐，会在内容溢出时提供滚动条。
    5. inherit:继承父元素的该属性
15. **实现两个div并排显示**
16. **继续让我实现一个效果，第一行一个div，第二行两个div，第三行一个div，都居中显示**
17. **padding和margin区别**

（好像还有别的问题，但是记不起来了。。。。面了整整一个小时）

### 10.14 百度二面
自我介绍

做过的哪个项目学到的东西最多

讲一下百度前端技术学院都做了哪些任务，具体讲一下个别任务的实现

1. **块级元素和行内元素都有哪些，有什么区别**

    input属于inline-block
    1. 块级元素独占一行，默认情况下，其宽度自动填满其父元素宽度。行内元素不会独占一行，相邻行内元素会排列在同一行里，直到一行排不下，才会换行，其宽度随元素的内容而变化。
    2. 块级元素的宽度，高度，内边距，外边距都可以控制，行内元素的宽度，高度不可以设置，内边距和外边距的上下无效，左右有效。
    3. 块级元素可以容纳其他块级元素和行内元素，行内元素只能容纳其他行内元素和文本。
2. **css盒模型**
3. **position都有哪些值，都什么意思**
    1. absolute：生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。
    2. fixed：生成绝对定位的元素，相对于浏览器窗口进行定位。
    3. relative：生成相对定位的元素，相对于其正常位置进行定位。
    4. static：默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。
    5. inherit：规定应该从父元素继承 position 属性的值。
    6. center: 与absolute一致，但偏移定位是以定位祖先元素的中心点为参考。盒子在其包含容器垂直水平居中。（CSS3）
    7. page: 与absolute一致。元素在分页媒体或者区域块内，元素的包含块始终是初始包含块，否则取决于每个absolute模式。（CSS3）
    8. sticky: 对象在常态时遵循常规流。它就像是relative和fixed的合体，当在屏幕中时按常规流排版，当卷动到屏幕外时则表现如fixed。该属性的表现是现实中你见到的吸附效果。（CSS3）
4. **float和inline-block什么区别**
    1. 文档流:浮动元素会脱离文档流，并使得周围元素环绕这个元素。而inline-block元素仍在文档流内。因此设置inline-block不需要清除浮动。当然，周围元素不会环绕这个元素，你也不可能通过清除inline-block就让一个元素跑到下面去。
    2. 水平位置：不能通过给父元素设置text-align:center让浮动元素居中,但display：inline-block的元素可以居中。事实上定位类属性设置到父元素上，均不会影响父元素内浮动的元素。但是父元素内元素如果设置了 display：inline-block，则对父元素设置一些定位属性会影响到子元素。（这还是因为浮动元素脱离文档流的关系）。
    3. 垂直对齐：inline-block元素沿着默认的基线对齐,可以通过vertical属性设置这个默认基线,比如vertical-align:middle。浮动元素紧贴顶部,无法手动设置垂直对齐基线。
    4. 空白：inline-block包含html空白节点。如果html中一系列元素每个元素之间都换行了，当对这些元素设置inline-block时，这些元素之间就会出现空白。而浮动元素会忽略空白节点，互相紧贴。（解决空白的方法：1.html文件中删除换行。2.设置负外边距。3父元素的font-size：0，然后单独设置子元素的font-size属性。）
5. **display都有哪些取值，display:none和visible:hidden的区别**

    display:none和visible:hidden都能把网页上某个元素隐藏起来，但两者有区别:
    + display:none ---不为被隐藏的对象保留其物理空间，即该对象在页面上彻底消失，通俗来说就是看不见也摸不到。
    + visible:hidden--- 使对象在网页上不可见，但该对象在网页上所占的空间没有改变，通俗来说就是看不见但摸得到。
6. **css选择器都有哪些，优先级是怎么样的**

    1. 基础选择器：标签选择器、类选择器、id选择器、通用选择器
    2. 组合选择器：群主选择器（div, h2, .error{ font-size:14px; color:red;} ）、子选择器(>)、后代选择器( )、同胞选择器(+)
    3. 属性选择器

    优先级：
    1. 直接在标签中通过style设置的样式优先级最高（1000）
    2. id选择器（100）
    3. 类选择器（10）
    4. 标签选择器（1）
    5. 组合选择器通过计算权重和确定优先级
7. **一个样式被后面一个样式覆盖了怎么办，我答了!important，问还有什么其它方法**
8. **title和alt的区别**

    + alt属性是用来指定替换文字，只能用在img、area和input元素中（包括applet元素），用于网页中图片无法正常显示时给用户提供文字说明使其了解图像信息。使用alt属性还具有搜索引擎优化效果，因为搜素引擎是无法直接读取图像的信息的，alt可以为其提供文字信息所以对搜索引擎比较友好。

    + title可以用在任何元素上，把鼠标移动到元素上面，就会显示title的内容，以达到补充说明或者提示的效果。
9. **精灵图（雪碧图）怎么做**
10. **怎么画圆**
11. **解决中文乱码**
12. **两个等于和三个等于的区别**
13. **对象的拷贝**

    深拷贝：
    1. 递归
    2. JSON.parse(JSON.stringify(obj))
    3. Object.create(obj) 但是这个有个问题就是新对象的更改不会影响到原对象，但是原对象的更改会影响到新对象
14. **数组的拷贝**
15. **数组的截取**

    Array.slice()  Array.splice();
16. **都有哪些事件，以瀑布流为例，事件怎么写，**
17. **事件委托怎么实现，事件委托为什么可以委托，**
18. **冒泡和捕获，怎么阻止冒泡，怎么阻止默认事件**
19. **http请求都有哪几种，get和post的区别，get请求是什么样的，写一个get请求**

    HTTP1.1支持7种请求方法：GET、POST、HEAD、OPTIONS、PUT、DELETE和TARCE。在Internet应用中，最常用的方法是GET和POST。

    格式：
    ```
    get url http/1.1
    请求头

    请求体
    ```

20. **http请求状态码含义**
21. **获取url和url中的参数，用代码写出来**
22. **js对象和json字符串的转换**

    ```
    jsontext = JSON.stringify(obj);//js对象序列化为json字符串
    obj = JSON.parse(jsontext)//json字符串解析为js对象
    ```

（就记得这些了）
