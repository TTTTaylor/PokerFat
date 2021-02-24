Page({
    data: {
        num: "",
        num1: "",
        num2: ""
    },

    getdata: function(option) {
        wx.showToast({
            title: '获取成功！',
            icon: 'success',
			duration: 1000,
        })

        var that = this;
        var num = '';
        var num1 = '';
        var num2 = '';
        wx.getStorage({ //获取本地缓存
                key: "data1",
                success: function(res) {
                    that.setData({
                        num: res.data,
                    });
                },
            }),
            wx.getStorage({ //获取本地缓存
                key: "data2",
                success: function(res) {
                    that.setData({
                        num1: res.data,
                    });
                },
            }),
            wx.getStorage({ //获取本地缓存
                key: "data3",
                success: function(res) {
                    that.setData({
                        num2: res.data,
                    });
                },
            })

        // console.log(num)
    },

    //转发小程序
    onShareAppMessage: function() {
        return {
            "title": app.globalData.appName
        }
    },
})