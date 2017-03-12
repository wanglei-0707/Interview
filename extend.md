## webpack：
Webpack 是一个模块打包器。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源。在编译的时候，要对整个代码进行静态分析，分析出各个模块的类型和它们依赖关系，然后将不同类型的模块提交给适配的加载器来处理。比如一个用 LESS 写的样式模块，可以先用 LESS 加载器将它转成一个CSS 模块，在通过 CSS 模块把他插入到页面的 <style> 标签中执行。Webpack 就是在这样的需求中应运而生。
    1. webpack特点：
        1. 代码拆分：Webpack 有两种组织模块依赖的方式，同步和异步。异步依赖作为分割点，形成一个新的块。在优化了依赖树后，每一个异步区块都作为一个文件被打包。
        2. loader： Webpack 本身只能处理原生的 JavaScript 模块，但是 loader 转换器可以将各种类型的资源转换成 JavaScript 模块。这样，任何资源都可以成为 Webpack 可以处理的模块。
        3. 智能解析：Webpack 有一个智能解析器，几乎可以处理任何第三方库，无论它们的模块形式是 CommonJS、 AMD 还是普通的 JS 文件。甚至在加载依赖的时候，允许使用动态表达式 require("./templates/" + name + ".jade")。
        4. 插件系统：有一个功能丰富的插件系统。
        5. 快速运行：使用异步 I/O 和多级缓存提高运行效率，这使得 Webpack 能够以令人难以置信的速度快速增量编译。
    2. 使用
        1. Webpack 会分析入口文件，解析包含依赖关系的各个文件。这些文件（模块）都打包到 bundle.js 。Webpack 会给每个模块分配一个唯一的 id 并通过这个 id 索引和访问模块。在页面启动时，会先执行 entry.js 中的代码，其它模块会在运行 require 的时候再执行。
        ```
        webpack entry.js bundle.js
        ```
## CommonJS：
node.js遵循CommonJS规范，该规范的核心思想是允许模块通过require方法来同步加载所要依赖的其他模块，然后通过exports或module.exports来导出需要暴露的接口。CommonJS 规范是为了解决 JavaScript 的作用域问题而定义的模块形式，可以使每个模块它自身的命名空间中执行。该规范的主要内容是，模块必须通过 module.exports 导出对外的变量或接口，通过 require() 来导入其他模块的输出到当前模块作用域中。
优点：服务器端模块便于重用，简单容易使用
缺点：1. 同步的加载模块方式不适用于浏览器，同步意味着阻塞，浏览器的资源加载时异步的。2. 不能非阻塞的并行加载多个模块。

## AMD：
Asynchronous Module Definition 规范其实只有一个主要接口 define(id?, dependencies?, factory)，它要在声明模块的时候指定所有的依赖 dependencies，并且还要当做形参传到 factory 中，对于依赖的模块提前执行，依赖前置。id 是模块的名字，它是可选的参数。dependencies 指定了所要依赖的模块列表，它是一个数组，也是可选的参数，每个依赖的模块的输出将作为参数一次传入 factory 中。如果没有指定 dependencies，那么它的默认值是 ["require", "exports", "module"]。
优点：
适合在浏览器环境中异步加载模块
可以并行加载多个模块
缺点：
提高了开发成本，代码的阅读和书写比较困难，模块定义方式的语义不顺畅
不符合通用的模块化思维方式，是一种妥协的实现

## Grunt
一个专为JavaScript提供的构建工具。在项目部署上线前，通常要将源文件压缩，合并，并拷贝到bch或trunk中。
在将js模块化后，又多了一个分析，提取业务代码中所依赖模块的工作。解决这一系列繁重工作的自动化工具，称之为构建工具。在项目中使用grunt时，首先需要往项目里添加两个文件：package.json和Gruntfile.js。package.json:该文件用来为npm存放项目配置的元数据，与grunt关系最大的配置在devDependencies中。Gruntfile.js:注意G的大写，这个文件就是grunt的配置了，其中详细定义了每个任务的细节和执行任务的顺序等。

## Sea.js
简单友好的模块定义规范：Sea.js 遵循 CMD 规范，可以像 Node.js 一般书写模块代码。
自然直观的代码组织方式：依赖的自动加载、配置的简洁清晰.
提供常用插件，非常有助于开发调试和性能优化，并具有丰富的可扩展接口。


## MVC模式
    1. Model：Model代表了描述业务路逻辑，业务模型、数据操作、数据模型的一系列类的集合。这层也定义了数据修改和操作的业务规则。
    2. View：View代表了UI组件，像CSS，JQuery，html等。他只负责展示从controller接收到的数据。也就是把model转化成UI。
    3. Controller：Controll负责处理流入的请求。它通过View来接受用户的输入，之后利用Model来处理用户的数据，最后把结果返回给View。Controll就是View和Model之间的一个协调者。
Django中的MVC：
    1. M：数据存取层，有Django数据库层处理
    2. V：选择显示哪些数据，要显示以及怎样显示的部分，有视图和模板处理
    3. C: 根据用户输入委派视图的部分，有URLConf设置，对给定URL调用适当的Python函数
在Django中C 由框架自行处理。Django更关注的是模型(model)、模板(template)、视图(views),所以Django也被称为MTV框架。

## MVVM(Model-View-View Model)模式
    这个模式提供对View和View Model的双向数据绑定。这使得View Model的状态改变可以自动传递给View。典型的情况是，View Model通过使用obsever模式（观察者模式）来将View Model的变化通知给model。View Model负责暴漏方法，命令，其他属性来操作View的状态，组装model作为View动作的结果，并且触发view自己的事件。
