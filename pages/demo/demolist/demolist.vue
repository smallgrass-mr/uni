<template>
	<view>
			<block class="font" v-for="(val,index) in list"  :key="index" >
				{{index}} - {{val}}
			</block>
			<block class="font" v-for="(val,index) in list2" :key="index">
				{{val.name}}-{{val.id}}
			</block>
			<block class="font" v-for="(val,index) in list3" :key="index">
				{{val.name}}
				<block v-for="(val1,index1) in val.list" :key="index1">
						{{val1}}
				</block>
			</block>
			<block class="font" v-for="(val,index) in objlist" :key="index">
					{{index}} - {{val}}
			</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[1,2,3,4,5,6],
				list2:[
					{name:'篮球',id:1},
					{name:'足球',id:2},
					{name:'网球',id:3},
				],
				list3:[
					{
					name:'广东',
					list:[
						"广州",
						"深圳",
						"隆江"
					]
					},
					{
						name:'北京',
						list:[
							"朝阳",
							"ABA"
						]
					}
				],
				objlist:{
					name:"张三",
					sex:"男",
					tall:178
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	 .font{
		 font-size: 50upx;
	 }
</style>
