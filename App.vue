<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			//开启时触发
			//检查更新
			//网络监听
			//初始化数据
		},
		onShow: function() {
			console.log('App Show')
			//显示时
		},
		onHide: function() {
			console.log('App Hide')
			//隐藏时间
		}
	}
</script>

<style>
	/*每个页面公共css */
	/*uni公共样式*/
	@import "./common/uni.css";
	/*图标*/
	@import "./common/icon.css";
	/*动画库*/
	@import "./common/animate.css";
	/*自定义样式库*/
	@import "./common/free.css";
</style>
