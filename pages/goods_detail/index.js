import { request } from '../../request/index.js'
import regeneratorRuntime from '../../lib/runtime/runtime';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData: []
  },
  goodsDetail: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let goods_id = options.goods_id
    console.log(goods_id);

    this.getGoodsDetailData(goods_id)

  },

  //获取商品详情数据
  async getGoodsDetailData(goods_id) {
    let res = await request({
      url: '/goods/detail',
      data:{goods_id:goods_id}
     })
    console.log(res);
    this.goodsDetail = res

    this.setData({
      detailData: res
    })
  },
  previewImage(e){
    let current=e.currentTarget.dataset.img 
    let urls=this.goodsDetail.pics.map(v=>v.pics_big_url)
    console.log(urls);
    console.log(current);

    wx.previewImage({
      urls: urls,
      current:current
    })
    
    
  }



})