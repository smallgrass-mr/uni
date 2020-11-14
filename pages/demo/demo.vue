<template>
	<view>
		<view class="view-box animate__animated   " hover-stay-time="800" hover-class="view-box-hover animate__bounceIn animate__rubberBand">第一个view</view>
		<view>
			<text :selectable="true">
				这是text \n  这是text \n 这是text
			</text>
		</view>
		<view class="box">
				<view>1</view>
				<view>2</view>
				<view>3</view>
				<view>4</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.box>view:first-of-type{
		/* background: #007AFF; */
	}
	.box>view:last-of-type{
		/* background: yellow; */
	}
	.box>view:nth-of-type(2n-1){/*even 奇数*/
		background: red;
	}
	.box>view:nth-of-type(2n){ /*odd 偶数*/ 
		background: pink;
	}
	.view-box{
		width: 200upx;
		height: 200upx;
		background-color: #007AFF;
		color: #FFFFFF;
		margin: 100upx;
	}
	.view-box-hover{
		background-color: red;
	}
</style>
