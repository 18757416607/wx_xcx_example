Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollObj:{
      name1:'scroll y',
      name2:"scroll x",
      scrollTop:50
    }
  },

  upper:function(){
    console.info("移动到顶部触发");
  },
  lower:function(){
    console.info("移动到底部触发");
  },
  scl:function(){
    console.info("滚动久触发");
  },
  gundong:function(){
    this.setData({
      "scrollObj.scrollTop": this.data.scrollObj.scrollTop + 10
    });
  },
  c:function(){
   wx.navigateTo({
     url: '../myswiper/myswiper'
   })
  },
  myicon:function(){
    wx.navigateTo({
      url: '../myicon/myicon',
    })
  },
  myform:function(){
    wx.navigateTo({
      url: '../myform/myform',
    })
  },
  mywxss:function(){
    wx.navigateTo({
      url: '../mywxss/mywxss',
    })
  },
  mybasedata:function(){
    wx.navigateTo({
      url: '../mybasedata/mybasedata',
    })
  },
  myevent:function(){
    wx.navigateTo({
      url: '../myevent/myevent',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})