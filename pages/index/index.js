// pages/login/login.js
import {request} from '../../request/index.js'
import regeneratorRuntime from '../../lib/runtime/runtime'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[],
    navList:[],
    floorList:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperData(),
    this.getNavData(),
    this.getFloorData()
  
  },

//获取swiper数据方法
async getSwiperData(){
  let result=await request({url:'/home/swiperdata'})
    this.setData({
      swiperList:result
    })
    console.log(result );
},
//获取nav数据方法
  async getNavData(){
  let result =await request({url:'/home/catitems'})
    this.setData({
      navList:result   
    })
    console.log(result );
},
//获取 楼层 数据方法
async getFloorData(){
  let result=await request({url:'/home/floordata'})
    this.setData({
      floorList:result
    })
    console.log(result );
},


})