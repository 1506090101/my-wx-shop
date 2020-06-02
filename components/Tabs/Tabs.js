// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
       tabs:{
         type:Array,
         value:[]
       }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemChangeSecletced(e){
      let flag=e.currentTarget.dataset.flag
      this.triggerEvent('faEvent',flag)
    }

  }
})
