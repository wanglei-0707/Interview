## 《node.js权威指南》学习笔记
### 第一章 node.js介绍
node.js的首要目标是提供一种简单的、用于创建高性能服务器及可以在该服务器中运行的各种应用程序的开发工具

#### node.js能够解决的问题
web应用程序中，一个主要的瓶颈是服务器所支持的最大同时连接用户量。node.js修改了客户端和服务器端之间的链接方式，解决了这个问题。因为它并不为每个客户端连接创建一个新的线程，而是为每个客户端连接触发一个在node.js内部进行处理的事件。

#### 非阻塞型I/O机制及事件环机制

#### node.js适合开发的应用程序
应用程序需要处理大量并发的输入/输出，而在向客户端发出响应之前，应用程序内部并不需要进行非常复杂的处理。如聊天服务器、综合服务类网站或电子商务网站的服务器。

### 第二章 node.js基础知识
#### setTimeout()/clearTimeout() setInterver()/clearInterval() unref()/ref()
这两对方法与js中的响应方法类似。不同的是返回的定时器对象有unref和ref方法。定时器的unref()方法可以取消setTimeout()、setInterver()函数中指定的回调函数的调用。ref()方法可以恢复回调函数的调用。

#### 与模块相关的全局函数、对象、变量
1. require函数：加载模块。首次加载后将模块缓存到内存缓存区中，相同模块的多次引用得到的都是同一个模块对象，相同模块的多次引用不会引起模块代码的多次执行。
2. require.resolve函数：查询某个模块文件的带有完整绝对路径的文件名。该函数在使用时不会加载该模块
3. require.cache对象：该对象代表缓存了所有已经被加载的模块的缓存区，是一个“键名/键值”的结构，键名为每个模块的完整文件名，键值为各模块对象。
4. \__filename :在模块内部可以使用 \__filename获取当前模块文件的带有完整绝对路径的文件名。
5. \__dirname :在模块内部可以使用 \__dirname获取当前模块文件所在目录的完整绝对路径。

### 事件处理机制及事件环机制
#### EventEmitter类
用于实现各种事件处理的event模块中定义了一个EventEmitter类，所有可能触发事件的对象都是一个继承了EventEmitter类的子类的实例对象。EventEmitter类的各种方法如下(emitter代表一个继承了EventEmitter类的子类实例，event代表事件名，listener代表事件处理函数)：
1. emitter.addListener(event, listener)：绑定事件处理函数
2. emitter.on(event, listener)：同addListener
3. emitter.once(event, listener)：绑定事件处理函数，执行一次后立即解除
4. emitter.removeListener(event, listener)：移除指定事件处理函数
5. emitter.removeAllListeners([event])：移除指定事件的所有事件处理函数，如果没有传入参数，则移除所有的事件的所有事件处理函数
6. emitter.setMaxListeners(n)：修改最多可以绑定的事件处理函数的数量。默认最多可以绑定10个。
7. emitter.listeners(event)：返回该事件的所有事件处理函数构成的数组。
8. emitter.emit(event, [arg1], [arg2], [...])：触发某个事件。从第二个参数开始是传给事件处理函数的参数。如果该事件绑定了多个事件处理函数会按顺序执行一遍。
9. EventEmitter.listenerCount(emitter, event)：获取某个对象的指定事件的事件处理函数的数量。
10. emitter.on('newListener', function(event, listener))：当继承了EventEmitter类的子类实例对象绑定事件处理函数时，都将触发EventEmitter类的newListener事件。
11. emitter.on('removeListener', function(event, listener))：当继承了EventEmitter类的子类实例对象取消事件处理函数时，都将触发EventEmitter类的removeListener事件。

#### 事件环机制
在某事件的回调函数的执行过程中，转而处理新的事件(包括触发事件、初始化事件的回调函数)，在该事件处理完毕后，转而继续处理原回调函数。这种环状处理机制在node.js中称为事件环机制。

### 第4章 模块与npm包管理工具
#### require  module.exports
####  从node_modules目录中加载模块
如果在require函数中只使用`require('bar.js')`这种方式指定文件名，但不指定路径，则node.js将该文件视为node_modules目录下的一个文件。例如在一个完整路径为"/home/ry/project/app.js"的app.js文件中使用上述代码，则node.js为bar.js模块使用的加载路径依次为：
1. /home/ry/project/node_modules/bar.js
2. /home/ry/node_modules/bar.js
3. /home/node_modules/bar.js
4. /node_modules/bar.js

使用这种方式加载模块比指定路径加载模块的方式更灵活。因为可以移动模块文件的位置而不需要修改代码中指定的路径。

如果在操作系统中的环境变量中设置了NODE_PATH变量，使用上面指定模块名的方法时，当node.js从其他路径中寻找不到需要被加载的模块文件时，将从NODE_PATH变量值所指向的磁盘目录中寻找并加载该模块文件。为了获得更好的性能，node.js推荐将模块文件放置在全局目录中。

#### 模块对象的属性
1. module.id:默认情况下主模块的id为‘.’,其他模块的id为该模块文件的绝对路径。在模块文件中可以修改这个属性。
2. module.filename:当前模块的文件名，包含绝对路径
3. module.loaded:布尔值，表示当前模块是否加载完毕。
4. module.parent:当前模块的父模块对象，即调用当前模块的模块对象
5. module.children:为一个数组，存放当前模块的所有子模块对象，即当前模块中已加载的所有模块对象。

### 第5章 使用Buffer类处理二进制数据
#### 创建Buffer类
Buffer类是一个可以在任何模块内使用的全局类，使用时不需要加载任何模块。有三种形式的构造函数：
1. new Buffer(size):被创建的Buffer对象有一个length属性，为缓存区的大小。`var buf = new Buffer(128)`,可以使用Buffer对象的fill方法初始化缓存区中的内容`buf.fill(value, [offset], [end])`value为必须参数，表示需要被写入的值，offset为可选参数，表示从第几个字节处开始写入被指定的数值，默认值为0.end为可选参数，表示一直写到第几个字节处，默认值为Buffer对象的大小，即书写到缓存区的底部。
2. new Buffer(array):使用一个数组初始化缓存区。
3. new Buffer(str, [encoding]):str为必须参数，用于初始化缓存区的字符串，encoding为可选参数，用于指定文字编码格式的字符串，默认为"utf8".

#### 字符串与Buffer缓存区
1. 在计算字符串长度时，以文字作为一个单位，在计算缓存区长度时，以字节为一个单位。
```
> str = '我喜爱编程';
'我喜爱编程'
> buf = new Buffer('我喜爱编程');
<Buffer e6 88 91 e5 96 9c e7 88 b1 e7 bc 96 e7 a8 8b>
> str.length;
5
> buf.length;
15
```
2. 字符串和Buffer对象都可以通过索引值查找数据。
3. 字符串不可以修改，但Buffer对象是可以修改的
4. 字符串拥有很多方法，如indexOf(),match(),search(),substring(),slice()等方法，但Buffer对象只有slice()方法，用法与字符串的slice方法相同。区别是字符串中slice方法会返回一个新的字符串，是原字符串子串的副本，但Buffer对象的slice方法返回的是引用，如果修改使用slice方法取出的数据，则缓存区中保存的数据也将被修改。
5. Buffer对象的toString()方法可以将Buffer对象中保存的数据转换为字符串。`buf.toString([encoding], [start], [end])` encoding可选，指定Buffer对象中保存的文字编码格式，默认为utf8.start和end也是可选，用于指定被转换数据的起始位置和终止位置，以字节为单位。toString方法返回经过转换后的字符串。
6. 向已经创建的Buffer对象中写入字符串，可以使用Buffer对象的write方法。`buf.write(str, [offset],[length],[encoding])`.
```
> buf = new Buffer('我喜爱编程');
<Buffer e6 88 91 e5 96 9c e7 88 b1 e7 bc 96 e7 a8 8b>
> buf.write('热', 3, 3);
3
> buf.toString();
'我热爱编程' //会覆盖原字符
```
7. 也可以使用StringDecoder对象将Buffer对象转换为字符串，作用与toString方法相同，但是对于urf8编码格式的字符串提供更好的支持。使用前需要先加载string_decoder模块，然后创建一个StringDecoder对象。使用StringDecoder对象的write方法将Buffer对象中的数据转换为字符串。
```
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder([encoding])
decoder.write(buffer)
```
StringDecoder对象的有用之处在于，当需要将多个Buffer对象中的二进制数据转换为文字的场合。
```
> str1 = new Buffer([0xe6, 0x88, 0x91, 0xe5, 0x96]);
<Buffer e6 88 91 e5 96>
> str2 = new Buffer([0x9c, 0xe7, 0x88, 0xb1]);
<Buffer 9c e7 88 b1>
> var StringDecoder = require('string_decoder').StringDecoder;
undefined
> var decoder = new StringDecoder([encoding])
undefined
> decoder.write(str1);
'我'
> decoder.write(str2);
'喜爱'
```

####　Buffer类的类方法
1. isBuffer方法：判断一个对象是否为一个Buffer对象。`Buffer.isBuffer(buf)`
2. byteLength方法:计算一个指定字符串的字节数。`Buffer.byteLength(string, [encoding])`
3. concat方法:将几个Buffer对象结合创建为一个新的Buffer对象。`Buffer.concat(list, [totalLength])`.list为必须参数，是一个存放了多个Buffer对象的数组，concat方法将把其中的所有Buffer对象联结创建为一个Buffer对象。totalLength可选，指定被创建的Buffer对象的总长度。如果list为空数组或totalLength为0，则返回一个长度为0的Buffer对象。如果list只有一个Buffer对象，则直接返回该对象。
4. isEncoding方法：检测一个字符串是否为一个有效的编码格式字符串。`Buffer.isEncoding(encoding)`
