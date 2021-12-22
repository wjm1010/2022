<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: your name
 * @Date: 2021-12-16 15:44:16
 * @LastEditors: your name
 * @LastEditTime: 2021-12-16 16:58:43
-->
变更

  功能清除：清理弃用的能力，在v4中废弃的能力都被移除，不再为node.js模块提供自动引用polyfills，专注于模块兼容

  长期缓存：确定的chunk，模块的id和导出名称，这些算法在生产模式下默认开启deterministic。真正的内容哈希[contenthash],v5将使用真正的文件内容hash，之前它只使用内部结构的hash，当只有注释被修改或者被重命名时，这对长期缓存会有应影响，这些变化在压缩后是不可见的

  开发支持：命名代码块id、模块联邦：允许多个webpack一起工作

  支持崭新的 Web 平台特性：
    json模块：严格模块导入时，json不再有命名的导出，迁移：使用默认导出，未使用的属性会被优化丢弃
    导入meta
    资源模块：对表示资源的模块提供了内置支持， 这些模块可以向输出文件夹发送一个文件，或者向 javascript 包注入一个 DataURI。 无论哪种方式，它们都会给出一个 URL 来工作。new URL("./image.png", import.meta.url) 没有打包工具的情况下运行代码
    原生worker的支持 webpack会自动为web worker创建一个新的入口点
    url：支持在请求中处理协议
    异步模块: 基于异步和promise，通过import导入的会被自动处理，不需要额外的语法，require（）导入的会解析到导出的promise

  支持全新的 Node.js 生态特性：支持package.json的exports和imports字段

  开发体验：
    优化构建目标：允许传递一个目标文件，并且支持目标的版本
    改进了统计测试格式的可读性和冗余性，改进了默认值
    进度以前它只计算已处理的模块。现在它可以计算 "入口"、"依赖" 和 "模块"。 现在所有的模块都默认显示了
    自动添加唯一命名
    自动添加公共路径：Webpack 5 会在可能的情况下自动确定 output.publicPath。
    Typescript 类型： 5 从源码中生成 typescript 类型，并通过 npm 包暴露它们。
  
  构建优化:
    嵌套的tree-shaking：能够自动跟踪对导出的嵌套属性的访问，清除未使用的导出和混淆导出
    内部模块 tree-shaking：optimization.innerGraph，在生产模式下是默认启用的，它可以对模块中的标志进行分析，找出导出和引用之间的依赖关系。
    CommonJs: Webpack 5 增加了对一些 CommonJs 构造的支持，允许消除未使用的 CommonJs 导出，并从 require() 调用中跟踪引用的导出名称。当检测到不可分析的代码时，webpack 会放弃，并且完全不跟踪这些模块的导出信息（出于性能考虑）。
    模块合并
    通用 Tree Shaking 改进

  性能优化:
    持久缓存: 根据使用情况自动创建多个缓存文件，以优化对缓存的读写访问
  
  没有 JS 的代码块不包含 JS 代码的块，将不再生成 JS 文件。 这就允许有只包含 CSS 的代码块

  日志记录

  工作队列

  全新的监听

  编译的代码生成功能作为单独的编译阶段
