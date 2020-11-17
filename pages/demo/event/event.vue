<template>
	<view>
			<view class="box" @tap="clickevent()" >Box</view>
			<view class="box1"  @tap.stop="box1event()">
				外面
				<view class="box2" @tap.stop="box2event()" > 里面</view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:"Box1"
			}
		},
		methods: {
			clickevent:function(){
				this.name = "bbbb";
			},
			//冒泡事件处理
			box1event:function(){
				console.dir('外面')
			},
			box2event:function(){
				console.dir('里面')
			}
		}
	}
</script>

<style>
	.box{
		background: #09BB07;
		color: #FFFFFF;
		width: 80%;
		margin: auto;
		height: 80upx;
		font-size: 50upx;
		border-radius: 30upx;
		border: 1upx solid #007AFF;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.box1{
		width: 100%;
		height: 500upx;
		background: #0A98D5;
		color: #FFFFFF;
		font-size: 200upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.box2{
		width: 300upx;
		height: 300upx;
		background: #1AAD19;
		color: #FFFFFF;
		font-size: 40upx;
		justify-content: center;
		align-items: center;
	}
</style>

