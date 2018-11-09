## 项目用到less
```
npm install less less-loader axiso vuex bootstrap
```
- mock模拟数据
- api 代表的是所有的接口
- base 基础组件
- components 代表的是页面组件
##随时遇到的问题
- 快捷键
```text
meta:vp再按tab键，使用手机视口
```
- 关于position定位的两篇文章
```
http://blog.jobbole.com/49320/
https://www.cnblogs.com/keyi/p/5818103.html
```
- 我对绝对定位和相对定位的理解
相对定位是相对于本身原来的位置，可以想象为拼图，先拼好图版（包括本身），再移动这个图版，原位置保留；
绝对定位是相对于父级非static元素，还是想象为拼图，先拼好其他图版（不包括本身），再找父级非static元素，再定位这个元素，不影响其他元素，它是漂着的
- 关于flex的两篇文章
```
http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
http://www.ruanyifeng.com/blog/2015/07/flex-examples.html
```
### 热门图书的功能
- 先写服务端，确保数据能正常返回
- 增加api方法，实现调取数据的功能
- 在哪个组件中应用这个api，如果是一个基础组件，需要用这些数据，在使用这个组件的父级中调用这个方案，将数据传递给基础组件
- 写一个基础组件
  - 创建一个.vue文件
  - 在需要使用这个组件的父级中应用这个组件
  - 在组件中注册
  - 以标签的形式引入


### Vue中computed、watch、methods的区别（自己总结）
 - computed：别人（依赖的属性）变化我变化
 - watch：我变化别人变化
 - methods：别人（界面，比如按钮触发）让我变化我变化

### 组件
  - 组件分全局组件和局部组件
    - 全局组件用Vue.component()来定义，一般写插件时用
    - 局部组件三部曲
      1. 创建
      2. 注册
      3. 使用

### this.之后可以跟的内容
  - data属性
  - computed属性
  - methods方法
  - 父组件通过属性传值传递过来的props值
    - 因此，他们之间的名字不能重名

### 父传子，子传父
  - 父传子
    1. 通过“v-bind”或简写“:”绑定属性
    2. 在子组件中通过props['属性名']定义属性值
    3. 子组件通过this.调用
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <script src="node_modules/vue/dist/vue.js"></script>
    </head>
    <body>
    <div id="app">
        父亲：{{money}}
        <br>
        儿子：<child :m="money"></child>
    </div>
    <script>
        let child={
            template:'<div>{{m}}</div>',
            data(){
                return {
                    m:0
                }
            },
            props:['m']
        };
        new Vue({
            el:'#app',
            data:{
                money:200
            },
            components:{
                child
            }
        });
    </script>
    </body>
    </html>
    ```
  - 子传父
    1. 通过“v-on”或简写“@”绑定事件
    2. 在父组件中methods中定义方法，方法中接收值
    3. 子组件通过this.$emit触发方法
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <script src="node_modules/vue/dist/vue.js"></script>
    </head>
    <body>
    <div id="app">
        父亲：{{money}}
        <br>
        儿子：
        <child :m="money" @more-money="moreMoney"></child>
    </div>
    <script>
        let child = {
            template: '<div>{{m}}<button @click="moreMoney">多要钱</button></div>',
            data() {
                return {
                    m: 0
                }
            },
            props: ['m'],
            methods: {
                moreMoney() {
                    this.$emit('more-money', 800);
                }
            }
        };
        new Vue({
            el: '#app',
            data: {
                money: 200
            },
            components: {
                child
            },
            methods: {
                moreMoney(val) {
                    this.money = val;
                }
            }
        });
    </script>
    </body>
    </html>
    ```
