Page({
    data: {
        num: "",
        num1: "",
        num2: "",
		imgList: [
			"http://m.qpic.cn/psc?/V50sID4L2mK4IE0UDNLt093sm117tMDy/45NBuzDIW489QBoVep5mcdHooszXkRypqIGEOGl8assDHgkBV4kNRwam562ED4A10VPG0P8KA6y3QsDq0oOQTPJF.Gp4rNXCIa3bb.VJE9o!/b&bo=igKaAQAAAAABFyM!&rf=viewer_4",
			"http://m.qpic.cn/psc?/V50sID4L2mK4IE0UDNLt093sm117tMDy/45NBuzDIW489QBoVep5mcSQGhlBkrJAKG25nHzwllvQVlL6panx1SpyL6IVK4hGIcHY95ul*5ZMAq*QjUG31Nxgxk6xFSAD6akYp*WRWIE4!/b&bo=JAk4BAAAAAABFyE!&rf=viewer_4",
			"http://m.qpic.cn/psc?/V50sID4L2mK4IE0UDNLt093sm117tMDy/45NBuzDIW489QBoVep5mcXcypRqaDRvBEXOUI9oQ3ExOA19uw5tzYFMaJUMUNaJKSOHrUtKMUVBB7pRMmeUjlMkz6Xxba4ZlwKAFBNb8amw!/b&bo=OAQrBgAAAAABFyE!&rf=viewer_4",
			"http://m.qpic.cn/psc?/V50sID4L2mK4IE0UDNLt093sm117tMDy/45NBuzDIW489QBoVep5mcXcypRqaDRvBEXOUI9oQ3Ex3Xxxn*dy.klBugxLI*ozgfHOV2vEBp2bRqeWIQtVFa9obwV2m.NsYuLKSu2wVrXc!/b&bo=nQKOAQAAAAABFyA!&rf=viewer_4",
			"http://m.qpic.cn/psc?/V50sID4L2mK4IE0UDNLt093sm117tMDy/45NBuzDIW489QBoVep5mcYueKcPMc.8tOhC60c6FPVHBRP75SCB2Rxd4rbT.aZTc3ymz4rwZ.L3JMfH1HTzdNcKjTWF3doQi.Pu4xD2*jzk!/b&bo=GAKjAgAAAAADN6k!&rf=viewer_4"
		], 
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