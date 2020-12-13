export default {
  template: `  <div>{{message}}</div>`,
  data() {
    return {
      message: 'Hello'
    }
  },
  methods: {
    btnclick() {

    }
  },
}
// 但是还有有个问题 模板和js代码没有分离
// 故创建App.vue