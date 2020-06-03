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
  ],
  goodsList:[],

  },
  params:{
    cid:'',
    url:'/goods/search',
    query:'',
    pagesize:10,
    pagenum:1
  },
  totalPage:0,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.params.cid=options.cid ||""
    this.params.query=options.query ||""
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
         let res= await request({url:myparams.url,data:{cid:myparams.cid,query: myparams.query, pagesize: myparams.pagesize, pagenum: myparams.pagenum }})
         console.log(res)
         this.totalPage=Math.ceil(res.totel/myparams.pagesize)
         console.log(this.totalPage);
         this.setData({
           goodsList:[...this.data.goodsList,...res.goods]
         })
         wx.stopPullDownRefresh()
         //数据回来之后关闭下拉刷新样式
    },
    // 监听上拉触底事件  
    onReachBottom(){
      if(this.params.pagenum-this.totalPage>=0){
        wx.showToast({
          title: '最后一页了',
        })
      }else{
        this.params.pagenum++  //请求下一页数据
        wx.showToast({
          title: '第'+this.params.pagenum+'页',
        })
        this.getGoodsListData()  //重新获取数据
      }
    },
    //下拉刷新
    onPullDownRefresh(){
      this.params.pagenum=1;
      this.setData({
        goodsList:[]
      })
      this.getGoodsListData()
    }

})