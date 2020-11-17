<template>
	<view class="content">
		<!-- 帖子内容 -->
		<view class="p-2" >
			<!-- 头像昵称 -->
			<view  style="display: flex;align-items: center;justify-content: space-between;">
				<view style="display: flex; align-items: center;">
					<image  src="/static/main/edit.png" style="width: 65rpx;height: 65rpx;border-radius: 100%;margin-right: 20rpx;" lazy-load> </image>
					<view>
						<view style="font-size: 30rpx;border: 1rpx solid #333333;line-height: 1.5;">昵称</view>
						<view style="color:#9d9589; font-size: 25rpx;line-height: 1.5;">2020-10-20 18:60:01</view>
					</view>
				</view>
				<!-- 图标按钮 -->
				<view  style="width: 90rpx;height: 50rpx;display: flex;align-items: center;justify-content: center;border-radius: 5rpx;background-color: #ff4a6a;color: #FFFFFF;">
					关注
				</view>
			</view>
			<!-- 标题 -->
			<view style="font-size: 30rpx;margin: 10rpx 0;">标题党MMMMM</view>
			<view >
				<image src="/static/main/edit.png" style="width100%: 350rpx; border-radius: 5rpx;"  ></image>
			</view>
			<!-- 图片按钮 -->
			<view style="display: flex;align-items: center;">
				<view style="flex: 1;display: flex;align-items: center;justify-content: center;">
					<text class="iconfont icon-dianzan"  style="margin-right: 20rpx;">点赞</text>
				</view>
				<view style="flex: 1;display: flex;align-items: center;justify-content: center;">
					<text class="iconfont icon-cai" style="margin-right: 20rpx;">踩</text>
				</view>
				<view style="flex: 1;display: flex;align-items: center;justify-content: center;">
					<text class="iconfont icon-pinglun" style="margin-right: 20rpx;">评论</text>
				</view>
				<view style="flex: 1;display: flex;align-items: center;justify-content: center;">
					<text class="iconfont icon-zhuanfa1" style="margin-right: 20rpx;">转发</text>
				</view>
	
			</view>
		</view>
		
		
		
<!-- 		<view class="animate__animated  animate__bounce" hover-class="" style="border:1rpx solid #333333;padding: 20rpx;">
			点击效果
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
</style>
