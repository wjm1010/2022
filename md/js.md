<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: your name
 * @Date: 2021-12-01 13:58:53
 * @LastEditors: your name
 * @LastEditTime: 2021-12-16 18:06:23
-->
new Date().getDate().toString.padStart(2,0)当字符串长度小于第一个参数值，就在前面补第二个参数 padEnd

响应标头：content-Disposition: attachment 设置链接地址下载

Async/Await 是函数Generator的语法糖. Generator之所以可以通过同步实现异步是它具有暂停执行和恢复执行的特性和函数体内外的数据交换和错误处理机制

prefetch 预获取，浏览器空闲时间获取
preload 预加载，提前加在后面会用到关键资源

window.requestAnimationFrame 页面重绘的频率与显示器刷新频率（60hz/75hz）保持同步,requestAnimationFrame不需要像setTimeout那样传递时间间隔

优点：提升性能、防止掉帧，节约资源、节省电源， 函数节流
应用：进度条动画

window.requestIdleCallback(callback[, options]) 在浏览器空闲时间被调用，能够在主事件循环上执行后台和优先级工作，不会影响延迟的关键事件。一个ID，可以把它传入 window.cancelIdleCallback() 方法来结束回调
在空闲回调函数中调用requestIdleCallback()，以便在下一次通过事件循环之前调度另一个回调。

path.resolve()
__dirname：    获得当前执行文件所在目录的完整目录名

__filename：   获得当前执行文件的带有完整绝对路径的文件名
 
process.cwd()：获得当前执行node命令时候的文件夹目录名 
  /：           文件所在目录

变量提升是怎么造成的
因为js引擎并非一行一行的分析和执行程序，而是一段一段的分析执行，当执行一段代码时候，会进行一个准备工作，js在执行上下文的时候，会进行两个阶段，分析，执行。进入执行上下文时，首先会处理函数声明，其次会处理变量声明，在分析的过程中变量已经被声明挂在了变量对象上面，只不过没有具体赋值，所以这些变量和函数能在他们真正被声明之前使用

闭包为什么会造成变量不被回收造成内存泄露
 闭包是有权访问另一个函数作用域变量的函数，当变量进入执行环境的时候，js垃圾回收机制会将其标记为’进入环境‘, 当函数之行结束就会标记为离开环境，在离开环境之后还有的变量则是需要被删除的变量，从逻辑上讲，永远不能释放进入环境的变量，闭包一直保持在使用，不会被回收，js运行内存就那么多，闭包数量多了，一来而去内存就泄漏了。

proxy为什么能跨域
将本地发送的资源请求劫持之后利用服务器与服务器通信不受同源策略限制的原理实现