// pages/liveroom/roomname/roomname.js
Page({

	/**
	 * 页面的初始数据
	 */
  data: {
    roomName: '',   // 房间名称
    userName: '',   // 用户名称
    tapTime: ''     // 防止两次点击操作间隔太快
  },
  // 绑定输入框
  bindRoomName: function (e) {
    var self = this;
    self.setData({
      roomName: e.detail.value
    });
  },
  // 进入rtcroom页面
  create: function () {
    var self = this;
    // 防止两次点击操作间隔太快
    var nowTime = new Date();
    if (nowTime - this.data.tapTime < 1000) {
      return;
    }
    if (/[<>*{}()^%$#@!~&= ]/.test(self.data.roomName) || !self.data.roomName) {
      wx.showModal({
        title: '提示',
        content: '直播间名称不能为空或包含特殊字符',
        showCancel: false
      });
      return;
    };
    var url = '../room/room?type=create&roomName=' + self.data.roomName + '&userName=' + self.data.userName;
    wx.redirectTo({
      url: url
    });
    wx.showToast({
      title: '进入房间',
      icon: 'success',
      duration: 1000
    })
    self.setData({ 'tapTime': nowTime });
  },

	/**
	 * 生命周期函数--监听页面加载
	 */
  onLoad: function (options) {
    this.setData({
      userName: options.userName || ''
    });
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
    return {
      title: '直播体验室',
      path: '/pages/liveroom/roomlist/roomlist',
      imageUrl: '../../Resources/share.png'
    }
  }
})