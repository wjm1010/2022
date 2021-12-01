Async/Await 是函数Generator的语法糖. Generator之所以可以通过同步实现异步是它具有暂停执行和恢复执行的特性和函数体内外的数据交换和错误处理机制

requestAnimationFrame 页面重绘的频率与显示器刷新频率（60hz/75hz）保持同步,requestAnimationFrame不需要像setTimeout那样传递时间间隔

优点：提升性能、防止掉帧，节约资源、节省电源， 函数节流
应用：进度条动画
   
path.resolve()
__dirname：    获得当前执行文件所在目录的完整目录名

__filename：   获得当前执行文件的带有完整绝对路径的文件名
 
process.cwd()：获得当前执行node命令时候的文件夹目录名 
  /：           文件所在目录
