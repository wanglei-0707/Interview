## vue2.0
### vue的声明周期
vue的整个生命周期包括：
    1. boforeCreate,
    2. created,
    3. beforeMount,
    4. mounted,
    5. beforeUpdate,
    6. updated,
    7. beforeDestroy,
    8. destroyed.
![vue2.0的生命周期图](img/vuelifecycle.png)

### 数据双向绑定原理
首先将该任务分成几个子任务：

　　 1. 输入框以及文本节点与data中的数据绑定    
　　 2. 输入框内容变化时，data中的数据同步变化。即view => model的变化。           
　　 3. data中的数据变化时，文本节点的内容同步变化。即model => view的变化。
要实现任务一，需要对DOM进行编译，这里有一个知识点：DocumentFragment。Vue进行编译时，就是将挂载目标的所有子节点劫持到DocumentFragment中，经过一番处理后，再将DocumentFragment整体返回插入挂载目标。

    1. Observer监听：利用Object.defineProperty，将要观察的对象，转化成getter/setter，以便拦截对象赋值与取值操作，称之为Observer；
    2. Compiler解析：对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数，称之为Compiler；
    3. Watcher订阅：将Compile的解析结果，与Observer所观察的对象连接起来，建立关系，在Observer观察到对象数据变化时，接收通知，同时更新DOM，称之为Watcher；
    4. 最后，需要一个公共入口对象，接收配置，协调上述三者，称为Vue;

    采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
### 虚拟DOM
为了减少频繁的DOM操作产生的性能问题，引进了虚拟DOM机制。所有的DOM构造都是通过虚拟DOM进行，每当数据变化时，都会重新构造整个DOM树，然后将整个DOM树与上一次的DOM数进行对比，得到DOM结构的区别。然后仅仅将需要变化的部分进行实际的浏览器DOM更新。尽管每一次都需要构造完整的虚拟DOM树，但是因为虚拟DOM是内存数据，性能是极高的，二队实际DOM知识进行不同部分的操作，因而能达到提高性能的目的。

### 对比其他框架
#### Vue和React
相似之处：都适用虚拟DOM，都提供了响应式和组件式的试图组件，有自己的路由和全局状态管理的库等其他一些库。

Vue的优点：
1. 渲染性能更好。虽然都采用虚拟DOM，但是Vue的实现更加轻量化，比React更高效。
2. 更新性能更好。React在某个组件状态变化时，会以该组件为根，重新渲染整个组件子树。Vue中组件的依赖实在渲染过程中自动追踪的，能精确地知晓哪个组件确实需要重新渲染。
3. HTML和CSS：React中他们是js编写的，Vue是在单文件组件中用他们本身的语法实现的。
#### Vue和Angular
Vue的优点：
1. 在API与设计上比Angular简单的多
2. Angular使用双向绑定，Vue在不同组件间强制使用单向数据流，使应用中的数据流更加清晰易懂。
3. Vue中指令和组件分的很清晰，指令只封装DOM操作，组件代表一个自给自足的独立单元，有自己的视图和数据逻辑，Angular中两者有混淆。
4. Vue有更好的性能，容易优化，因为不使用脏检查。Angular中使用脏检查，当watcher越开越多会变得越来越慢，因为作用域内的每一次变化，所有watcher都要重新计算。
