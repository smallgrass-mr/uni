<template>
	<view>
		<view :class="classname">
				<view>{{userinfo.username}}</view>
				<view>{{userinfo.sex}}</view>
				<view >{{userinfo.age}}</view>
		</view>
		<view :style="{'color':colordata,'font-size':size_num+'px'}"> Tom Borther</view>
		<view class="box1" v-if="is_show">BOX1 </view>
		<view class="box1" v-if="(age > 20)">age </view>
		<button type="default" @tap="changUserName('李四')">修改名字</button>
		<button type="default" @tap="changeClass()">修改样式</button>
		<button type="default" @tap="changeShow()">显示隐藏</button>
		<button type="default" @tap="changeAge()">修改年龄</button>
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
				classname:"box",
				colordata:"blue",
				size_num:"50",
				is_show:true,
				age:19
			}
		},
		methods: {
			//方法
				changUserName:function(name){
					this.userinfo.username=name;
				},
				changeClass:function(){
					this.classname = "box2";
				},
				changeShow:function(){
					this.is_show = !this.is_show;				
				},
				changeAge:function(){
					this.age = this.age + 11;
				}
		}
	}
</script>

<style>
	.box1{
		border: 1upx solid #09BB07;
		height: 100upx;
		width: 100upx;
		align-items: center;
		justify-content: center;
	}
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
