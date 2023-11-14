## 开始我的表演啦~~

---

## 第一章 基础知识（回顾）

#### 概念

- 表达式：被赋予价值的单行代码
- 反应性：数据被更改时，可以被及时地更新到视图上
- 惰性修饰符：`v-model.lazy`可以在数据变更完成时，反馈到模型上

#### v-for的补充

传入对象数组进入`v-for`的循环之后，会读取到三个基本属性

`v-for = "(value,key,index) in objectArray"`

#### 虚拟DOM

它是真实DOM轻量级的复制对象，可以快速地实现数据比较和更新。

#### 组件

`vue.component(key,object)`

key表示组件的名称，官方推荐驼峰式写法或短横线写法

object表示组件的实现，可以直接传入封装好的组件对象，或者重新定义一个类似`vue对象`的对象

> 说明：这是属于全局定义的内容

## 第二章 前端工具

#### vite

vite是一个模块打包工具，打包高效、支持第三方库、扩展性强

> `webpack`：打包工具的标准，前端项目过大时，打包耗费的时间就越长（个人觉得这就是过去前端无法进行大发展的原因）

#### webpack

`webpack`仅支持`javascript`代码，实现代码打包与热更新，更新效率比`vite`低

1. `entry`：设置入口文件（要打包的文件）

2. `output`：设置出口点，这是一个对象（包括路径、文件名称）

3. `modules:{rules}`：模块下的规则
   
   - `babel`：读取js资源，可以进行文件测试、目录排除、使用工具(`babel-loader`)
   
   - `sass`：读取sass资源，可以进行文件测试，需要添加use数组(`css-loader,postcss-loader,sass-loader`)

4. `plugin:[object]`：使用插件，示例处使用`css`迷你压缩

5. `watch`：观察者模式
