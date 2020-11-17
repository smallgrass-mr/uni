<template>
	<view>
		<view class="font">{{num>10?'优秀':''}}</view>
		<button type="primary" @tap="changes()" > 修改 </button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
					name:"我是个人",
					num:0
			}
		},
		watch:{
			//监听
			name:function(val){
				console.log(val);
			},
			num:function(num){
				console.log(num);
			}
		},
		methods: {
			changes:function(){
				this.num = this.num + 1;
			}
		}
	}
</script>

<style>

</style>
