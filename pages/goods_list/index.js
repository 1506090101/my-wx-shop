// pages/goods_list/index.js
import { request } from '../../request/index.js'

import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
      id:0,
      value:'综合',
      isActive:true
    },
    {
      id:1,
      value:'销量',
      isActive:false
    }, {
      id:2,
      value:'价格',
      isActive:false
    }
  ]

  },
  params:{
    cid:'',
    url:'/goods/search'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.params.cid=options.cid
    this.getGoodsListData()
  },
  changeSelected(e) {
    // console.log(e)
    // console.log(e.detail)
    let myid=e.detail
    let mytabs=this.data.tabs; //取值可以值
    console.log(mytabs)
      mytabs.forEach((v,i)=>{
        // console.log(v)
        // console.log(i)
        v.isActive=false  //干掉所有人
        if(v.id==myid) {
            v.isActive=true  //留下自己
        }
      })
      this.setData({
        tabs:mytabs    //设置值
      })

  },
  async getGoodsListData() {
    let myparams= this.params
    // console(myparams)
         let res= await request({url:myparams.url,data:{cid:myparams.cid}})
         console.log(res)
      
    }

})