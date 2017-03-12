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
