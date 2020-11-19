<template>
	<!-- 帖子内容 -->
	<view class="p-2" >
		<!-- 头像昵称 -->
		<view  class="flex align-center justify-between" >
			<view  class="flex align-center" >
				<image class="rounded-circle mr-2"   :src="item.user_pic" style="width: 65rpx;height: 65rpx;" lazy-load> </image>
				<view>
					<view class="font" >{{item.username}}</view>
					<view class="font-sm text-light-muted" >{{item.news_time}}</view>
				</view>
			</view>
			<!-- 图标按钮 -->
			<view class="flex justify-center align-center rounded text-white animate__animated animate__jello animate__faster"  
			hover-class="jello" style="width: 90rpx;height: 50rpx;background-color: #ff4a6a;"
			@click="follow()"
			>关注</view>
		</view>
		<!-- 标题 -->
		<view  class="font my-1">{{item.title}}</view>
		<view >
			<image class="rounded w-100" v-if="item.title_pic"  :src="item.title_pic" style="height: 350rpx; "  ></image>
		</view>
		<!-- 图片按钮 -->
		<view  class="flex align-center" >
			<view  class="flex align-center justify-center flex-1 animate__animated animate__jello " 
			  :class="item.support.type === 'unsupport' ?'text-main':''"
			  @click="doSupport('support')"
			 >
				<text class="iconfont icon-dianzan mr-2"  >{{item.support.support_count}}</text>
			</view>
			<view  class="flex align-center justify-center flex-1 mr-20 animate__animated animate__jello " 
			 :class="item.support.type === 'unsupport' ?'text-main':''"
			>
				<text class="iconfont icon-cai mr-2" >{{item.support.unsupport_count}}</text>
			</view>
			<view  class="flex align-center justify-center flex-1 animate__animated animate__jello"
			  :class="item.support.type === 'unsupport' ?'text-main':''"
			 >
				<text class="iconfont icon-pinglun mr-2" >{{item.comment_count}}</text>
			</view>
			<view class="flex align-center justify-center flex-1 animate__animated  animate__jello" >
				<text class="iconfont icon-zhuanfa1 mr-2" >转发</text>
			</view>
			
		</view>
	</view>
</template>

<script>
		export default{
			props:{
				item:Object,
				index:Number
			},
			methods:{
				//详情
				openDetail(){
					console.log('detail');
				},
				//踩
				doSupport(type){
					this.$emit('doSupport',{
						type:type,
						index:this.index
					})
				},
				//赞
				follow(){
					this.$emit('follow',this.index)
				},
				//打开空间
				openSpace(){
					console.log('openSpace');
				},
			}
		}
</script>

<style>
</style>
