<template>
	<view class="content">
		<block v-for="(item,index) in list" :key='index'>
			<!-- 列表组件 -->
			<common-list  :item="item" :index="index"> </common-list>
			<!-- 全局分割线组件 -->
			<devider></devider>
		</block>
	</view>
</template>

<script>
	import commonList from '@/components/common/common-list.vue';
	export default {
		components:{
			commonList
		},
		data() {
			return {
				list:[
					{
						username:"三千世界",
						user_pic:"/static/main/userpic.png",
						news_time:"2020-11-19 10:00:00",
						is_follow:false,
						title:"这里是标题",
						title_pic:"/static/main/sl1.png",
						support:{
							type:"support",
							support_count:1,
							unsupport_count:2
						},
						comment_count:2,
						share_num:2
					},
					{
						username:"三千世界",
						user_pic:"/static/main/userpic.png",
						news_time:"2020-11-19 10:00:00",
						is_follow:false,
						title:"这里是标题",
						title_pic:"/static/main/bhz1.png",
						support:{
							type:"support",
							support_count:1,
							unsupport_count:2
						},
						comment_count:2,
						share_num:2
					},
					{
						username:"三千世界",
						user_pic:"/static/main/userpic.png",
						news_time:"2020-11-19 10:00:00",
						is_follow:false,
						title:"这里是标题",
						title_pic:"/static/main/hy1.png",
						support:{
							type:"support",
							support_count:1,
							unsupport_count:2
						},
						comment_count:2,
						share_num:2
					}
				]
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
