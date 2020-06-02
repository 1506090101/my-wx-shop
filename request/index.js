export const request=(params)=>{
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
      }
    })
  })
}