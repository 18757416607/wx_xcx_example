Page({

  /**
   * 页面的初始数据
   */
  data: {
    mytext:'my first text',
    myobj:{
      name:'wqs',
      age:'25'
    },
    color:"redColor",
    array:["1","2","3"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.info('监听页面加载');
  },

  /**
   * 自定义function
   */
  mydemo:function(){
      console.info('执行mydemo');
      this.setData({
        'myobj.name':'wqs_new',
        'myobj.age':'25_new'
      });
  },

  /**
   * 跳转页面
   */
  goMyView:function(){
    console.info("执行goMyView");
    wx.switchTab({
      url:'../index/index'
    });
  },
  /**
   * 
   */
  gotoView:function (){
   if (this.data.color == "redColor"){
     this.setData({
       color : "blackColor"
     })
   }else{
     this.setData({
       color: "redColor"
     })
   }
   var aa = this.data.array
   aa.push("2")
   this.setData({
     array: aa
   })
  
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