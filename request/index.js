export const request=(params)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      fail:(err)=>{
        reject(err)
      },
      success:(res)=>{
        resolve(res)
      }
    })
  })
}