// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:'default value'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // tabs: [
    //   {
    //     id: 0,
    //     value: '综合',
    //     isActive: true
    //   },
    //   {
    //     id: 1,
    //     value: '销量',
    //     isActive: false
    //   }, {
    //     id: 2,
    //     value: '价格',
    //     isActive: false
    //   }
    // ],

      
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemChangeSecletced(e){
      //  console.log(e.currentTarget.dataset.flag)   
      let flag=e.currentTarget.dataset.flag
      
      this.triggerEvent('faEvent',flag)
      
    }
   
    

  }
})
