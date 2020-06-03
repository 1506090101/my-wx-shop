let count=0  //初次请求次数


export const request=(params)=>{

//发送请求时加一个Loading效果
wx.showLoading({
  title: '正在加载...',
})
count++

  let baseUrl="https://api-hmugo-web.itheima.net/api/public/v1"
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      url:baseUrl+params.url,
      fail:(err)=>{
        reject(err)
      },
      success:(res)=>{
        resolve(res.data.message)
      },
      complete:()=>{
        count--;
        if(count==0){
          wx.hideLoading()
        }
      }
    })
  })
}