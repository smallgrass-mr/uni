<template>
	<view>
		<template v-if="searchList.length ===0">
			<!-- 搜索历史 -->
			<view class="py-2 font-md px-2" >搜索历史</view>
			<view class="flex flex-wrap">
					<view @click="clickSearchHistory(item)" class="border rounded font mx-2 my-1 px-2 py-1 bgh"  hover-class="bg-light"  v-for="(item,index) in list " :key ="index" > 
						{{item}}
					</view>
			</view>
		</template>
		<template v-else>
			<!-- 数据列表 -->
				<block v-for="(item,index) in searchList" :key='index'>
						<common-list :item="item" :index="index"></common-list>
				</block>
		</template>
	</view>
</template>

<script>
	import commonList from '@/components/common/common-list.vue';
	const demo =[
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
				support_count:0,
				unsupport_count:2
			},
			comment_count:2,
			share_num:2
		}
	];
	
	export default {
		components:{
			commonList
		},
		data() {
			return {
				searchText:"",
				list:[
					"路飞",
					"路西",
					"索隆路痴",
					"乔巴"
				],
				searchList:[
					
				]
			}
		},
		//监听导航输入
		onNavigationBarSearchInputChanged(e){
			console.log(e);
			this.searchText = e.text;
		},
		// 监听导航搜索按钮
		onNavigationBarButtonTap(e){
			if(e.index ===0){
				this.searchEvent();
			}
		},
		methods: {
				//点击搜索历史
				clickSearchHistory(text){
					this.searchText = text ;
					this.searchEvent();
				},
				//搜索事件
				searchEvent(){
					//收起键盘
					uni.hideKeyboard();
					//处于loading状态
					uni.showLoading({
						title:"加载中...",
						mask:true
					})
					//请求搜索
					setTimeout(()=>{
						this.searchList = demo;
						uni.hideLoading();
					},2000)
			}
			
		}
	}
</script>

<style>

</style>
