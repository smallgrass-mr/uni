<template>
	<view>
		<view class="font">  
		{{changWeight}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				weight:1800
			}
		},
		computed:{
			//计算属性
			changWeight:function(){
				return  this.weight > 1000 ?(this.weight/1000) + 'kg':this.weight+'g'
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
