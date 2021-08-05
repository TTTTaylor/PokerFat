// pages/first/first.js
//获取应用实例
const app = getApp()

Page({
	data: {
		items: [
			{ value: '0.5', name: '+0.5',checked:"true"},
			//{ value: '1', name: '+1'},
			{ value: '2', name: '+2'},
			{ value: '3', name: '+3' },
			{ value: '4', name: '+4' },
			{ value: '6', name: '+6' }
		],
		num0: 0.5,
		num: 0,
		num1: 0,
		num2: 0,
		num3: 0,
		data1: '',
		data2: '',
		data3: '',
		data4: '',
		pws:5354,
		inpws:'',
		ifpws:2,
		imgList: [
			"http://m.qpic.cn/psc?/V50sID4L2mK4IE0UDNLt093sm117tMDy/45NBuzDIW489QBoVep5mcdHooszXkRypqIGEOGl8assDHgkBV4kNRwam562ED4A10VPG0P8KA6y3QsDq0oOQTPJF.Gp4rNXCIa3bb.VJE9o!/b&bo=igKaAQAAAAABFyM!&rf=viewer_4",
			"http://m.qpic.cn/psc?/V50sID4L2mK4IE0UDNLt093sm117tMDy/45NBuzDIW489QBoVep5mcSQGhlBkrJAKG25nHzwllvQVlL6panx1SpyL6IVK4hGIcHY95ul*5ZMAq*QjUG31Nxgxk6xFSAD6akYp*WRWIE4!/b&bo=JAk4BAAAAAABFyE!&rf=viewer_4",
			"http://m.qpic.cn/psc?/V50sID4L2mK4IE0UDNLt093sm117tMDy/45NBuzDIW489QBoVep5mcXcypRqaDRvBEXOUI9oQ3ExOA19uw5tzYFMaJUMUNaJKSOHrUtKMUVBB7pRMmeUjlMkz6Xxba4ZlwKAFBNb8amw!/b&bo=OAQrBgAAAAABFyE!&rf=viewer_4",
			"http://m.qpic.cn/psc?/V50sID4L2mK4IE0UDNLt093sm117tMDy/45NBuzDIW489QBoVep5mcXcypRqaDRvBEXOUI9oQ3Ex3Xxxn*dy.klBugxLI*ozgfHOV2vEBp2bRqeWIQtVFa9obwV2m.NsYuLKSu2wVrXc!/b&bo=nQKOAQAAAAABFyA!&rf=viewer_4",
			"http://m.qpic.cn/psc?/V50sID4L2mK4IE0UDNLt093sm117tMDy/45NBuzDIW489QBoVep5mcYueKcPMc.8tOhC60c6FPVHBRP75SCB2Rxd4rbT.aZTc3ymz4rwZ.L3JMfH1HTzdNcKjTWF3doQi.Pu4xD2*jzk!/b&bo=GAKjAgAAAAADN6k!&rf=viewer_4"
		], 

		  //图片路径
		CustomBar: app.globalData.CustomBar,
		TabCur: 0,
		tabNav: ['合肥专用', '三人', '四人']
	},
	bgimg: function () {
		//相册中获取
		wx.chooseImage({
			count: 1,
			success: function (res) {
				console.log(res);
				wx.previewImage({
					urls: [res.tempFilePaths[0]],
				})
			},
		})
	},

	//倍数选择
	radioChange(e) {
		console.log('radio发生change事件，携带value值为：', e.detail.value)
		var anumber = e.detail.value
		this.setData({
			anumber: e.detail.value,     //通过setData方法将值存进去
		})
		// const items = this.data.items
		// for (let i = 0, len = items.length; i < len; ++i) {
		// 	items[i].checked = items[i].value === e.detail.value
		// }

		// this.setData({
		// 	items
		// })
		console.log(anumber)
	},

	//预览图片
	preview(event) {
		console.log(event)
		console.log(event.currentTarget.dataset.src)
		let currentUrl = event.currentTarget.dataset.src
		wx.previewImage({
			current: currentUrl, // 当前显示图片的http链接
			urls: this.data.imgList // 需要预览的图片http链接列表
		})
	},
	
	//导航选择
	tabSelect(e) {
		console.log(e);
		this.setData({
			TabCur: e.currentTarget.dataset.id,
			scrollLeft: (e.currentTarget.dataset.id - 1) * 60
		})
	},

	//事件处理函数
	/*点击减号*/
	bindMinus: function (e) {
		var num = this.data.num;		
		
		if (this.data.anumber>0){
			var cate = this.data.anumber;
		}else{
			var cate = this.data.num0;
		}		
		num = num - cate;
		this.setData({
			num: num,
		})
		console.log(this.data.anumber)
		console.log(cate)
		console.log(num)
		
	},
	
	bindMinus1: function () {
		var num1 = this.data.num1;
		if (this.data.anumber > 0) {
			var cate = this.data.anumber;
		} else {
			var cate = this.data.num0;
		}	
		num1 = num1 - cate;
		this.setData({
			num1: num1,
		})
	},
	bindMinus2: function () {
		var num2 = this.data.num2;
		if (this.data.anumber > 0) {
			var cate = this.data.anumber;
		} else {
			var cate = this.data.num0;
		}	
		num2 = num2 - cate;
		this.setData({
			num2: num2,
		})
	},
	bindMinus3: function () {
		var num3 = this.data.num3;
		if (this.data.anumber > 0) {
			var cate = this.data.anumber;
		} else {
			var cate = this.data.num0;
		}	
		num3 = num3 - cate;
		this.setData({
			num3: num3,
		})
	},

	/*点击加号*/
	bindPlus: function (e) {
		var num = this.data.num;
		if (this.data.anumber > 0) {
			var cate = this.data.anumber;
		} else {
			var cate = this.data.num0;
		}	
		num = num + parseFloat(cate);
		this.setData({
			num: num,

		})
		console.log(num)
	},
	bindPlus1: function () {
		var num1 = this.data.num1;
		if (this.data.anumber > 0) {
			var cate = this.data.anumber;
		} else {
			var cate = this.data.num0;
		}	
		num1 = num1 + parseFloat(cate);
		this.setData({
			num1: num1,
		})
	},
	bindPlus2: function () {
		var num2 = this.data.num2;
		if (this.data.anumber > 0) {
			var cate = this.data.anumber;
		} else {
			var cate = this.data.num0;
		}	
		num2 = num2 + parseFloat(cate);
		this.setData({
			num2: num2,

		})
	},
	bindPlus3: function () {
		var num3 = this.data.num3;
		if (this.data.anumber > 0) {
			var cate = this.data.anumber;
		} else {
			var cate = this.data.num0;
		}	
		num3 = num3 + parseFloat(cate);
		this.setData({
			num3: num3,

		})
	},
	/*输入框事件*/
	bindManual: function (e) {
		var num = e.detail.value;	
		this.setData({
			num: parseFloat(num),
		})
		console.log(e)
	},
	bindManual1: function (e) {
		var num1 = e.detail.value;
		//var minusStatus = num > 0 ? 'normal' : 'disable';		
		this.setData({
			num1: parseFloat(num1),
			//minusStatus: minusStatus
		})
	},
	bindManual2: function (e) {
		//console.log(e)
		var num2 = e.detail.value;
		//var minusStatus = num > 0 ? 'normal' : 'disable';		
		this.setData({
			num2: parseFloat(num2),
			//minusStatus: minusStatus
		})
	},
	bindManual3: function (e) {
		//console.log(e)
		var num3 = e.detail.value;
		//var minusStatus = num > 0 ? 'normal' : 'disable';		
		this.setData({
			num3: parseFloat(num3),
			//minusStatus: minusStatus
		})
	},
	// 密码输入进入专区
	bindpws: function (e){
		
		var pwass = e.detail.value;
		this.setData({
			pwass: e.detail.value,     //通过setData方法将值存进去
		})
		console.log(pwass)
	},
	btnPws:function(e){
		var inpws = this.data.inpws;
		var pwass1 = this.data.pwass;
		var ifpws = this.data.ifpws;
		this.setData({
			inpws: pwass1,
		})
		if (inpws == this.data.pws){	
			this.setData({
				ifpws: 0,
			})
			console.log(ifpws)				
		}
	},

	//重置数据
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

//赞助码
	showQrcode() {
		wx.previewImage({
			urls: ['http://m.qpic.cn/psc?/V50sID4L2mK4IE0UDNLt093sm117tMDy/45NBuzDIW489QBoVep5mccNlOvgzA2lM8CfbDSz1PuUCZiu9RQIVNWlPQWBw**E9vDXWdFC0Zhu0L9VLpYOLeH4OZdOnvIno8YNymmdC8TM!/b&bo=DQQNBAAAAAABFzA!&rf=viewer_4'],
			current: 'http://m.qpic.cn/psc?/V50sID4L2mK4IE0UDNLt093sm117tMDy/45NBuzDIW489QBoVep5mccNlOvgzA2lM8CfbDSz1PuUCZiu9RQIVNWlPQWBw**E9vDXWdFC0Zhu0L9VLpYOLeH4OZdOnvIno8YNymmdC8TM!/b&bo=DQQNBAAAAAABFzA!&rf=viewer_4' // 当前显示图片的http链接      
		})
	},
})