## 2017美团点评前端
1. 如果在Activity中对一些资源以及状态进行保存操作，最好是在生命周期的哪个函数中进行呢？

    答案：onStart()
2. Java中的集合类包括ArrayList、LinkedList、HashMap等，下列关于集合类描述错误的是？
    a. ArrayList和LinkedList均实现了List接口        
    b. ArrayList的访问速度比LinkedList快       
    c. 随机添加和删除元素时，ArrayList的表现更佳
    d. HashMap实现Map接口，它允许任何类型的键和值对象，并允许将null用作键或值
    答案：C
3. 关于startActivityForResult()方法，如果A跳转B，B的launchMode属性为singleInstance，A的onActivityResult()回调方法会在什么时候调用呢？

    答案：B被启动的时候即调用
4. 下列哪个对访问修饰符作用范围由大到小排列是正确的？

    public > protected > default > private  default的访问范围是本包中，而protected的范围是：本包还有它的子类
5. 下面哪些类实现或继承了Collection接口？
    a. HashMap
    b. ArrayList
    c. Vector
    d. Iterator
    答案：B C。Collection包括Set和List，Set包括HashSet和TreeSet，List包括Vector和ArrayList，Map包括HashTable和HashMap。
6. 在下列Android四大组件的回调函数中哪些是在UI主线程执行的呢？
    a. Activity的onCreate()
    b. IntentService的onHandleIntent()
    c. BroadcastReceiver的onReceive()
    d. ContentProvider的query()
    答案：A C
7. 下面关于Android中定义style和theme的描述错误的是？

    a. 都可以减少重复属性设置
    b. style可以作用在Activity上
    c. Theme类可以继承
    d. 一个TextView的style中定义了textColor属性，TextView本身也设置textColor属性，那么TextView本身定义的优先级较高
    答案：C
8. 由多个源文件组成的C程序，经过编辑、预处理、编译、链接等阶段会生成最终的可执行程序。下面哪个阶段可以发现被调用的函数未定义？

    链接
9. HashMap中是用哪些方法解决哈希冲突的?

    答案：二次哈希法， 链地址法
