// pages/first/first.js
//获取应用实例
const app = getApp()

Page({
	data: {
		num: 0,
		num1: 0,
		num2: 0,
		num3: 0,
		data1: '',
		data2: '',
		data3: '',
		data4: '',
		imgList: [
			"http://m.qpic.cn/psc?/V50sID4L2mK4IE0UDNLt093sm117tMDy/45NBuzDIW489QBoVep5mcdHooszXkRypqIGEOGl8assDHgkBV4kNRwam562ED4A10VPG0P8KA6y3QsDq0oOQTPJF.Gp4rNXCIa3bb.VJE9o!/b&bo=igKaAQAAAAABFyM!&rf=viewer_4",
			"http://m.qpic.cn/psc?/V50sID4L2mK4IE0UDNLt093sm117tMDy/45NBuzDIW489QBoVep5mcc.MJ*Vu3.vJ*2Gi1mcYi3LgB326647rkVJv7NteSQqj1apHaJKmxFPjjUpcnfSwT*n3VwkjVHcvtU9MX7k6jFQ!/b&bo=RAVZAwAAAAADZ1k!&rf=viewer_4",
			"http://m.qpic.cn/psc?/V50sID4L2mK4IE0UDNLt093sm117tMDy/45NBuzDIW489QBoVep5mcXcypRqaDRvBEXOUI9oQ3ExOA19uw5tzYFMaJUMUNaJKSOHrUtKMUVBB7pRMmeUjlMkz6Xxba4ZlwKAFBNb8amw!/b&bo=OAQrBgAAAAABFyE!&rf=viewer_4",
			"http://m.qpic.cn/psc?/V50sID4L2mK4IE0UDNLt093sm117tMDy/45NBuzDIW489QBoVep5mcXcypRqaDRvBEXOUI9oQ3Ex3Xxxn*dy.klBugxLI*ozgfHOV2vEBp2bRqeWIQtVFa9obwV2m.NsYuLKSu2wVrXc!/b&bo=nQKOAQAAAAABFyA!&rf=viewer_4"
	
		], 

		  //图片路径
		skinStyle: "" , //深夜主题变量
		CustomBar: app.globalData.CustomBar,
		TabCur: 0,
		tabNav: ['三肥专用', '三人', '四人']
	},
	//预览图片，放大预览
	// preview(event) {
	// 	console.log(event.currentTarget.dataset.src)
	// 	let currentUrl = event.currentTarget.dataset.src
	// 	wx.previewImage({
	// 		current: currentUrl, // 当前显示图片的http链接
	// 		urls: this.data.imgList // 需要预览的图片http链接列表
	// 	})
	// },
	// clickImg: function (e) {
	// 	var that = this
	// 	var imgUrl = this.data.imgUrl;
	// 	//所有图片
	// 	wx.previewImage({
	// 		current: imgUrl,//当前图片地址
	// 		urls: imgUrl
			
			
	// 	})
	// },
	preview(event) {
		console.log(event)
		console.log(event.currentTarget.dataset.src)
		let currentUrl = event.currentTarget.dataset.src
		wx.previewImage({
			current: currentUrl, // 当前显示图片的http链接
			urls: this.data.imgList // 需要预览的图片http链接列表
		})
	},
	

	tabSelect(e) {
		console.log(e);
		this.setData({
			TabCur: e.currentTarget.dataset.id,
			scrollLeft: (e.currentTarget.dataset.id - 1) * 60
		})
	},
	//深夜主题
	onLoad: function (options) {
	},
	switchChange: function (e) {
		// console.log(e)
		// console.log(e.detail.value)
		var that = this
		//设置全局变量
		if (e.detail.value == true) {
			app.globalData.skin = "dark"
		} else {
			app.globalData.skin = ""
		}
		that.setData({
			skinStyle: app.globalData.skin
		})
		//保存到本地
		wx.setStorage({
			key: "skin",
			data: app.globalData.skin
		})
		console.log(app.globalData.skin)
	},
	//事件处理函数
	/*点击减号*/
	bindMinus: function () {
		var num = this.data.num;
		num = num - 0.5;
		this.setData({
			num: num,
		})
	},
	bindMinus1: function () {
		var num1 = this.data.num1;
		num1 = num1 - 0.5;
		this.setData({
			num1: num1,
		})
	},
	bindMinus2: function () {
		var num2 = this.data.num2;
		num2 = num2 - 0.5;
		this.setData({
			num2: num2,
		})
	},
	bindMinus3: function () {
		var num3 = this.data.num3;
		num3 = num3 - 0.5;
		this.setData({
			num3: num3,
		})
	},

	/*点击加号*/
	bindPlus: function () {
		var num = this.data.num;
		num = num + 0.5;

		this.setData({
			num: num,

		})
	},
	bindPlus1: function () {
		var num1 = this.data.num1;
		num1 = num1 + 0.5;

		this.setData({
			num1: num1,

		})
	},
	bindPlus2: function () {
		var num2 = this.data.num2;
		num2 = num2 + 0.5;

		this.setData({
			num2: num2,

		})
	},
	bindPlus3: function () {
		var num3 = this.data.num3;
		num3 = num3 + 0.5;

		this.setData({
			num3: num3,

		})
	},
	/*输入框事件*/
	bindManual: function (e) {
		var num = e.detail.value;
		//var minusStatus = num > 0 ? 'normal' : 'disable';		
		this.setData({
			num: num,
			//minusStatus: minusStatus
		})
	},
	bindManual1: function (e) {
		var num1 = e.detail.value;
		//var minusStatus = num > 0 ? 'normal' : 'disable';		
		this.setData({
			num1: num1,
			//minusStatus: minusStatus
		})
	},
	bindManual2: function (e) {
		//console.log(e)
		var num2 = e.detail.value;
		//var minusStatus = num > 0 ? 'normal' : 'disable';		
		this.setData({
			num2: num2,
			//minusStatus: minusStatus
		})
	},
	bindManual3: function (e) {
		//console.log(e)
		var num3 = e.detail.value;
		//var minusStatus = num > 0 ? 'normal' : 'disable';		
		this.setData({
			num3: num3,
			//minusStatus: minusStatus
		})
	},
	btn: function () {
		var num = this.data.num;
		wx.showModal({
			title: '重置数据',
			content: '确定要重置该数据？',
			showCancel: true,//是否显示取消按钮
			cancelText: "否",//默认是“取消”
			cancelColor: 'skyblue',//取消文字的颜色
			confirmText: "是",//默认是“确定”
			confirmColor: 'skyblue',//确定文字的颜色
			success: (res) => {
				if (res.cancel) {
					//点击取消,默认隐藏弹框
					this.setData({
						num: num
					})

				} else if (res.confirm) {
					//点击确定
					this.setData({
						num: 0
					})

				}
			}
		})

	},
	btn1: function () {
		var num1 = this.data.num1;
		wx.showModal({
			title: '重置数据',
			content: '确定要重置该数据？',
			showCancel: true,//是否显示取消按钮
			cancelText: "否",//默认是“取消”
			cancelColor: 'skyblue',//取消文字的颜色
			confirmText: "是",//默认是“确定”
			confirmColor: 'skyblue',//确定文字的颜色
			success: (res) => {
				if (res.cancel) {
					//点击取消,默认隐藏弹框
					this.setData({
						num1: num1
					})
				} else if (res.confirm) {
					//点击确定
					this.setData({
						num1: 0
					})

				}
			}
		})
	},
	btn2: function () {
		var num2 = this.data.num2;
		wx.showModal({
			title: '重置数据',
			content: '确定要重置该数据？',
			showCancel: true,//是否显示取消按钮
			cancelText: "否",//默认是“取消”
			cancelColor: 'skyblue',//取消文字的颜色
			confirmText: "是",//默认是“确定”
			confirmColor: 'skyblue',//确定文字的颜色
			success: (res) => {
				if (res.cancel) {
					//点击取消,默认隐藏弹框
					this.setData({
						num2: num2
					})
				} else if (res.confirm) {
					//点击确定
					this.setData({
						num2: 0
					})

				}
			}
		})
	},
	btn3: function () {
		var num3 = this.data.num3;
		wx.showModal({
			title: '重置数据',
			content: '确定要重置该数据？',
			showCancel: true,//是否显示取消按钮
			cancelText: "否",//默认是“取消”
			cancelColor: 'skyblue',//取消文字的颜色
			confirmText: "是",//默认是“确定”
			confirmColor: 'skyblue',//确定文字的颜色
			success: (res) => {
				if (res.cancel) {
					//点击取消,默认隐藏弹框
					this.setData({
						num3: num3
					})
				} else if (res.confirm) {
					//点击确定
					this.setData({
						num3: 0
					})

				}
			}
		})
	},

	//转发小程序
	onShareAppMessage: function () {
		return {
			"title": app.globalData.appName
		}
	},

	//保存数据
	savedata: function () {
		var data1 = this.data.num;
		var data2 = this.data.num1;
		var data3 = this.data.num2;
		//调用API向本地缓存存入数据
		// var searchData = wx.getStorageSync('searchData') || [] 
		// searchData.push(this.data.num)  
		// wx.setStorageSync('searchData', searchData)
		wx.setStorage({//存储到本地
			key: "data1",
			data: data1
		}),
			wx.setStorage({//存储到本地
				key: "data2",
				data: data2
			}),
			wx.setStorage({//存储到本地
				key: "data3",
				data: data3
			})
		wx.showLoading({
			title: '保存中',
		})

		setTimeout(function () {
			wx.showToast({
				title: '保存成功',
				icon: 'success'
			})
		}, 800)

	},
})