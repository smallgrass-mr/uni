<template>
	<view class="content">
		<scroll-view scroll-x :scroll-into-view="scrollInto" scroll-with-animation  class="scroll-row " >
				<view v-for="(item,index)  in tabBars " :key ="index" 
				class="scroll-row-item p-3  font-md" 
				:id="'tab'+item.id"
				:class="tabIndex===index ?'text-main font-lg' : ''"
				@click="changeTab(index)"
				>
				{{item.name}}
				</view>
		</scroll-view>
				
		<!-- 滑块 -->
		<swiper  :duration="150" :current="tabIndex" @change="onChangeTab($event)"  :style="'height:'+scrollH+'px'">
			<swiper-item v-for="(item,index1) in newsList" :key="index1">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px'" @scrolltolower="loadmore(index1)">
					<template v-if="item.list.length > 0">
						<!-- 数据列表 -->
						<block v-for="(item,index) in item.list" :key='index'>
							<!-- 列表组件 -->
							<common-list  :item="item" :index="index"  @doSupport="doSupport($event,index1,index)"  @follow="follow($event,index1,index)"
							> </common-list>
							<!-- 全局分割线组件 -->
							<devider></devider>
						</block>
						<!-- 上拉加载 -->
						<load-more :loarmore="item.loadmore"></load-more>
					</template>
					<template v-else>
						<!-- 缺省图 -->
						<nothing></nothing>
					</template>
					
				</scroll-view>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
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
	import commonList from '@/components/common/common-list.vue';
	import loadMore from '@/components/common/load-more.vue';
	import nothing from '@/components/common/nothing.vue';
	export default {
		components:{
			commonList,
			loadMore,
			nothing
		},
		//点击搜索框
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
				url: '../search/search',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		data() {
			return {
				//列表高度
				scrollH:1600,
				scrollInto:"",
				tabIndex:0,
				tabBars:[
					{
						id:0,
						name:"关注"
					},{
						id:1,
						name:"推荐"
					},{
						id:2,
						name:"体育"
					},{
						id:3,
						name:"热点"
					},{
						id:4,
						name:"财经"
					},{
						id:5,
						name:"娱乐"
					},{
						id:6,
						name:"日常"
					},{
						id:7,
						name:"人文"
					},{
						id:8,
						name:"历史"
					}
				],
				newsList:[]
			}
		},
		onLoad() {
				// this.getRequest();
				uni.getSystemInfo({
					success:res=>{
						//px 
						this.scrollH = res.windowHeight - uni.upx2px(100);
					}
				})
				//根据选项生成列表
				this.getData();
		},
		methods: {
			//上拉加载更多
			loadmore(index){
				let item = this.newsList[index];
				this.newsList[index].loadmore = '加载中...';
				setTimeout(()=>{
					item.list = [...item.list,...item.list]; 
					//恢复加载状态
					this.newsList[index].loadmore = '下拉加载更多...';
				},2000)
			},
			getData(){
				let arr = [];
				for(let i = 0; i<this.tabBars.length; i++){
						let obj = {
							//1.上拉加载更多,2.加载中,3.没有更多了
							loadmore:"上拉加载更多",
							list:[]
						}
						if(i < 3){
							obj.list = demo;
						}
						arr.push(obj);
				}
				this.newsList = arr ;
				console.log(arr);
			},
			//滑动
			onChangeTab(e){
				// console.log(e.detail.current);
				this.changeTab(e.detail.current);
			},
			//切换选项
			changeTab(index){
				if(index === this.tabIndex){
					return ;
				}
				this.tabIndex = index ;
				//滚动到点击处
				this.scrollInto = 'tab'+index;
			},
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
			doSupport(e,index1,index2){
				let item = this.newsList[index1].list[index2];
		
				let msg = ( e.type==='support') ?'顶':'踩';
				//之前没有操作过
				if(item.support.type === ''){
					item.support.type = e.type ;
					item.support[e.type+'_count']++ ;
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
			follow(e,index1,index2){
					let item = this.newsList[index1].list[index2];
					console.log(item);
					item.is_follow = true ;
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
