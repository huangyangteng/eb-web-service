# vue组件开发规范

[toc]

## 组件需要提供良好的api，可参考`iview`,`elementui`等成熟的UI库

可以参考一些成熟的UI库，看下别人是如何提供prop,events,和slot的，下图为view的modal组件提供的api:

![image-20191119213704078](https://tva1.sinaimg.cn/large/006y8mN6gy1g93oeyyz5mj31cs0tsn0f.jpg)

## 组件prop必须提供类型验证

```js
Vue.component('my-component', {
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
})
```

## 多页应用组件

