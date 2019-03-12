Page({

  /**
   * 页面的初始数据
   */
  data: {
    actionHideen:false,
    actionItems:['1','2','3'],
    array: ['美国', '中国', '巴西', '日本'],
    index: 0,
    ls:true,
    qr:true
  },
  action_ac:function(){
    console.info("我是action-sheet onchange");
  },
  open_btn:function(){
    console.info("我是控制action-sheet弹出还是隐藏");
    if(this.data.actionHideen=='false'){
      this.setData({
        actionHideen: true
      });
    }else{
      this.setData({
        actionHideen: false
      });
    } 
  },
  loadingBtn:function(){
    console.info("是否显示loading");
    if(this.data.ls==true){
      this.setData({
        ls:false
      });
      this.ts();
    }
  },
  ts:function(){
    var that = this;
    var timerTem = setTimeout(function () {
      that.setData({
        ls: true
      });
    }, 2000)
  },
  bsubmit:function(e){
    console.info(e.detail);
    console.info("我是form submit");
  },
  breset:function(){
    console.info("我是form reset");
  },
  picker_bc:function(e){
    this.setData({
      index: e.detail.value
    });
    console.info("我是picker onchange");
  },
  redio_bc:function(){
    console.info("我是radio onchange");
  },
  slider_bc:function(){
    console.info("我是slider onchange");
  },
  switch_bc:function(){
    console.info("我是switch onchange");
  },
  showBtn:function(){
    console.info("切换确认按钮");
    if(this.data.qr){
        this.setData({
          qr:false
        });
    }else{
      this.setData({
        qr: true
      });
    }
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