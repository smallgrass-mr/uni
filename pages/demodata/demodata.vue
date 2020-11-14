<template>
	<view>
		<view :class="classname">
				<view>{{userinfo.username}}</view>
				<view>{{userinfo.sex}}</view>
				<view>{{userinfo.age}}</view>
		</view>
		<button type="default" @tap="changUserName('李四')">修改名字</button>
		<button type="default" @tap="changeClass()">修改样式</button>
	</view>
</template>

<script>
	export default {
		data() {
			//数据
			return {
				userinfo:{
					username:"张三",
					age:18,
					sex:"男"
				},
				classname:"box"
			}
		},
		methods: {
			//方法
				changUserName:function(name){
					this.userinfo.username=name;
				},
				changeClass:function(){
					this.classname = "box2";
				}
		}
	}
</script>

<style>
.box{
	border: 1upx solid #333333;
	height: 500upx;
	width: 100%;
	display: flex;
}
.box2{
	border: 1upx solid #333333;
	height: 500upx;
	width: 100%;
	display: flex;
}
.box>view{
	background: #007AFF;
	color: #FFFFFF;
	font-size: 40upx;
	font-weight: bold;
	flex: 1;
	height: 500upx;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1upx solid #F0AD4E;
}
</style>
