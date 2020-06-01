// pages/login/login.js
import {request} from '../../request/index.js'
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
getSwiperData(){
  request({url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'}).then(result=>{
    this.setData({
      swiperList:result.data.message   
    })
    console.log(result.data.message );
  })
  
},
//获取nav数据方法
getNavData(){
  request({url:'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'}).then(result=>{
    this.setData({
      navList:result.data.message   
    })
    console.log(result.data.message );
  })
  
},
//获取 楼层 数据方法
getFloorData(){
  request({url:'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata'}).then(result=>{
    this.setData({
      floorList:result.data.message   
    })
    console.log(result.data.message );
  })
  
},









})