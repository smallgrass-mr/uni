<template>
	<view class="content">
		<block v-for="(item,index) in list" :key='index'>
			<!-- 列表组件 -->
			<common-list  :item="item" :index="index"  @doSupport="doSupport"  @follow="follow"
			> </common-list>
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
							type:"",
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
						title:"这里是标题s",
						title_pic:"/static/main/bhz1.png",
						support:{
							type:"unsupport",
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
				this.getRequest();
		},
		methods: {
			getRequest(){
				// 数据列表
				uni.request({
					url: '/api/v1/article/list', //仅为示例，并非真实接口地址。
					method: 'GET',
					data: {
						text: '1'
					},
					header: {},
					success: (res) => {
						console.log(res.data);
						// this.result = res.data.data;
					}
				});
			},
			//详情
			openDetail(){
				console.log('detail');
			},
			//顶踩
			doSupport(e){
				let item = this.list[e.index] ;
				let msg = ( e.type==='support') ?'顶':'踩';
				//之前没有操作过
				if(item.support.type === ''){
					item.support.type = e.type ;
					this.list[e.index].support[e.type+'_count']++ ;
					return ; 
				}else if(item.support.type === 'support' && e.type === 'unsupport' ){
					//之前顶过
					item.support.support_count --;
					item.support.unsupport_count++ ;
				}else if(item.support.type === 'unsupport' && e.type === 'support' ){
					//之前踩过
					item.support.support_count++ ;
					item.support.unsupport_count-- ;
				}
				item.support.type = e.type ;
				uni.showToast({
					title:msg+'成功'
				})
				
			},
			//关注
			follow(e){
					this.list[e].is_follow = true ;
					uni.showToast({
						title:'关注成功'
					})
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
